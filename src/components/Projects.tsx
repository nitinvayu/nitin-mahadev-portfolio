import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, X } from "lucide-react";

interface Project {
  title: string;
  tags: string[];
  description: string;
  highlights: string[];
  github?: string;
  gradient: string;
}

// EDIT: Projects data
const projects: Project[] = [
  {
    title: "Supermarket Management System",
    tags: ["Python", "Flask", "SQL", "PostgreSQL"],
    description: "Robust inventory & sales reconciliation system built with Flask and relational databases. Applied OOP principles for scalability. Achieved 100% financial data accuracy by eliminating booking discrepancies.",
    highlights: ["SQL-backed distributed storage", "Object-Oriented design", "100% financial accuracy"],
    github: "https://github.com/nitinvayu",
    gradient: "from-primary/20 to-accent-blue/10",
  },
  {
    title: "Automated Deployment Pipeline",
    tags: ["Docker", "AWS EC2", "AWS S3", "GitHub Actions", "Python"],
    description: "End-to-end CI/CD pipeline that automated testing, Docker builds, and AWS deployments — reducing manual deployment time by 90%. Containerized apps for environment consistency.",
    highlights: ["90% reduction in deployment time", "Full automation", "Docker containerization"],
    github: "https://github.com/nitinvayu",
    gradient: "from-accent-blue/20 to-primary/10",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 gradient-mesh">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display font-bold text-4xl mb-16 text-center"
        >
          Things I've Built
          <span className="block w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-bg-card border border-border rounded-xl overflow-hidden hover:-translate-y-2 hover:border-primary/30 teal-glow-hover transition-all duration-300"
            >
              {/* Gradient banner */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center gap-3 p-6`}>
                {project.tags.slice(0, 3).map((t) => (
                  <span key={t} className="px-3 py-1 bg-background/50 backdrop-blur rounded-full text-xs font-body text-foreground">{t}</span>
                ))}
              </div>

              <div className="p-6">
                <h3 className="font-display font-bold text-xl mb-3">{project.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full font-body">{t}</span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-primary/30 text-primary text-sm rounded-lg hover:bg-primary/10 transition-colors font-body"
                    >
                      <Github size={14} /> View on GitHub
                    </a>
                  )}
                  <button
                    onClick={() => setSelected(project)}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bg-card border border-border rounded-2xl max-w-lg w-full p-8 relative"
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
              <h3 className="font-display font-bold text-2xl mb-4">{selected.title}</h3>
              <p className="text-muted-foreground font-body text-sm mb-6">{selected.description}</p>

              <h4 className="font-display font-semibold text-sm text-primary mb-2">Key Achievements</h4>
              <ul className="space-y-1 mb-6">
                {selected.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted-foreground font-body flex gap-2">
                    <span className="text-primary">▸</span>{h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {selected.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full font-body">{t}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
