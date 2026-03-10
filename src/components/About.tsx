import { motion } from "framer-motion";
import { Download } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => (
  <section id="about" className="py-24 gradient-mesh">
    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      {/* Left text */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="font-display font-bold text-4xl mb-8">
          About Me
          <span className="block w-16 h-1 bg-primary mt-4 rounded-full" />
        </h2>

        <div className="space-y-4 text-muted-foreground font-body leading-relaxed text-sm">
          <p>
            I'm Nitin Mahadev, a Computer Science student at Vasavi College of Engineering
            (graduating May 2026) with a CGPA of 8.9. I'm passionate about building reliable,
            scalable backend systems and solving complex engineering problems.
          </p>
          <p>
            During my internship at S&P Global, I built enterprise Salesforce APIs and LWC
            components used by real stakeholders — shipping production code from day one.
          </p>
          <p>
            Outside of work, I grind DSA problems (500+ on LeetCode) and explore cloud
            infrastructure and automation. I'm actively seeking SDE-1 / Software Engineer roles
            where I can grow fast and ship meaningful products.
          </p>
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg teal-glow-hover transition-all hover:scale-105"
        >
          <Download size={16} /> Download Resume
        </a>
      </motion.div>

      {/* Right — Terminal */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="hidden lg:block"
      >
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <span className="w-3 h-3 rounded-full bg-destructive opacity-60" />
            <span className="w-3 h-3 rounded-full opacity-60" style={{ backgroundColor: "hsl(45 93% 47%)" }} />
            <span className="w-3 h-3 rounded-full opacity-60" style={{ backgroundColor: "hsl(142 71% 45%)" }} />
            <span className="text-xs text-muted-foreground font-body ml-2">terminal</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-2">
            <p><span className="text-primary">$</span> npm run nitin</p>
            <p className="text-muted-foreground">Starting awesome engineer...</p>
            <p className="text-muted-foreground">✓ Loading 500+ LeetCode solutions</p>
            <p className="text-muted-foreground">✓ Connecting to S&P Global APIs</p>
            <p className="text-muted-foreground">✓ Deploying Docker containers</p>
            <p className="text-muted-foreground">✓ CGPA: 8.9/10 loaded</p>
            <p className="text-primary mt-2">🚀 Ready to build amazing things!</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
