import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 glass mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm text-cyan-soft tracking-wider uppercase">Powered by Nano Banana Protocol</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <span className="text-foreground">El </span>
          <span className="text-primary text-glow">Match perfecto</span>
          <br />
          <span className="text-foreground">para tu carrera</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Encontramos tu primer trabajo o tu próximo gran reto usando IA. Para practicantes, juniors y expertos de <strong className="text-foreground">todas las profesiones</strong>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
          <button className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:shadow-[var(--shadow-neon-strong)] transition-all duration-300 hover:scale-105">
            ¡Haz Match con tu futuro!
          </button>
          <button className="px-8 py-4 rounded-lg border border-primary/30 text-foreground font-semibold text-lg hover:bg-primary/10 transition-all duration-300 border-glow">
            Busco talento joven
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {[
            { value: "50K+", label: "Matches exitosos" },
            { value: "98.5%", label: "Satisfacción" },
            { value: "< 48h", label: "Tiempo de Match" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary text-glow">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
