import { Navigation } from "@/components/Navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Heart, Sparkles, Star, Gem, MapPin, Clock, Phone, Instagram, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";
import nails1 from "@/assets/nails1.jpg";
import nails2 from "@/assets/nails2.jpg";
import nails3 from "@/assets/nails3.jpg";
import nails4 from "@/assets/nails4.jpg";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/65 to-primary/55" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
            Studio Bittencourt
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-up">
            Encontre sua melhor versão em um espaço de conforto e elegância
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-2xl animate-scale-in"
          >
            Agende seu horário
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section id="servicos" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Nossos Serviços</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Cada serviço é pensado para proporcionar a você uma experiência única de cuidado e beleza
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <ScrollReveal delay={100}>
              <Card className="bg-card hover:shadow-xl transition-all duration-300 border-0 group" style={{ boxShadow: 'var(--shadow-card)' }}>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-accent/30 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Heart className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Manicure</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cuidado completo para suas mãos com esmaltação perfeita e tratamento profissional.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="bg-card hover:shadow-xl transition-all duration-300 border-0 group" style={{ boxShadow: 'var(--shadow-card)' }}>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-accent/30 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Sparkles className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Pedicure</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Relaxamento e beleza para seus pés, com técnicas especializadas e produtos premium.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="bg-card hover:shadow-xl transition-all duration-300 border-0 group" style={{ boxShadow: 'var(--shadow-card)' }}>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-accent/30 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Star className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Alongamento de Unhas</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transforme suas unhas com alongamentos duradouros e design personalizado.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="bg-card hover:shadow-xl transition-all duration-300 border-0 group" style={{ boxShadow: 'var(--shadow-card)' }}>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-accent/30 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Gem className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Banho de Gel</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Proteção e brilho intenso com gel de alta qualidade que dura semanas.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                Sobre o Studio Bittencourt
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                O <span className="text-primary font-semibold">Studio Bittencourt</span> é mais do que um espaço de beleza – é um refúgio onde cada mulher pode se conectar com sua melhor versão.
              </p>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
                Com carinho e profissionalismo, oferecemos serviços especializados em nail design, cuidando de cada detalhe para que você se sinta única e especial.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div 
              className="rounded-3xl p-12 text-center text-white text-xl md:text-2xl font-light italic"
              style={{ background: 'var(--gradient-accent)' }}
            >
              "Aqui, você encontra conforto, elegância e o cuidado que merece."
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Nossos Trabalhos</h2>
              <p className="text-lg text-muted-foreground">
                Cada unha é uma obra de arte única, criada com carinho e atenção aos detalhes
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-6xl mx-auto">
              <Carousel
                opts={{ loop: true, align: "start" }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  <CarouselItem className="pl-2 md:pl-4 basis-1/3">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img src={nails1} alt="Nail art com borboletas" className="w-full h-40 sm:h-48 md:h-72 object-cover" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-2 md:pl-4 basis-1/3">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img src={nails2} alt="Nail art com estampa de onça" className="w-full h-40 sm:h-48 md:h-72 object-cover" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-2 md:pl-4 basis-1/3">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img src={nails3} alt="Nail art rosa com flores" className="w-full h-40 sm:h-48 md:h-72 object-cover" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="pl-2 md:pl-4 basis-1/3">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img src={nails4} alt="Nail art outono com folhas" className="w-full h-40 sm:h-48 md:h-72 object-cover" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Visite-nos</h2>
              <p className="text-lg text-muted-foreground">
                Estamos prontas para receber você em nosso espaço de conforto e beleza
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ScrollReveal delay={100}>
              <Card className="bg-card border-0 h-full" style={{ boxShadow: 'var(--shadow-card)' }}>
                <CardContent className="p-10 h-full flex flex-col">
                  <h3 className="text-3xl font-bold mb-8 text-foreground">Informações de Contato</h3>
                  
                  <div className="space-y-8 flex-1">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-foreground">Endereço</h4>
                        <p className="text-muted-foreground">R. Paulo de Faria, 133</p>
                        <p className="text-muted-foreground">Tucuruvi, São Paulo - SP</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-foreground">Horário de Atendimento</h4>
                        <p className="text-muted-foreground">Segunda a Sexta: 9h às 19h</p>
                        <p className="text-muted-foreground">Sábado: 9h às 17h</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-foreground">WhatsApp</h4>
                        <p className="text-primary font-medium">(11) 99999-9999</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                        <Instagram className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-foreground">Instagram</h4>
                        <p className="text-primary font-medium">@studiobittencourt</p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full text-lg py-6 rounded-xl shadow-lg mt-8"
                    style={{ background: 'var(--gradient-accent)' }}
                  >
                    Agendar pelo WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="bg-card border-0 h-full" style={{ boxShadow: 'var(--shadow-card)' }}>
                <CardContent className="p-10 h-full flex flex-col">
                  <h3 className="text-3xl font-bold mb-6 text-foreground">Agende seu Horário</h3>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Reserve seu momento de beleza e autocuidado. Agende seu horário pelo WhatsApp ou Instagram e venha viver uma experiência única no Studio Bittencourt.
                  </p>

                  <ul className="space-y-3 flex-1">
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      Atendimento personalizado e exclusivo
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      Produtos de alta qualidade
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      Ambiente acolhedor e confortável
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-12 max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.6895742668394!2d-46.60247132391985!3d-23.48739825892614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef5f4c0e7e4fb%3A0x6f8f8d8d8d8d8d8d!2sR.%20Paulo%20de%20Faria%2C%20133%20-%20Tucuruvi%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Studio Bittencourt"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Studio Bittencourt</h3>
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://instagram.com/studiobittencourt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm opacity-80">© 2025 Studio Bittencourt</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
