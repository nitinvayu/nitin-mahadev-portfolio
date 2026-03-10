import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, ChevronDown, Download } from "lucide-react";
import ThreeBackground from "./ThreeBackground";

const useTypewriter = (text: string, speed = 80, delay = 1500) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
};

const Hero = () => {
  const { displayed, done } = useTypewriter("Software Engineer Intern", 70, 1200);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  // EDIT: Floating badges around avatar
  const badges = [
    { label: "Python", position: "top-0 right-0 animate-float-1" },
    { label: "AWS", position: "bottom-4 left-0 animate-float-2" },
    { label: "Salesforce", position: "top-4 -left-4 animate-float-3" },
    { label: "500+ LeetCode", position: "bottom-0 right-0 animate-float-4" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <ThreeBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-5 gap-12 items-center pt-20">
        {/* Left Content */}
        <motion.div
          className="lg:col-span-3"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={fadeUp} className="text-primary text-sm uppercase tracking-[0.3em] font-body mb-4">
            Software Engineer
          </motion.p>

          <motion.h1 variants={fadeUp} className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-2">
            Hi, I'm<br />
            <span className="text-primary">Nitin Mahadev</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="h-8 mb-6">
            <span className="font-body text-lg text-muted-foreground">
              {displayed}
              <span className={`inline-block w-0.5 h-5 bg-primary ml-1 align-middle ${done ? "animate-blink" : ""}`} />
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="text-muted-foreground font-body max-w-lg text-base leading-relaxed mb-8">
            Building enterprise-scale backend systems & Salesforce applications.
            500+ DSA problems solved. Currently pursuing BE at Vasavi College of Engineering.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg teal-glow-hover transition-all hover:scale-105"
            >
              Explore My Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-primary text-primary font-body font-semibold rounded-lg hover:bg-primary/10 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Download size={16} /> Download Resume
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-5">
            {[
              { icon: Github, href: "https://github.com/nitinvayu", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/nitinvayuvegula/", label: "LinkedIn" },
              { icon: ExternalLink, href: "https://leetcode.com/StarKodar69", label: "LeetCode" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
                aria-label={label}
              >
                <Icon size={22} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Avatar */}
        <motion.div
          className="lg:col-span-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72">
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-full" style={{ animation: "spin-border 8s linear infinite" }}>
              <div className="w-full h-full rounded-full"
                style={{ background: "conic-gradient(from 0deg, hsl(168 76% 42%), transparent 40%, hsl(217 91% 60%), transparent 80%, hsl(168 76% 42%))" , padding: "3px" }}>
                <div className="w-full h-full rounded-full bg-background" />
              </div>
            </div>

            {/* Avatar inner */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-primary/20 to-accent-blue/20 flex items-center justify-center overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Nitin Mahadev"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                }}
              />
              <span className="hidden text-5xl font-display font-bold text-primary absolute">NM</span>
            </div>

            {/* Floating badges */}
            {badges.map((badge) => (
              <div
                key={badge.label}
                className={`absolute ${badge.position} px-3 py-1.5 bg-bg-card border border-primary/30 rounded-full text-xs font-body text-primary z-10`}
              >
                {badge.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={24} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;
