import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const surveyUrl = "https://forms.gle/encuesta-cotiya"; // Ejemplo: reemplazar por tu enlace real

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className={cn(
      "text-sm font-medium text-foreground/80 hover:text-foreground transition-colors",
      "story-link"
    )}
  >
    {children}
  </a>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 border-b transition-all",
        scrolled ? "bg-background/85 backdrop-blur shadow-sm" : "bg-background/70 backdrop-blur"
      )}
      role="banner"
    >
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <a href="#hero" className="flex items-center gap-2" aria-label="CotiYa - Inicio">
          <div className="h-8 w-8 rounded-md bg-gradient-primary shadow-elegant" />
          <span className="text-lg font-semibold">CotiYa</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <NavLink href="#por-que">¿Por qué participar?</NavLink>
          <NavLink href="#como">Cómo funciona</NavLink>
          <NavLink href="#testimonios">Testimonios</NavLink>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="link" className="hidden sm:inline-flex">
            <a href="#encuesta" aria-label="Ir a encuesta">2 min</a>
          </Button>
          <Button variant="accent" asChild>
            <a href={surveyUrl} target="_blank" rel="noopener noreferrer" aria-label="Responder encuesta">
              Responder encuesta
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
