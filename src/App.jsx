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
  X,
  Sun,
  Moon,
  Music,
  Linkedin
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Cargar modo guardado del localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Guardar cambio de modo en localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

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
      <h2 className={`text-4xl md:text-5xl font-light tracking-tighter mb-4 uppercase ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <div className={`w-20 h-1 mx-auto mb-6 opacity-30 ${darkMode ? 'bg-white' : 'bg-black'}`}></div>
      {subtitle && <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>{subtitle}</p>}
    </div>
  );

  const MissionCard = ({ icon: Icon, title, content }) => (
    <div className={`p-8 border rounded-2xl hover:transition-all duration-500 group ${
      darkMode
        ? 'bg-white/5 border-white/10 hover:bg-white/10'
        : 'bg-white/60 border-gray-200/50 hover:bg-white/80'
    } backdrop-blur-md`}>
      <div className={`mb-6 inline-block p-4 rounded-xl group-hover:scale-110 transition-transform ${
        darkMode
          ? 'bg-white/10'
          : 'bg-gray-200'
      }`}>
        <Icon className={`w-8 h-8 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
      </div>
      <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>{content}</p>
    </div>
  );

  const WorkshopCard = ({ icon: Icon, title, subtitle }) => (
    <div className={`flex items-start p-6 border rounded-xl hover:transition-all group ${
      darkMode
        ? 'bg-zinc-900 border-zinc-800 hover:border-white/40'
        : 'bg-white/60 border-gray-200 hover:border-gray-400'
    }`}>
      <div className={`mr-5 p-3 rounded-lg group-hover:transition-colors ${
        darkMode
          ? 'bg-zinc-800 group-hover:bg-white group-hover:text-black'
          : 'bg-gray-300 group-hover:bg-gray-900 group-hover:text-white'
      }`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className={`font-medium text-lg leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h4>
        {subtitle && <p className={`text-sm mt-1 ${darkMode ? 'text-zinc-500' : 'text-gray-600'}`}>{subtitle}</p>}
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
    <div className={`min-h-screen ${darkMode ? 'bg-black text-gray-200' : 'bg-white text-gray-900'} font-sans selection:bg-white selection:text-black transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-black/90' : 'bg-white/90') + ' backdrop-blur-md py-4 border-b' + (darkMode ? ' border-white/10' : ' border-gray-200') : (darkMode ? 'bg-transparent' : 'bg-transparent') + ' py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <img 
              src="/logo-promadin.webp" 
              alt="Logo Fundación Promadín" 
              className={`w-14 h-14 md:w-16 md:h-16 object-contain group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 flex-shrink-0`}
            />
            <span className={`${darkMode ? 'text-white' : 'text-black'} font-bold tracking-widest text-xl`}>PROMADÍN</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 items-center">
            {['Inicio', 'Sobre Nosotros', 'Talleres', 'Contacto'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`text-sm uppercase tracking-widest ${darkMode ? 'hover:text-white text-gray-400' : 'hover:text-black text-gray-600'} transition-colors relative group`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${darkMode ? 'bg-white' : 'bg-black'} transition-all group-hover:w-full`}></span>
              </button>
            ))}
            {/* Botón de Cambio de Modo */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all ml-4 ${
                darkMode 
                  ? 'bg-white/10 hover:bg-white/20 text-yellow-300' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
              title={darkMode ? 'Modo Claro' : 'Modo Oscuro'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-3">
            {/* Botón de Cambio de Modo Mobile */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all ${
                darkMode 
                  ? 'bg-white/10 hover:bg-white/20 text-yellow-300' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
              title={darkMode ? 'Modo Claro' : 'Modo Oscuro'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className={`${darkMode ? 'text-white' : 'text-black'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`absolute top-full left-0 w-full ${darkMode ? 'bg-black border-white/10' : 'bg-white border-gray-200'} border-b py-10 flex flex-col items-center gap-8 md:hidden animate-in fade-in slide-in-from-top-4`}>
            {['Inicio', 'Sobre Nosotros', 'Talleres', 'Contacto'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`text-xl uppercase tracking-widest ${darkMode ? 'text-white' : 'text-black'}`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero / Inicio */}
      <section id="inicio" className={`relative min-h-screen flex items-center pt-20 overflow-hidden ${darkMode ? 'bg-black' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'}`}>
        <div className={`absolute inset-0 ${darkMode ? 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50' : 'bg-gradient-to-br from-transparent via-white to-white opacity-50'}`}></div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {darkMode ? (
            <>
              <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
            </>
          ) : (
            <>
              <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-float-delayed"></div>
            </>
          )}
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className={`inline-block px-4 py-1 border rounded-full mb-6 text-xs uppercase tracking-[0.3em] ${darkMode ? 'border-white/20 text-gray-400' : 'border-gray-300 text-gray-600'}`}>
              Desde 1995
            </div>
            <h1 className={`text-6xl md:text-8xl font-black ${darkMode ? 'text-white' : 'text-gray-900'} leading-none mb-8`}>
              EL PODER <br/>DE <span className={`${darkMode ? 'text-zinc-600' : 'text-blue-600'} italic`}>INCLUIR</span>.
            </h1>
            <p className={`text-xl leading-relaxed mb-8 max-w-xl ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Somos la Fundación Promadin, una organización sin ánimo de lucro que trabaja para la educación de jóvenes y adultos con discapacidad intelectual. Potenciamos capacidades para el desarrollo personal y social.
            </p>
            <button 
              onClick={() => scrollToSection('sobre-nosotros')}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all hover:gap-5 ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
            >
              CONÓCENOS <ArrowRight size={20} />
            </button>
          </div>
          <div className="animate-in fade-in zoom-in duration-1000 order-last md:order-none">
            <div className="relative">
              <div className={`absolute -inset-4 border rounded-3xl rotate-3 hidden md:block ${darkMode ? 'border-white/10' : 'border-gray-300'}`}></div>
              <div className={`backdrop-blur-md p-6 md:p-12 rounded-3xl border transition-all duration-500 ${
                darkMode 
                  ? 'bg-zinc-900/80 border-white/10 hover:border-white/30 hover:bg-zinc-800/80' 
                  : 'bg-white/60 border-gray-200/50 hover:border-gray-300 hover:bg-white/80'
              }`}>
                <p className={`md:text-lg italic leading-relaxed ${darkMode ? 'text-zinc-300 md:text-zinc-400' : 'text-gray-700'}`}>
                  "Desde nuestra creación en el barrio Santander, PROMADIN se ha dedicado a transformar vidas a través del amor, el respeto y la pedagogía especializada. Creemos que cada individuo posee talentos únicos."
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className={`w-12 h-0.5 ${darkMode ? 'bg-white/30' : 'bg-gray-400'}`}></div>
                  <span className={`font-bold tracking-widest uppercase text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>Legado y Compromiso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="sobre-nosotros" className={`py-32 ${darkMode ? 'bg-zinc-950' : 'bg-gray-50'} transition-colors duration-300`}>
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
      <section id="talleres" className={`py-32 ${darkMode ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
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
      <section id="contacto" className={`py-32 ${darkMode ? 'bg-zinc-950' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Contacto" />
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-8 lg:space-y-12 w-full">
              <div className="space-y-6 lg:space-y-8">
                <div className={`flex items-start lg:items-center gap-4 lg:gap-6 p-4 lg:p-0 rounded-xl lg:rounded-none transition-colors ${
                  darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100'
                }`}>
                  <div className={`p-4 rounded-full flex-shrink-0 transition-all group-hover:transition-all ${
                    darkMode 
                      ? 'bg-white/5 group-hover:bg-white group-hover:text-black' 
                      : 'bg-gray-200 group-hover:bg-gray-900 group-hover:text-white'
                  }`}>
                    <Mail size={24} className={darkMode ? 'text-white' : 'text-gray-900'} />
                  </div>
                  <div className="min-w-0">
                    <p className={`uppercase text-xs tracking-widest font-bold ${darkMode ? 'text-zinc-500' : 'text-gray-600'}`}>Correo</p>
                    <p className={`text-base lg:text-lg break-words ${darkMode ? 'text-white' : 'text-gray-900'}`}>fundacion_promadin@hotmail.com</p>
                  </div>
                </div>
                <div className={`flex items-start lg:items-center gap-4 lg:gap-6 p-4 lg:p-0 rounded-xl lg:rounded-none transition-colors ${
                  darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100'
                }`}>
                  <div className={`p-4 rounded-full flex-shrink-0 transition-all ${
                    darkMode 
                      ? 'bg-white/5 group-hover:bg-white group-hover:text-black' 
                      : 'bg-gray-200 group-hover:bg-gray-900 group-hover:text-white'
                  }`}>
                    <Phone size={24} className={darkMode ? 'text-white' : 'text-gray-900'} />
                  </div>
                  <div className="min-w-0">
                    <p className={`uppercase text-xs tracking-widest font-bold ${darkMode ? 'text-zinc-500' : 'text-gray-600'}`}>Llámanos</p>
                    <p className={`text-base lg:text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>316 2370280</p>
                  </div>
                </div>
                <div className={`flex items-start lg:items-center gap-4 lg:gap-6 p-4 lg:p-0 rounded-xl lg:rounded-none transition-colors ${
                  darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100'
                }`}>
                  <div className={`p-4 rounded-full flex-shrink-0 transition-all ${
                    darkMode 
                      ? 'bg-white/5 group-hover:bg-white group-hover:text-black' 
                      : 'bg-gray-200 group-hover:bg-gray-900 group-hover:text-white'
                  }`}>
                    <MapPin size={24} className={darkMode ? 'text-white' : 'text-gray-900'} />
                  </div>
                  <div className="min-w-0">
                    <p className={`uppercase text-xs tracking-widest font-bold ${darkMode ? 'text-zinc-500' : 'text-gray-600'}`}>Dirección</p>
                    <p className={`text-base lg:text-lg break-words ${darkMode ? 'text-white' : 'text-gray-900'}`}>Transversal 29 A bis # 29-59 Sur, Bogotá</p>
                  </div>
                </div>
              </div>

              <div className={`pt-8 border-t transition-colors ${darkMode ? 'border-white/10' : 'border-gray-300'}`}>
                <p className={`uppercase text-xs tracking-widest font-bold mb-6 ${darkMode ? 'text-zinc-500' : 'text-gray-600'}`}>Síguenos en Nuestras redes sociales</p>
                <div className="flex gap-4 flex-wrap">
                  <a href="https://www.facebook.com/profile.php?id=61582557248123" className={`p-4 rounded-xl transition-all hover:scale-110 active:scale-95 ${
                    darkMode
                      ? 'bg-gradient-to-br from-blue-600/20 to-blue-700/20 hover:from-blue-600 hover:to-blue-700 text-blue-400 hover:text-white'
                      : 'bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-600 hover:to-blue-700 text-blue-600 hover:text-white'
                  }`} title="Visita Facebook">
                    <Facebook size={28} strokeWidth={1.5} />
                  </a>
                  <a href="https://www.instagram.com/fundacion_promadin/" className={`p-4 rounded-xl transition-all hover:scale-110 active:scale-95 ${
                    darkMode
                      ? 'bg-gradient-to-br from-pink-600/20 to-purple-700/20 hover:from-pink-600 hover:to-purple-700 text-pink-400 hover:text-white'
                      : 'bg-gradient-to-br from-pink-100 to-purple-200 hover:from-pink-600 hover:to-purple-700 text-pink-600 hover:text-white'
                  }`} title="Visita Instagram">
                    <Instagram size={28} strokeWidth={1.5} />
                  </a>
                  <a href="https://www.tiktok.com/@fundacion_promadin" className={`p-4 rounded-xl transition-all hover:scale-110 active:scale-95 ${
                    darkMode
                      ? 'bg-gradient-to-br from-gray-600/20 to-gray-700/20 hover:from-gray-600 hover:to-gray-700 text-gray-300 hover:text-white'
                      : 'bg-gradient-to-br from-gray-200 to-gray-300 hover:from-gray-700 hover:to-gray-800 text-gray-700 hover:text-white'
                  }`} title="Visita TikTok">
                    <Music size={28} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>

            <div className={`w-full h-96 lg:h-full lg:min-h-[500px] rounded-3xl overflow-hidden border transition-all ${
              darkMode 
                ? 'border-white/10 grayscale hover:grayscale-0' 
                : 'border-gray-200 grayscale hover:grayscale-0'
            }`}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.019281063816!2d-74.11703332314629!3d4.590562695384049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9928f9e001e5%3A0x11cc49b1d34c73a7!2sFundaci%C3%B3n%20Promadin!5e0!3m2!1ses!2sco!4v1773805553702!5m2!1ses!2sco"
                width="100%" 
                height="100%" 
                style={{ border: 0, display: 'block' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <div className={`py-20 flex flex-col items-center ${darkMode ? 'bg-black border-white/5' : 'bg-white border-gray-200'} border-t transition-colors duration-300`}>
        <h3 className={`text-3xl font-light mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>¿Tienes alguna pregunta?</h3>
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
      <footer className={`py-12 px-6 border-t ${darkMode ? 'bg-black border-white/10 text-center' : 'bg-white border-gray-200'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img 
              src="/logo-promadin.webp" 
              alt="Logo Fundación Promadín" 
              className="w-12 h-12 object-contain flex-shrink-0"
            />
            <span className={`font-bold tracking-widest ${darkMode ? 'text-white' : 'text-black'}`}>PROMADÍN</span>
          </div>
          <p className={`text-sm ${darkMode ? 'text-zinc-500' : 'text-gray-600'}`}>
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
