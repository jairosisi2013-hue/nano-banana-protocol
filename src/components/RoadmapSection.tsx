import { Settings, Code2, GitFork, Rocket } from "lucide-react";

const steps = [
  {
    icon: Settings,
    phase: "Fase 1",
    title: "Entorno",
    description: "Configuración del ecosistema de desarrollo: Node.js, npm, terminal y herramientas esenciales del stack moderno.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Code2,
    phase: "Fase 2",
    title: "Desarrollo",
    description: "Dominio del ciclo de desarrollo: APIs RESTful, arquitecturas modulares, testing y documentación técnica.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: GitFork,
    phase: "Fase 3",
    title: "Control",
    description: "Control de versiones avanzado: Git flow, code reviews, integración continua y gestión de releases.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Rocket,
    phase: "Fase 4",
    title: "Despliegue",
    description: "Despliegue y operaciones: containerización, orquestación, monitoreo y escalabilidad en producción.",
    color: "from-primary/20 to-primary/5",
  },
];

const RoadmapSection = () => {
  return (
    <section className="py-24 relative" id="roadmap">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-primary tracking-widest uppercase font-medium">Roadmap</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            4 fases hacia la <span className="text-primary text-glow">certificación</span>
          </h2>
          <div className="neon-line max-w-xs mx-auto" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.phase}
                  className={`md:flex items-center animate-fade-in-up ${isLeft ? "" : "md:flex-row-reverse"}`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {/* Card */}
                  <div className={`md:w-5/12 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="glass rounded-xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-[var(--shadow-neon)]">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 ${isLeft ? "md:ml-auto" : ""}`}>
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs text-primary tracking-widest uppercase font-medium">{step.phase}</span>
                      <h3 className="text-2xl font-bold text-foreground mt-2 mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex md:w-2/12 justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary animate-pulse-glow" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
