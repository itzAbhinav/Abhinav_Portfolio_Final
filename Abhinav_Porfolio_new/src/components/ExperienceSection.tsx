import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    role: "System Engineer",
    company: "Tata Consultancy Services Ltd",
    location: "Trivandrum, India",
    period: "Nov 2024 – Feb 2026",
    description: "Worked as a System Engineer (Grade-CI), gained proficient knowledge in Java, JDBC, Azure Cloud Platform & ServiceNow related tasks.",
  },
  {
    role: "Project Trainee",
    company: "Indian Space Research Organisation (ISRO)",
    location: "Trivandrum, India",
    period: "Jan 2024 – Mar 2024",
    description: 'Worked on a research project entitled "Automated Identification of Venusian Volcanic Features using Convolutional Neural Networks".',
  },
];

const ExperienceSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div ref={ref} className="max-w-6xl mx-auto scroll-reveal">
        <p className="section-label mb-2">// experience</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">Work Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] timeline-line hidden sm:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="flex gap-6 sm:gap-8">
                <div className="hidden sm:flex flex-col items-center pt-1.5">
                  <div className="timeline-dot" />
                </div>
                <div className="glass-card p-6 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-xs font-mono text-primary">{exp.period}</span>
                  </div>
                  <p className="text-sm text-secondary mb-3">{exp.company} — {exp.location}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
