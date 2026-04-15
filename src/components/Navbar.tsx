import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="text-primary text-glow">Tech</span>
          <span className="text-foreground">Nova</span>
          <span className="text-muted-foreground text-sm ml-1 font-normal">Studio</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {["Protocolo", "Roadmap"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:shadow-[var(--shadow-neon)] transition-all">
            Acceder
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border px-6 py-4 space-y-3">
          {["Protocolo", "Roadmap"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
            Acceder
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
