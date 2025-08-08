import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Clock, Rocket, Quote, CheckCircle2, ArrowRight, Users, Shield, Zap, TrendingUp, Star } from "lucide-react";
const SURVEY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd8WGzN2_9s5Rci2tnaH6sP7ULOKo1SNl-rbTohsC0NDzklBA/viewform?usp=header"; // Reemplazar por el enlace real

const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20" id="hero">
        {/* Hero */}
        <section aria-labelledby="hero-heading" className="relative overflow-hidden">
          <div className="bg-gradient-hero">
            <div className="container mx-auto px-4 py-20 md:py-28">
              <div className="max-w-4xl mx-auto text-center">               
                
                <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold leading-tight tracking-tight font-display text-white mb-6 animate-fade-in">
                  Cotizaciones de transporte internacional,{" "}
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    sin complicaciones
                  </span>
                </h1>
                
                <p className="mt-6 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Ayudanos a validar una nueva forma de cotizar cargas internacionales:  
                  <strong className="text-yellow-300"> simple, rápida y comparativa.</strong> 
                </p>
                {/*
                <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                  Queremos tu opinión para que sea perfecta para vos.
                </p>
                */}
                
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" variant="accent" asChild className="bg-gradient-accent hover:shadow-cta hover-lift text-lg px-8 py-4 h-auto">
                    <a href={SURVEY_URL} target="_blank" rel="noopener noreferrer" aria-label="Responder encuesta (2 minutos)" className="flex items-center gap-2">
                      Responder encuesta (2 minutos)
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>                  
                </div>
                <div className="text-white/90 text-sm sm:text-base flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>+150 importadores ya participaron</span>
                  </div>
                <div className="mt-8 max-w-md mx-auto">
                  
                  <div className="bg-success/20 backdrop-blur rounded-2xl p-4 border border-success/30">
                    <div className="flex items-center justify-center gap-3 text-white">
                      <CheckCircle2 className="h-5 w-5 text-green-300" />
                      <span className="font-semibold text-lg">3 meses gratis cuando lancemos</span>
                    </div>
                    <p className="text-white/80 text-sm mt-1">para quienes completen la encuesta</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
            </div>
          </div>
        </section>

        {/* Por qué participar */}
        <section id="por-que" aria-labelledby="why-heading" className="container mx-auto px-4 py-20 relative">
          <div className="text-center mb-16">
            
            <h2 id="why-heading" className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
              ¿Por qué <span className="text-primary">participar?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Por ayudarnos a mejorar la solución te damos acceso gratis los primeros 3 meses</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="hover:shadow-elegant hover-lift transition-all border-none bg-gradient-to-br from-white to-brand-light/30 group">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Palette className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <CardTitle className="text-2xl font-bold">Influir en el diseño</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Tu experiencia va a ayudar a crear una solución pensada específicamente para importadores argentinos.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant hover-lift transition-all border-none bg-gradient-to-br from-white to-accent/10 group">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Rocket className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <CardTitle className="text-2xl font-bold">Acceso anticipado</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">Recibí acceso exclusivo y gratis por 3 meses cuando lancemos la plataforma.</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant hover-lift transition-all border-none bg-gradient-to-br from-white to-success/10 group">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-success flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <CardTitle className="text-2xl font-bold">Sin compromiso</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">Respondé en menos de 2 minutos. No pedimos datos comerciales sensibles.</CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-white">
              <a href="#como" aria-label="Ver cómo funciona">
                Ver cómo funcionará <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* Cómo funciona */}
        <section id="como" aria-labelledby="how-heading" className="bg-secondary/30 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary font-medium mb-4">
                <Zap className="h-4 w-4" />
                Simple y eficiente
              </div>
              <h2 id="how-heading" className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
                ¿Cómo <span className="text-primary">funcionará?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Un concepto revolucionario en 3 pasos simples
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {[{
              title: "Publicás tu solicitud",
              description: "Sin revelar tu identidad. Describí tu necesidad de transporte de forma anónima.",
              icon: "1",
              color: "primary"
            }, {
              title: "Recibís cotizaciones",
              description: "De forwarders verificados. Múltiples ofertas estructuradas y comparables.",
              icon: "2",
              color: "accent"
            }, {
              title: "Elegís la mejor",
              description: "Según precio, tiempo y condiciones. Decidís con toda la información disponible.",
              icon: "3",
              color: "success"
            }].map((step, idx) => <Card key={idx} className="relative overflow-hidden hover:shadow-elegant hover-lift transition-all border-none bg-white group">
                  <div className={`absolute right-6 top-6 text-7xl font-bold opacity-10 ${step.color === 'primary' ? 'text-primary' : step.color === 'accent' ? 'text-accent' : 'text-success'}`}>
                    {step.icon}
                  </div>
                  <CardHeader className="pb-4">
                    
                    <CardTitle className="text-2xl font-bold">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed py-[6px]">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                  {idx < 2 && <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      
                    </div>}
                </Card>)}
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-sm text-amber-800">
                  <strong>Nota:</strong> Esto describe el concepto para entender lo que estamos validando, no la funcionalidad actual.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios" aria-labelledby="testimonials-heading" className="container mx-auto px-4 py-20">
          <header className="text-center mb-10">
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold font-display tracking-tight">Lo que dicen nuestros usuarios</h2>
            <p className="text-muted-foreground mt-2">Casos simulados para mostrar el valor</p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {[{
            quote: "Me encantaría no tener que pasar horas contactando proveedores, y que las cotizaciones lleguen estructuradas.",
            author: "Importador de maquinaria, Buenos Aires"
          }, {
            quote: "Si las ofertas fueran comparables, decidir sería más rápido y transparente.",
            author: "PyME textil, Córdoba"
          }, {
            quote: "Valoro el anonimato para evitar llamados innecesarios hasta elegir.",
            author: "Importador de electrónica, Mendoza"
          }].map((t, i) => <Card key={i} className="hover:shadow-elegant transition-shadow">
                <CardContent className="pt-6">
                  <Quote className="h-6 w-6 text-primary mb-3" aria-hidden="true" />
                  <p className="text-base">“{t.quote}”</p>
                  <p className="mt-3 text-sm text-muted-foreground">— {t.author}</p>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* CTA Final */}
        <section id="encuesta" aria-labelledby="cta-heading" className="relative overflow-hidden">
          <div className="bg-gradient-hero py-20 md:py-28">
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur">
                  <CheckCircle2 className="h-4 w-4 text-green-300" />
                  <span className="font-medium">¡Últimos días para participar!</span>
                </div>
                
                <h2 id="cta-heading" className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                  Tu opinión es <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">clave</span> para crear la plataforma ideal
                </h2>
                
                <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto mb-8">
                  Participá ahora y obtené <strong className="text-yellow-300">3 meses gratis</strong> cuando lancemos.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                  <Button size="lg" variant="accent" asChild className="bg-gradient-accent hover:shadow-cta hover-lift text-xl px-10 py-5 h-auto shadow-2xl">
                    <a href={SURVEY_URL} target="_blank" rel="noopener noreferrer" aria-label="Quiero participar ahora" className="flex items-center gap-3">
                      Quiero participar ahora
                      <ArrowRight className="h-6 w-6" />
                    </a>
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-white/80">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-5 w-5 text-yellow-300" />
                    <span>Solo 2 minutos</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="h-5 w-5 text-green-300" />
                    <span>100% anónimo</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Users className="h-5 w-5 text-blue-300" />
                    <span>+4.000 participantes</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
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
    </div>;
};
export default Index;