import { useState } from "react";
import { Heart, X, Briefcase, Star, MapPin, Sparkles } from "lucide-react";

const candidateCard = {
  name: "María García",
  role: "Practicante de Administración",
  location: "Ciudad de México",
  skills: ["Liderazgo", "Excel Avanzado", "Comunicación"],
  match: 94,
  avatar: "MG",
  type: "junior" as const,
};

const companyCard = {
  name: "Innovatech Corp",
  role: "Practicante Administrativo",
  location: "CDMX — Híbrido",
  values: ["Mentoría activa", "Crecimiento", "Flexibilidad"],
  match: 94,
  avatar: "IC",
  type: "company" as const,
};

const MatchSection = () => {
  const [matched, setMatched] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden" id="match">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm text-primary tracking-widest uppercase font-medium">Concepto Match</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Así funciona el <span className="text-primary text-glow">Match</span>
          </h2>
          <div className="neon-line max-w-xs mx-auto" />
          <p className="max-w-2xl mx-auto text-muted-foreground mt-6 text-lg">
            Nuestra IA conecta talento con empresas que realmente encajan. No es solo un CV — es compatibilidad real.
          </p>
        </div>

        {/* Swipe Cards */}
        <div className="max-w-4xl mx-auto">
          <div className={`flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 transition-all duration-700 ${matched ? "md:gap-0" : ""}`}>
            {/* Candidate Card */}
            <div className={`glass rounded-2xl p-8 w-full max-w-sm transition-all duration-700 ${matched ? "md:-mr-4 border-primary/40 shadow-[var(--shadow-neon)]" : "hover:border-primary/20"}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  {candidateCard.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{candidateCard.name}</h3>
                  <p className="text-sm text-muted-foreground">{candidateCard.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <MapPin className="w-4 h-4 text-primary" />
                {candidateCard.location}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {candidateCard.skills.map((s) => (
                  <span key={s} className="px-3 py-1 text-xs rounded-full border border-primary/20 text-cyan-soft bg-primary/5">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full border border-destructive/30 flex items-center justify-center text-destructive hover:bg-destructive/10 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                  <button
                    className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
                    onClick={() => setMatched(true)}
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold">{candidateCard.match}%</span>
                  <span className="text-muted-foreground">match</span>
                </div>
              </div>
            </div>

            {/* Match indicator */}
            <div className={`flex flex-col items-center transition-all duration-700 ${matched ? "scale-125" : ""}`}>
              {matched ? (
                <div className="animate-fade-in-up">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-primary font-bold mt-2 text-sm text-glow">¡MATCH!</p>
                </div>
              ) : (
                <div className="text-muted-foreground text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center mb-2">
                    <Heart className="w-5 h-5 opacity-30" />
                  </div>
                  <p className="text-xs">Toca ❤️</p>
                </div>
              )}
            </div>

            {/* Company Card */}
            <div className={`glass rounded-2xl p-8 w-full max-w-sm transition-all duration-700 ${matched ? "md:-ml-4 border-primary/40 shadow-[var(--shadow-neon)]" : "hover:border-primary/20"}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{companyCard.name}</h3>
                  <p className="text-sm text-muted-foreground">{companyCard.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <MapPin className="w-4 h-4 text-primary" />
                {companyCard.location}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {companyCard.values.map((v) => (
                  <span key={v} className="px-3 py-1 text-xs rounded-full border border-primary/20 text-cyan-soft bg-primary/5">
                    {v}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-end">
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold">{companyCard.match}%</span>
                  <span className="text-muted-foreground">compatibilidad</span>
                </div>
              </div>
            </div>
          </div>

          {matched && (
            <div className="text-center mt-10 animate-fade-in-up">
              <p className="text-muted-foreground mb-4">El Nano Banana Protocol encontró compatibilidad cultural y profesional al <strong className="text-primary">94%</strong></p>
              <button
                className="text-sm text-primary underline hover:no-underline"
                onClick={() => setMatched(false)}
              >
                Reiniciar demo
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MatchSection;
