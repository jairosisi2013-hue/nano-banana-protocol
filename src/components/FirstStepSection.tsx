import { Brain, Sparkles, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Análisis de potencial",
    description: "Nuestra IA evalúa tus habilidades blandas, pensamiento crítico y capacidad de aprendizaje — no solo tu título.",
  },
  {
    icon: Sparkles,
    title: "Personalidad que encaja",
    description: "Mapeamos tu personalidad para conectarte con culturas empresariales donde realmente puedas brillar.",
  },
  {
    icon: Users,
    title: "Mentoría integrada",
    description: "Te conectamos con mentores dentro de la empresa para que tu primera experiencia sea de crecimiento real.",
  },
  {
    icon: TrendingUp,
    title: "Ruta de carrera",
    description: "Desde el día uno, trazamos un plan de desarrollo profesional adaptado a tus metas y sueños.",
  },
];

const FirstStepSection = () => {
  return (
    <section className="py-24 relative" id="primer-paso">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm text-primary tracking-widest uppercase font-medium">Primer Empleo & Prácticas</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Tu primer <span className="text-primary text-glow">paso</span>
          </h2>
          <div className="neon-line max-w-xs mx-auto" />
          <p className="max-w-2xl mx-auto text-muted-foreground mt-6 text-lg">
            Aquí no importan los años de experiencia. Nuestra IA analiza lo que realmente importa: tu <strong className="text-foreground">potencial</strong>, tu <strong className="text-foreground">actitud</strong> y tus <strong className="text-foreground">ganas de crecer</strong>.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass rounded-xl p-8 text-center hover:border-primary/30 transition-all duration-500 group hover:shadow-[var(--shadow-neon)] animate-fade-in-up"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <button className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:shadow-[var(--shadow-neon-strong)] transition-all duration-300 hover:scale-105">
            ¡Haz Match con tu futuro!
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstStepSection;
