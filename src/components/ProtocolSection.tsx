import { Heart, Brain, Shield, BarChart3 } from "lucide-react";

const protocols = [
  {
    icon: Heart,
    title: "Compatibilidad Cultural",
    description: "Analizamos los valores, la comunicación y el ambiente de trabajo de cada empresa para asegurar que encajes desde el primer día.",
    tags: ["Valores", "Ambiente", "Comunicación"],
  },
  {
    icon: Brain,
    title: "Mapeo de Potencial",
    description: "Evaluamos habilidades técnicas y blandas, capacidad de aprendizaje y adaptabilidad — mucho más allá del CV tradicional.",
    tags: ["Soft Skills", "Aprendizaje", "Adaptabilidad"],
  },
  {
    icon: Shield,
    title: "Match Verificado",
    description: "Cada conexión pasa por validación cruzada: verificamos que tanto candidato como empresa cumplan las expectativas mutuamente.",
    tags: ["Verificación", "Confianza", "Transparencia"],
  },
  {
    icon: BarChart3,
    title: "Análisis Predictivo",
    description: "Predecimos la satisfacción a largo plazo del match usando datos de miles de relaciones laborales exitosas.",
    tags: ["Predicción", "Data", "Retención"],
  },
];

const ProtocolSection = () => {
  return (
    <section className="py-24 relative" id="protocol">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm text-primary tracking-widest uppercase font-medium">Nano Banana Protocol</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            El motor de{" "}
            <span className="text-primary text-glow">Empatía Digital</span>
          </h2>
          <div className="neon-line max-w-xs mx-auto" />
          <p className="max-w-2xl mx-auto text-muted-foreground mt-6 text-lg">
            Analizamos miles de datos para asegurar que la cultura de la empresa y los sueños del trabajador encajen al 100%.
          </p>
        </div>

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
