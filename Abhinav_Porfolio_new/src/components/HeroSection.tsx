import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/abhinav-profile.jpg";

const roles = ["AI Student", "System Engineer", "ML Enthusiast", "Problem Solver"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = deleting ? 40 : 80;

    if (!deleting && charIndex === current.length) {
      setTimeout(() => setDeleting(true), 2000);
      return;
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (deleting ? -1 : 1));
    }, timeout);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 pt-20">
        <div className="flex-1 text-center md:text-left">
          <p className="section-label mb-4">Welcome to my portfolio</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
            Hello, I'm{" "}
            <span className="glow-text">Abhinav Sathiyamoorthy</span>
          </h1>
          <div className="text-xl sm:text-2xl text-muted-foreground mb-8 h-10">
            <span>{roles[roleIndex].substring(0, charIndex)}</span>
            <span className="typing-cursor">&nbsp;</span>
          </div>
          <p className="text-muted-foreground max-w-lg mb-8 mx-auto md:mx-0">
            Artificial Intelligence enthusiast and developer passionate about creating smart, scalable solutions to real-world problems. Based in Melbourne, Australia.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <a href="/Resume_Abhinav.pdf" download className="neon-button-outline">
              Download Resume
            </a>
          </div>

          <div className="flex gap-5 justify-center md:justify-start">
            <a href="https://github.com/itzAbhinav" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/abhinav-s-04114222a/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Linkedin size={22} />
            </a>
            <a href="mailto:abhisathya2k@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden glow-border animate-float" style={{ animationDelay: "0s" }}>
            <img src={profileImg} alt="Abhinav Sathiyamoorthy" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
