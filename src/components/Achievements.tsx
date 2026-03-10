import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Achievement {
  icon: string;
  value: number;
  suffix: string;
  label: string;
  detail: string;
}

// EDIT: Achievements data
const achievements: Achievement[] = [
  { icon: "🏆", value: 500, suffix: "+", label: "LeetCode Problems", detail: "ID: StarKodar69" },
  { icon: "📜", value: 87, suffix: "%", label: "NPTEL Certified", detail: "Joy of Computing Using Python" },
  { icon: "🥇", value: 500, suffix: "", label: "Global Rank", detail: "SmartInterviews · 200+ challenges" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Achievements = () => (
  <section className="py-16 gradient-mesh">
    <div className="max-w-5xl mx-auto px-6">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-display font-bold text-4xl mb-12 text-center"
      >
        Milestones
        <span className="block w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </motion.h2>

      <div className="grid sm:grid-cols-3 gap-6">
        {achievements.map((a, i) => (
          <motion.div
            key={a.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 teal-glow-hover transition-all duration-300"
          >
            <span className="text-3xl block mb-3">{a.icon}</span>
            <p className="font-display font-bold text-3xl text-primary">
              <Counter target={a.value} suffix={a.suffix} />
            </p>
            <p className="font-display font-semibold text-sm mt-1">{a.label}</p>
            <p className="text-muted-foreground text-xs font-body mt-1">{a.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
