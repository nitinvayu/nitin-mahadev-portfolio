import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink, Copy, Check, Send } from "lucide-react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("nitinvayu30@gmail.com");
    setCopied(true);
    toast.success("Email copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const inputClass = "w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <section id="contact" className="py-24 relative gradient-mesh">
      {/* Teal glow in corner */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display font-bold text-4xl mb-16 text-center"
        >
          Let's Connect
          <span className="block w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
            </div>
            <div>
              <input
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
              {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
            </div>
            <input
              placeholder="Subject (optional)"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className={inputClass}
            />
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClass + " resize-none"}
              />
              {errors.message && <p className="text-destructive text-xs mt-1 font-body">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg teal-glow-hover hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>

          {/* Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <button
              onClick={copyEmail}
              className="flex items-center gap-4 w-full p-4 bg-bg-card border border-border rounded-xl hover:border-primary/30 transition-all group"
            >
              <Mail size={20} className="text-primary" />
              <div className="text-left flex-1">
                <p className="text-sm font-body text-foreground">nitinvayu30@gmail.com</p>
                <p className="text-xs text-muted-foreground font-body">Click to copy</p>
              </div>
              {copied ? <Check size={16} className="text-primary" /> : <Copy size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />}
            </button>

            {[
              { icon: Github, label: "GitHub", value: "github.com/nitinvayu", href: "https://github.com/nitinvayu" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/nitinvayuvegula", href: "https://linkedin.com/in/nitinvayuvegula/" },
              { icon: ExternalLink, label: "LeetCode", value: "StarKodar69", href: "https://leetcode.com/StarKodar69" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-xl hover:border-primary/30 transition-all group"
              >
                <Icon size={20} className="text-primary" />
                <div>
                  <p className="text-sm font-body text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground font-body">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
