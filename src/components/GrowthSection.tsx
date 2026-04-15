import { Rocket, Target, Globe, Zap } from "lucide-react";

const benefits = [
  { icon: Rocket, title: "Roles de alto impacto", desc: "Posiciones de liderazgo, estrategia y dirección en empresas que valoran tu trayectoria." },
  { icon: Target, title: "Retos a tu nivel", desc: "Proyectos complejos que estimulan tu crecimiento y ponen a prueba lo mejor de ti." },
  { icon: Globe, title: "Alcance global", desc: "Oportunidades remotas e internacionales con empresas que buscan experiencia real." },
  { icon: Zap, title: "Transición ágil", desc: "Cambio de industria o rol sin fricciones. Nuestra IA traduce tu experiencia a nuevos contextos." },
];

const GrowthSection = () => {
  return (
    <section className="py-24 relative" id="crecimiento">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left content */}
          <div className="lg:w-1/2">
            <span className="text-sm text-primary tracking-widest uppercase font-medium">Para expertos</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
              Crecimiento <span className="text-primary text-glow">Exponencial</span>
            </h2>
            <div className="neon-line max-w-xs mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              ¿Buscas un cambio de aire? Nuestra IA encuentra las oportunidades que se alinean con tu experiencia, tus ambiciones y el estilo de vida que quieres construir.
            </p>
            <button className="px-8 py-4 rounded-lg border border-primary/30 text-foreground font-semibold text-lg hover:bg-primary/10 transition-all duration-300 border-glow">
              Explorar oportunidades senior
            </button>
          </div>

          {/* Right - benefit cards */}
          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-500 group hover:shadow-[var(--shadow-neon)] animate-fade-in-up"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
