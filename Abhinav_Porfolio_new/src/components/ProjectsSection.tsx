import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Cloud Security & Data Integrity using Blockchain",
    description: "Implemented blockchain-based integrity verification with Merkle Trees for secure cloud data management.",
    tags: ["Blockchain", "Merkle Trees", "Security", "Python"],
    github: "",
  },
  {
    title: "Churn Prediction System",
    description: "Built ML models (MLP, Naive Bayes, XGBoost) achieving improved churn prediction accuracy for telecom data.",
    tags: ["XGBoost", "Naive Bayes", "MLP", "Python"],
    github: "",
  },
  {
    title: "Movie Recommender System",
    description: "Developed neural collaborative filtering model using PyTorch with high precision recommendation results.",
    tags: ["PyTorch", "Neural Networks", "Collaborative Filtering"],
    github: "",
  },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div ref={ref} className="max-w-6xl mx-auto scroll-reveal">
        <p className="section-label mb-2">// projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">Featured Work</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="project-card flex flex-col">
              <div className="w-10 h-1 rounded-full bg-primary mb-5" style={{
                background: "linear-gradient(90deg, hsl(250, 90%, 65%), hsl(200, 100%, 55%))"
              }} />
              <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted/80 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors"
                >
                  View on GitHub <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
