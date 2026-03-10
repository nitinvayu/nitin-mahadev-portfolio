import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillCategory {
  title: string;
  emoji: string;
  skills: { name: string; level: number }[];
}

// EDIT: Skills data
const categories: SkillCategory[] = [
  {
    title: "Languages",
    emoji: "🔵",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "C", level: 70 },
      { name: "Apex (Salesforce)", level: 75 },
    ],
  },
  {
    title: "Web",
    emoji: "🌐",
    skills: [
      { name: "HTML5 / CSS3", level: 85 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "Lightning Web Components", level: 70 },
    ],
  },
  {
    title: "Cloud & DevOps",
    emoji: "☁️",
    skills: [
      { name: "AWS EC2 / S3", level: 75 },
      { name: "Docker", level: 80 },
      { name: "GitHub Actions", level: 85 },
      { name: "Git", level: 90 },
    ],
  },
  {
    title: "Databases",
    emoji: "🗄️",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    title: "Methods",
    emoji: "⚙️",
    skills: [
      { name: "Agile / CI/CD", level: 85 },
      { name: "REST APIs", level: 85 },
      { name: "OOP / DSA", level: 90 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between text-sm font-body mb-1">
        <span className="text-foreground">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent-blue rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Skills = () => (
  <section id="skills" className="py-24 gradient-mesh">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-display font-bold text-4xl mb-16 text-center"
      >
        Technical Arsenal
        <span className="block w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="font-display font-bold text-lg mb-4">
              {cat.emoji} {cat.title}
            </h3>
            {cat.skills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>
        ))}
      </div>

      {/* LeetCode Badge */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <div className="bg-bg-card border border-primary/30 rounded-2xl px-10 py-6 text-center teal-glow">
          <span className="text-4xl mb-2 block">🏆</span>
          <p className="font-display font-bold text-2xl text-primary">500+</p>
          <p className="text-muted-foreground font-body text-sm">LeetCode Problems Solved</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
