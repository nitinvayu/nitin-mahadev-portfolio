import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface TimelineEntry {
  type: "work" | "education";
  role: string;
  org: string;
  duration: string;
  location?: string;
  cgpa?: string;
  bullets?: string[];
  tags: string[];
}

// EDIT: Experience entries
const entries: TimelineEntry[] = [
  {
    type: "work",
    role: "Software Developer Intern",
    org: "S&P Global",
    duration: "June 2025 – August 2025",
    location: "India",
    bullets: [
      "Designed Salesforce Apex APIs to integrate multi-tier enterprise systems, reducing manual data handling by 30%",
      "Implemented backend business logic in Apex — data transformations, validations, SOQL queries",
      "Built responsive Lightning Web Components (LWC) for internal stakeholder dashboards",
      "Collaborated in Agile sprints with senior engineers to improve scalability and code quality",
    ],
    tags: ["Salesforce", "Apex", "LWC", "Agile", "SOQL"],
  },
  {
    type: "education",
    role: "BE Computer Science",
    org: "Vasavi College of Engineering",
    duration: "August 2022 – May 2026",
    cgpa: "8.9",
    tags: ["DSA", "OOP", "Algorithms"],
  },
];

const Experience = () => (
  <section id="experience" className="py-24 gradient-mesh">
    <div className="max-w-4xl mx-auto px-6">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-display font-bold text-4xl mb-16 text-center"
      >
        My Journey
        <span className="block w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />

        {entries.map((entry, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`relative mb-12 md:w-1/2 ${
              i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
            } pl-12 md:pl-0`}
          >
            {/* Dot */}
            <div className={`absolute top-2 w-4 h-4 rounded-full bg-primary left-4 md:left-auto -translate-x-1/2 ${
              i % 2 === 0 ? "md:right-0 md:translate-x-1/2 md:left-auto" : "md:left-0 md:-translate-x-1/2"
            }`}>
              <span className="absolute inset-0 rounded-full bg-primary/40" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
            </div>

            <div className="bg-bg-card border border-border rounded-xl p-6 hover:-translate-y-2 hover:border-primary/30 teal-glow-hover transition-all duration-300 border-l-2 border-l-primary">
              <span className="text-xs text-primary font-body uppercase tracking-wider">{entry.duration}</span>
              <h3 className="font-display font-bold text-xl mt-1">{entry.role}</h3>
              <p className="text-muted-foreground font-body text-sm">{entry.org}{entry.location ? ` · ${entry.location}` : ""}</p>
              {entry.cgpa && <p className="text-primary font-body text-sm mt-1">CGPA: {entry.cgpa}</p>}

              {entry.bullets && (
                <ul className="mt-4 space-y-2">
                  {entry.bullets.map((b, j) => (
                    <li key={j} className="text-muted-foreground text-sm font-body flex gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mt-4">
                {entry.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full font-body">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
