import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Users, 
  Target, 
  Eye, 
  Lightbulb, 
  ChefHat, 
  Dumbbell, 
  Palette, 
  Home, 
  Sparkles, 
  Settings, 
  Sprout, 
  Mic2, 
  ShoppingBag, 
  Monitor, 
  Stethoscope, 
  UserCheck, 
  Brain, 
  TreeDeciduous, 
  Smile,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  ArrowRight,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const SectionTitle = ({ title, subtitle }) => (
    <div className="mb-16 text-center reveal">
      <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-white mb-4 uppercase">
        {title}
      </h2>
      <div className="w-20 h-1 bg-white mx-auto mb-6 opacity-30"></div>
      {subtitle && <p className="text-gray-400 max-w-2xl mx-auto text-lg">{subtitle}</p>}
    </div>
  );

  const MissionCard = ({ icon: Icon, title, content }) => (
    <div className="p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all duration-500 group">
      <div className="mb-6 inline-block p-4 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{content}</p>
    </div>
  );

  const WorkshopCard = ({ icon: Icon, title, subtitle }) => (
    <div className="flex items-start p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-white/40 transition-all group">
      <div className="mr-5 p-3 bg-zinc-800 rounded-lg group-hover:bg-white group-hover:text-black transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-white font-medium text-lg leading-tight">{title}</h4>
        {subtitle && <p className="text-zinc-500 text-sm mt-1">{subtitle}</p>}
      </div>
    </div>
  );

  const workshops = [
    { icon: ChefHat, title: "Taller de Panadería y Cocina", subtitle: "Cocinando trocitos de amor" },
    { icon: Dumbbell, title: "Taller de Recreación y Deporte", subtitle: null },
    { icon: Palette, title: "Taller de Arte", subtitle: "Coloreando Expresiones" },
    { icon: Home, title: "Taller de Habilidades de la Vida Diaria", subtitle: null },
    { icon: Sparkles, title: "Taller Descubriendo mi Pasión", subtitle: null },
    { icon: Settings, title: "Taller de Hábitos Transformadores", subtitle: null },
    { icon: Sprout, title: "Taller: Sembrando sueños en la Huerta Mágica", subtitle: null },
    { icon: Mic2, title: "Fonoaudiología", subtitle: null },
    { icon: ShoppingBag, title: "Taller de Traperos y Bolsas", subtitle: null },
    { icon: Monitor, title: "Taller de Sistemas", subtitle: null },
    { icon: Stethoscope, title: "Terapia Física", subtitle: "Sec. Salud" },
    { icon: UserCheck, title: "Trabajo Social", subtitle: "Sec. Salud" },
    { icon: Brain, title: "Psicología", subtitle: "Sec. Salud" },
    { icon: TreeDeciduous, title: "Taller de Jardín Botánico", subtitle: "Sembrando Ideas" },
    { icon: Smile, title: "Talleres de Recreación", subtitle: "IDRD" },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
              <span className="text-black font-black text-xl">P</span>
            </div>
            <span className="text-white font-bold tracking-widest text-xl">PROMADIN</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10">
            {['Inicio', 'Sobre Nosotros', 'Talleres', 'Contacto'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-sm uppercase tracking-widest hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 py-10 flex flex-col items-center gap-8 md:hidden animate-in fade-in slide-in-from-top-4">
            {['Inicio', 'Sobre Nosotros', 'Talleres', 'Contacto'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-xl uppercase tracking-widest text-white"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero / Inicio */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50"></div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-block px-4 py-1 border border-white/20 rounded-full mb-6 text-xs uppercase tracking-[0.3em] text-gray-400">
              Desde 1995
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-8">
              EL PODER <br/>DE <span className="text-zinc-600 italic">INCLUIR</span>.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-xl">
              Somos la Fundación Promadin, una organización sin ánimo de lucro que trabaja para la educación de jóvenes y adultos con discapacidad intelectual. Potenciamos capacidades para el desarrollo personal y social.
            </p>
            <button 
              onClick={() => scrollToSection('sobre-nosotros')}
              className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all hover:gap-5"
            >
              CONÓCENOS <ArrowRight size={20} />
            </button>
          </div>
          <div className="animate-in fade-in zoom-in duration-1000 order-last md:order-none">
            <div className="relative">
              <div className="absolute -inset-4 border border-white/10 rounded-3xl rotate-3 hidden md:block"></div>
              <div className="bg-zinc-900/80 backdrop-blur-sm p-6 md:p-12 rounded-3xl border border-white/10 relative hover:border-white/30 transition-all duration-500 hover:bg-zinc-800/80">
                <p className="text-zinc-300 md:text-zinc-400 text-base md:text-lg italic leading-relaxed">
                  "Desde nuestra creación en el barrio Santander, PROMADIN se ha dedicado a transformar vidas a través del amor, el respeto y la pedagogía especializada. Creemos que cada individuo posee talentos únicos."
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-0.5 bg-white/30"></div>
                  <span className="text-white font-bold tracking-widest uppercase text-sm">Legado y Compromiso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="sobre-nosotros" className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Nuestra Esencia" 
            subtitle="Comprometidos con el ejercicio pleno de los derechos y la inclusión social de jóvenes y adultos."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <MissionCard 
              icon={Target}
              title="Misión"
              content="Somos un colectivo comprometido en brindar educación integral y capacitación laboral de acuerdo a potencialidades, propendiendo por la inclusión efectiva en la sociedad."
            />
            <MissionCard 
              icon={Eye}
              title="Visión"
              content="Seremos reconocidos por haber sensibilizado a la sociedad en la inclusión, el respeto y la generación de felicidad en los jóvenes con discapacidad intelectual y su entorno."
            />
            <MissionCard 
              icon={Heart}
              title="Propósito"
              content="Generar estrategias de participación que propicien la aceptación, orientando a la persona en la construcción de su proyecto de vida para una inclusión social digna."
            />
          </div>
        </div>
      </section>

      {/* Talleres */}
      <section id="talleres" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Programas y Talleres" 
            subtitle="Espacios diseñados para el crecimiento, la autonomía y el descubrimiento de talentos."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <div key={index} className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 50}ms` }}>
                <WorkshopCard 
                  icon={workshop.icon}
                  title={workshop.title}
                  subtitle={workshop.subtitle}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Contacto" />
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="p-4 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-zinc-500 uppercase text-xs tracking-widest font-bold">Correo</p>
                    <p className="text-white text-lg">fundacion_promadin@hotmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="p-4 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-zinc-500 uppercase text-xs tracking-widest font-bold">Llámanos</p>
                    <p className="text-white text-lg">316 2370280</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="p-4 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-zinc-500 uppercase text-xs tracking-widest font-bold">Dirección</p>
                    <p className="text-white text-lg">Transversal 29 A bis # 29-59 Sur, Bogotá</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-zinc-500 uppercase text-xs tracking-widest font-bold mb-6">Síguenos en Nuestras redes sociales</p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/profile.php?id=61582557248123" className="p-3 bg-white/5 rounded-xl hover:bg-white hover:text-black transition-all">
                    <Facebook size={20} />
                  </a>
                  <a href="https://www.instagram.com/fundacion_promadin/" className="p-3 bg-white/5 rounded-xl hover:bg-white hover:text-black transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.tiktok.com/@fundacion_promadin" className="p-3 bg-white/5 rounded-xl hover:bg-white hover:text-black transition-all flex items-center gap-2">
                    <span className="text-sm font-bold">TikTok</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="h-full min-h-[400px] rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.019281063816!2d-74.11703332314629!3d4.590562695384049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9928f9e001e5%3A0x11cc49b1d34c73a7!2sFundaci%C3%B3n%20Promadin!5e0!3m2!1ses!2sco!4v1773805553702!5m2!1ses!2sco"
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <div className="py-20 flex flex-col items-center bg-black border-t border-white/5">
        <h3 className="text-3xl font-light text-white mb-8">¿Tienes alguna pregunta?</h3>
        <a 
          href="https://wa.me/573162370280" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-4 bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-600/20"
        >
          <MessageCircle size={28} />
          <span className="text-lg font-bold">CONTÁCTANOS POR WHATSAPP</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-black text-sm">P</span>
            </div>
            <span className="text-white font-bold tracking-widest">PROMADIN</span>
          </div>
          <p className="text-zinc-500 text-sm">
            © 2026 Fundación Promadin. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Custom Global Styles for Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal {
          animation: fadeIn linear both;
          animation-timeline: view();
          animation-range: entry 5% cover 30%;
        }
      `}</style>
    </div>
  );
};

export default App;
