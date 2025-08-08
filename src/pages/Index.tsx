import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Clock, Rocket, Quote, CheckCircle2 } from "lucide-react";

const SURVEY_URL = "https://forms.gle/encuesta-cotiya"; // Reemplazar por el enlace real

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20" id="hero">
        {/* Hero */}
        <section aria-labelledby="hero-heading" className="relative">
          <div className="bg-gradient-primary">
            <div className="container mx-auto px-4 py-16 md:py-24">
              <div className="max-w-3xl">
                <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold leading-tight tracking-tight font-display text-primary-foreground">
                  Cotizaciones de transporte internacional, más simples que nunca
                </h1>
                <p className="mt-4 text-lg md:text-xl text-primary-foreground/90">
                  Estamos diseñando una nueva plataforma para que importadores de Argentina reciban cotizaciones rápidas, anónimas y comparables de múltiples forwarders. Queremos tu opinión para que sea perfecta para vos.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Button size="lg" variant="accent" asChild>
                    <a href={SURVEY_URL} target="_blank" rel="noopener noreferrer" aria-label="Responder encuesta (2 minutos)">
                      Responder encuesta (2 minutos)
                    </a>
                  </Button>
                  <span className="text-primary-foreground/90 text-sm md:text-base">
                    Más de 4.000 importadores en nuestra base ya participan del estudio.
                  </span>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-secondary/40 px-3 py-1.5 text-sm text-primary-foreground shadow-elegant">
                  <CheckCircle2 className="h-4 w-4" />
                  3 meses gratis cuando lancemos para quienes completen la encuesta
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué participar */}
        <section id="por-que" aria-labelledby="why-heading" className="container mx-auto px-4 py-16">
          <header className="text-center mb-10">
            <h2 id="why-heading" className="text-3xl md:text-4xl font-bold font-display tracking-tight">¿Por qué participar?</h2>
            <p className="text-muted-foreground mt-2">Tu aporte nos ayuda a construir la herramienta ideal para importadores argentinos.</p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="hover:shadow-elegant transition-shadow">
              <CardHeader>
                <Palette className="h-6 w-6 text-primary" aria-hidden="true" />
                <CardTitle className="text-xl">Influir en el diseño</CardTitle>
                <CardDescription>
                  Tu experiencia va a ayudar a crear una solución pensada para importadores argentinos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-elegant transition-shadow">
              <CardHeader>
                <Rocket className="h-6 w-6 text-primary" aria-hidden="true" />
                <CardTitle className="text-xl">Acceso anticipado</CardTitle>
                <CardDescription>
                  Recibí acceso exclusivo a la versión beta cuando lancemos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-elegant transition-shadow">
              <CardHeader>
                <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                <CardTitle className="text-xl">Sin compromiso</CardTitle>
                <CardDescription>
                  Respondé en menos de 2 minutos. No pedimos datos comerciales sensibles.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Cómo funciona */}
        <section id="como" aria-labelledby="how-heading" className="container mx-auto px-4 py-16">
          <header className="text-center mb-10">
            <h2 id="how-heading" className="text-3xl md:text-4xl font-bold font-display tracking-tight">¿Cómo funcionará?</h2>
            <p className="text-muted-foreground mt-2">Un concepto simple en 3 pasos</p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {["Publicás tu solicitud", "Recibís cotizaciones", "Elegís la mejor"].map((title, idx) => (
              <Card key={idx} className="relative overflow-hidden hover:shadow-elegant transition-all">
                <div className="absolute right-4 top-4 text-6xl font-bold text-muted-foreground/20">{idx + 1}</div>
                <CardHeader>
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <CardDescription>
                    {idx === 0 && "Sin revelar tu identidad."}
                    {idx === 1 && "De forwarders verificados."}
                    {idx === 2 && "Según precio, tiempo y condiciones."}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Nota: esto describe el concepto para entender lo que estamos validando, no la funcionalidad actual.
          </p>
        </section>

        {/* Testimonios */}
        <section id="testimonios" aria-labelledby="testimonials-heading" className="container mx-auto px-4 py-16">
          <header className="text-center mb-10">
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold font-display tracking-tight">Lo que dicen nuestros usuarios</h2>
            <p className="text-muted-foreground mt-2">Casos simulados para mostrar el valor</p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "Me encantaría no tener que pasar horas contactando proveedores, y que las cotizaciones lleguen estructuradas.",
                author: "Importador de maquinaria, Buenos Aires",
              },
              {
                quote:
                  "Si las ofertas fueran comparables, decidir sería más rápido y transparente.",
                author: "PyME textil, Córdoba",
              },
              {
                quote:
                  "Valoro el anonimato para evitar llamados innecesarios hasta elegir.",
                author: "Importador de electrónica, Mendoza",
              },
            ].map((t, i) => (
              <Card key={i} className="hover:shadow-elegant transition-shadow">
                <CardContent className="pt-6">
                  <Quote className="h-6 w-6 text-primary mb-3" aria-hidden="true" />
                  <p className="text-base">“{t.quote}”</p>
                  <p className="mt-3 text-sm text-muted-foreground">— {t.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section id="encuesta" aria-labelledby="cta-heading" className="relative">
          <div className="bg-gradient-primary py-16 md:py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 id="cta-heading" className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
                Tu opinión es clave para crear la plataforma ideal
              </h2>
              <p className="mt-2 text-primary-foreground/90">Participá ahora y obtené 3 meses gratis cuando lancemos.</p>
              <div className="mt-8">
                <Button size="lg" variant="accent" asChild>
                  <a href={SURVEY_URL} target="_blank" rel="noopener noreferrer" aria-label="Quiero participar ahora">
                    Quiero participar ahora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} CotiYa — Buenos Aires, Argentina</p>
          <a href="mailto:hola@cotiya.com" className="text-sm text-primary hover:underline">Contacto: hola@cotiya.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
