import { Github, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => (
  <footer className="relative">
    {/* Teal gradient line */}
    <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-body">
        <span className="hover:text-primary transition-colors">Nitin Mahadev</span> © 2025
      </p>
      <p className="text-sm text-muted-foreground font-body">Built with React & passion</p>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "https://github.com/nitinvayu" },
          { icon: Linkedin, href: "https://linkedin.com/in/nitinvayuvegula/" },
          { icon: ExternalLink, href: "https://leetcode.com/StarKodar69" },
        ].map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
