import { Terminal, GitBranch, Shield, Cpu } from "lucide-react";

const protocols = [
  {
    icon: Terminal,
    title: "Node.js Runtime Analysis",
    description: "Evaluación en tiempo real del dominio de Node.js: event loop, streams, módulos nativos y patrones async/await avanzados.",
    tags: ["Event Loop", "Streams", "Workers"],
  },
  {
    icon: GitBranch,
    title: "Git Workflow Mastery",
    description: "Análisis profundo del flujo Git: estrategias de branching, resolución de conflictos, rebases interactivos y hooks personalizados.",
    tags: ["Branching", "CI/CD", "Hooks"],
  },
  {
    icon: Shield,
    title: "Validación de Seguridad",
    description: "Verificación de prácticas de seguridad: gestión de dependencias, secrets management y protección contra vulnerabilidades comunes.",
    tags: ["Deps Audit", "Secrets", "OWASP"],
  },
  {
    icon: Cpu,
    title: "Performance Profiling",
    description: "Medición de capacidad para optimizar: profiling de memoria, CPU bottlenecks y estrategias de caching inteligente.",
    tags: ["Memory", "CPU", "Caching"],
  },
];

const ProtocolSection = () => {
  return (
    <section className="py-24 relative" id="protocol">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-primary tracking-widest uppercase font-medium">Protocolo de Validación</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Validación inteligente para{" "}
            <span className="text-primary text-glow">Node.js & Git</span>
          </h2>
          <div className="neon-line max-w-xs mx-auto" />
          <p className="max-w-2xl mx-auto text-muted-foreground mt-6 text-lg">
            Nuestro protocolo analiza habilidades técnicas reales mediante desafíos prácticos y análisis de comportamiento en código.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {protocols.map((p, i) => (
            <div
              key={p.title}
              className="glass rounded-xl p-8 hover:border-primary/30 transition-all duration-500 group hover:shadow-[var(--shadow-neon)] animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-full border border-primary/20 text-cyan-soft bg-primary/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtocolSection;
