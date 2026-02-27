import { useState, type FormEvent } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useScrollReveal();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div ref={ref} className="max-w-3xl mx-auto scroll-reveal">
        <p className="section-label mb-2 text-center">// contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground text-center">Get In Touch</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="input-cosmic"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
            />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="input-cosmic"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
            />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="input-cosmic resize-none"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
            />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>
          <button type="submit" className="neon-button w-full flex items-center justify-center gap-2">
            Send Message <Send size={16} />
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-10">
          <a href="https://github.com/itzAbhinav" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/abhinav-s-04114222a/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={22} />
          </a>
          <a href="mailto:abhisathya2k@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
