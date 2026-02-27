import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap } from "lucide-react";

const skills = [
  { name: "Python", level: 90 },
  { name: "C++", level: 80 },
  { name: "Java", level: 75 },
  { name: "PyTorch / ML", level: 85 },
  { name: "CNNs / Neural Networks", level: 85 },
  { name: "HTML / DBMS", level: 70 },
  { name: "NumPy / Pandas", level: 88 },
  { name: "XGBoost / Naive Bayes", level: 78 },
];

const education = [
  {
    degree: "Master of Artificial Intelligence",
    school: "Monash University, Clayton, Australia",
    period: "Mar 2026 – Present",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Amrita Vishwa Vidyapeetham, Coimbatore, India",
    period: "Oct 2020 – May 2024",
    extra: "CGPA: 6.98 / 10",
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    school: "The Tulip International School, Ahmedabad, India",
    period: "2018 – 2020",
  },
  {
    degree: "Secondary Education (Class X)",
    school: "Kendriya Vidyalaya SAC, Ahmedabad, India",
    period: "2016 – 2018",
  },
];

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6 relative">
      <div ref={ref} className="max-w-6xl mx-auto scroll-reveal">
        <p className="section-label mb-2">// about me</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">Get to know me</h2>

        <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          I'm Abhinav Sathiyamoorthy, currently pursuing a Master of Artificial Intelligence at Monash University. I'm passionate about building intelligent systems that solve meaningful, real-world problems. During my time as a System Engineer at Tata Consultancy Services and as a research trainee at the Indian Space Research Organisation (ISRO), I gained hands-on experience in both industry and research environments. I'm driven by curiosity and a desire to create impactful, scalable solutions using AI and modern technologies.
        </p>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
            <GraduationCap size={20} className="text-secondary" />
            Education
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((e) => (
              <div key={e.degree} className="glass-card p-5">
                <h4 className="font-semibold text-foreground mb-1">{e.degree}</h4>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                <p className="text-xs text-primary mt-2 font-mono">{e.period}</p>
                {e.extra && <p className="text-xs text-muted-foreground mt-1">{e.extra}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <h3 className="text-xl font-semibold mb-6 text-foreground">Technical Skills</h3>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between mb-1.5">
                <span className="text-sm text-foreground">{s.name}</span>
                <span className="text-xs text-muted-foreground font-mono">{s.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
