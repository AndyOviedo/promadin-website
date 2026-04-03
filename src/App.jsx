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
  DollarSign,
  Beaker,
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
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [isWorkshopModalOpen, setIsWorkshopModalOpen] = useState(false);

  const openWorkshopModal = (workshop) => {
    setSelectedWorkshop(workshop);
    setIsWorkshopModalOpen(true);
  };

  const closeWorkshopModal = () => {
    setIsWorkshopModalOpen(false);
    setSelectedWorkshop(null);
  };

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
    <div className={`cursor-pointer flex items-start p-6 border rounded-xl hover:transition-all group ${
      darkMode
        ? 'bg-zinc-900 border-zinc-800 hover:border-white/40'
        : 'bg-white/60 border-gray-200 hover:border-gray-400'
    }`}>
      <div className={`mr-5 p-3 rounded-lg group-hover:transition-colors group-hover:scale-110 transition-transform duration-300 ${
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
    {
      icon: Sparkles,
      title: "Creando sueños con tus manos",
      subtitle: "Manualidades y creatividad",
      description: "Actividades prácticas para desarrollar destrezas motrices, artísticas y de autoestima.",
      image: "/Talleres/01.webp"
    },
    {
      icon: DollarSign,
      title: "Descubriendo el valor del dinero",
      subtitle: "Educación financiera básica",
      description: "Taller para aprender sobre ahorro, presupuestos y el uso responsable del dinero.",
      image: "/Talleres/02.webp"
    },
    {
      icon: Beaker,
      title: "Exploradores de la ciencia",
      subtitle: "Experimentos y descubrimientos",
      description: "Investigamos y experimentamos con proyectos lúdicos para despertar la curiosidad científica.",
      image: "/Talleres/03.webp"
    },
    {
      icon: Sprout,
      title: "Huerta Mágica: De la semilla al sueño",
      subtitle: "Cultivo y naturaleza",
      description: "Conocemos el ciclo de las plantas, cuidamos la huerta y cosechamos nuestros propios alimentos.",
      image: "/Talleres/04.webp"
    },
    {
      icon: Brain,
      title: "Cerebro y cuerpo en acción",
      subtitle: "Coordinación y bienestar",
      description: "Ejercicios combinados para desarrollar habilidades cognitivas y motrices con alegría.",
      image: "/Talleres/05.webp"
    },
    {
      icon: Settings,
      title: "Hábitos transformadores",
      subtitle: "Transformación personal",
      description: "Construimos rutinas saludables y prácticas para el crecimiento emocional y social.",
      image: "/Talleres/06.webp"
    },
    {
      icon: ChefHat,
      title: "Cocinando trocitos de amor (panadería y cocina)",
      subtitle: "Cocina creativa",
      description: "Aprendemos técnicas de cocina sencilla y recetas nutritivas con cariño y compañerismo.",
      image: "/Talleres/07.webp"
    },
    {
      icon: ShoppingBag,
      title: "Taller de bolsas y traperos",
      subtitle: "Reciclaje y taller textil",
      description: "Diseño y confección de prendas reutilizando materiales para fomentar sostenibilidad.",
      image: "/Talleres/08.webp"
    },
    {
      icon: Dumbbell,
      title: "Deporte - Integración social",
      subtitle: "Actividad física en equipo",
      description: "Juegos, deportes inclusivos y trabajo en equipo para fortalecer relaciones y salud.",
      image: "/Talleres/09.webp"
    },
    {
      icon: Palette,
      title: "ExpresArte",
      subtitle: "Arte y expresión",
      description: "Taller de pintura, música y danza para potenciar la creatividad y la comunicación.",
      image: "/Talleres/10.webp"
    },
    {
      icon: Mic2,
      title: "Fonoaudiología",
      subtitle: "Comunicación y lenguaje",
      description: "Ejercicios especializados para mejorar la pronunciación, respiración y lenguaje funcional.",
      image: "/Talleres/11.webp"
    },
    {
      icon: Smile,
      title: "IDRD (deporte)",
      subtitle: "Integración deportiva",
      description: "Actividades deportivas en alianza con IDRD para inclusión y desarrollo físico.",
      image: "/Talleres/12.webp"
    },
    {
      icon: Monitor,
      title: "Mundo digital: creatividad y tecnología",
      subtitle: "Digitaliza tu talento",
      description: "Talleres de tecnología, multimedia y herramientas digitales para proyectos creativos.",
      image: "/Talleres/13.webp"
    }
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
            <span className={`${darkMode ? 'text-white' : 'text-black'} font-bold tracking-widest text-xl`}>Fundación Promadin</span>
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
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 transition-all group-hover:w-full"></span>
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
              UN ESPACIO <br/>PARA <span className={`${darkMode ? 'text-zinc-600' : 'text-blue-600'} italic`}>SER Y CRECER</span>.
            </h1>
            <p className={`text-xl leading-relaxed mb-8 max-w-xl ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Somos la Fundación Promadin, una organización sin ánimo de lucro que trabaja para la educación de jóvenes y adultos con discapacidad intelectual. Potenciamos capacidades para el desarrollo personal y social.
            </p>
          </div>
          <div className="animate-in fade-in zoom-in duration-1000 order-last md:order-none">
            <div className="relative">
              <div className={`absolute -inset-4 border rounded-3xl rotate-3 hidden md:block ${darkMode ? 'border-white/10' : 'border-gray-300'}`}></div>
              <div className={`group backdrop-blur-md p-6 md:p-12 rounded-3xl border transition-all duration-500 ${
                darkMode 
                  ? 'bg-zinc-900/80 border-white/10 hover:border-white/30 hover:bg-zinc-800/80' 
                  : 'bg-white/60 border-gray-200/50 hover:border-gray-300 hover:bg-white/80'
              } hover:bg-gradient-to-r hover:from-red-500/10 hover:via-green-500/10 hover:to-blue-500/10`}>
                <p className={`md:text-lg italic leading-relaxed transition-colors duration-300 ${darkMode ? 'text-zinc-300 md:text-zinc-400 group-hover:text-white' : 'text-gray-700 group-hover:text-black'}`}>
                  "Desde nuestra creación en el barrio Santander, PROMADIN se ha dedicado a transformar vidas a través del amor, el respeto y la pedagogía especializada. Creemos que cada individuo posee talentos únicos."
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <span className={`font-bold tracking-widest uppercase text-sm transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-white' : 'text-gray-900 group-hover:text-black'}`}>Legado y Compromiso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="sobre-nosotros" className={`py-32 relative overflow-hidden ${darkMode ? 'bg-zinc-950' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="absolute inset-0 overflow-hidden z-0">
          {darkMode ? (
            <>
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/5 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/5 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
            </>
          ) : (
            <>
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-200/30 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-200/30 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
            </>
          )}
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
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
      <section id="talleres" className={`py-32 relative overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
        <div className="absolute inset-0 overflow-hidden z-0">
          {darkMode ? (
            <>
              <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/8 via-transparent to-transparent rounded-full blur-3xl animate-float"></div>
              <div className="absolute -bottom-1/4 -left-1/3 w-96 h-96 bg-gradient-to-tr from-emerald-500/8 via-transparent to-transparent rounded-full blur-3xl animate-float-delayed"></div>
              <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
            </>
          ) : (
            <>
              <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-200/30 via-transparent to-transparent rounded-full blur-3xl animate-float"></div>
              <div className="absolute -bottom-1/4 -left-1/3 w-96 h-96 bg-gradient-to-tr from-emerald-200/30 via-transparent to-transparent rounded-full blur-3xl animate-float-delayed"></div>
              <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-b from-transparent via-blue-200/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
            </>
          )}
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle 
            title="Programas y Talleres" 
            subtitle="Espacios diseñados para el crecimiento, la autonomía y el descubrimiento de talentos."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <button
                key={index}
                onClick={() => openWorkshopModal(workshop)}
                className="animate-in fade-in slide-in-from-bottom-4 text-left"
                style={{ animationDelay: `${index * 50}ms` }}
                aria-label={`Abrir detalles de ${workshop.title}`}
              >
                <WorkshopCard 
                  icon={workshop.icon}
                  title={workshop.title}
                  subtitle={workshop.subtitle}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {isWorkshopModalOpen && selectedWorkshop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={closeWorkshopModal}>
          <div className="relative w-full max-w-4xl rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 rounded-full p-2 bg-white/20 text-white hover:bg-white/40" 
              onClick={closeWorkshopModal}
              aria-label="Cerrar modal"
            >
              ✕
            </button>
            <img
              src={selectedWorkshop.image}
              alt={selectedWorkshop.title}
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/1200x800?text=Imagen+no+disponible'; }}
              className="w-full h-64 md:h-96 object-cover rounded-2xl mb-5"
              loading="lazy"
            />
            <h3 className="text-2xl font-bold mb-3 text-white">{selectedWorkshop.title}</h3>
            <p className="text-sm mb-4 text-white/80">{selectedWorkshop.subtitle}</p>
            <p className="text-base text-white/90">{selectedWorkshop.description}</p>
          </div>
        </div>
      )}

      {/* Contacto */}
      <section id="contacto" className={`py-32 px-4 sm:px-6 relative overflow-hidden ${darkMode ? 'bg-zinc-950' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="absolute inset-0 overflow-hidden z-0">
          {darkMode ? (
            <>
              <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-pink-500/5 via-transparent to-transparent rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-orange-500/5 via-transparent to-transparent rounded-full blur-3xl animate-float-delayed"></div>
              <div className="absolute top-0 left-1/2 w-96 h-64 bg-gradient-to-b from-red-500/5 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s' }}></div>
            </>
          ) : (
            <>
              <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-pink-200/30 via-transparent to-transparent rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-orange-200/30 via-transparent to-transparent rounded-full blur-3xl animate-float-delayed"></div>
              <div className="absolute top-0 left-1/2 w-96 h-64 bg-gradient-to-b from-red-200/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s' }}></div>
            </>
          )}
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 relative z-10">
          <SectionTitle title="Contacto" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
            <div className="space-y-8 lg:space-y-12 w-full">
              <div className="space-y-6 lg:space-y-8">
                <div className={`flex items-center gap-3 sm:gap-4 lg:gap-6 p-2 sm:p-3 lg:p-0 rounded-xl lg:rounded-none transition-colors ${
                  darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100'
                }`}>
                  <div className={`p-3 sm:p-4 rounded-full flex-shrink-0 transition-all ${
                    darkMode 
                      ? 'bg-white/5 group-hover:bg-white group-hover:text-black' 
                      : 'bg-gray-200 group-hover:bg-gray-900 group-hover:text-white'
                  }`}>
                    <Mail size={20} className={darkMode ? 'text-white' : 'text-gray-900'} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`uppercase text-xs tracking-widest font-bold ${darkMode ? 'text-zinc-500' : 'text-gray-600'}`}>Correo</p>
                    <p className={`text-xs sm:text-sm md:text-base lg:text-lg break-words overflow-hidden text-ellipsis ${darkMode ? 'text-white' : 'text-gray-900'}`}>fundacion_promadin@hotmail.com</p>
                  </div>
                </div>
                <div className={`flex items-center gap-3 sm:gap-4 lg:gap-6 p-2 sm:p-3 lg:p-0 rounded-xl lg:rounded-none transition-colors ${
                  darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100'
                }`}>
                  <div className={`p-3 sm:p-4 rounded-full flex-shrink-0 transition-all ${
                    darkMode 
                      ? 'bg-white/5 group-hover:bg-white group-hover:text-black' 
                      : 'bg-gray-200 group-hover:bg-gray-900 group-hover:text-white'
                  }`}>
                    <Phone size={20} className={darkMode ? 'text-white' : 'text-gray-900'} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`uppercase text-xs tracking-widest font-bold ${darkMode ? 'text-zinc-500' : 'text-gray-600'}`}>Llámanos</p>
                    <p className={`text-xs sm:text-sm md:text-base lg:text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>316 2370280</p>
                  </div>
                </div>
                <div className={`flex items-center gap-3 sm:gap-4 lg:gap-6 p-2 sm:p-3 lg:p-0 rounded-xl lg:rounded-none transition-colors ${
                  darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100'
                }`}>
                  <div className={`p-3 sm:p-4 rounded-full flex-shrink-0 transition-all ${
                    darkMode 
                      ? 'bg-white/5 group-hover:bg-white group-hover:text-black' 
                      : 'bg-gray-200 group-hover:bg-gray-900 group-hover:text-white'
                  }`}>
                    <MapPin size={20} className={darkMode ? 'text-white' : 'text-gray-900'} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`uppercase text-xs tracking-widest font-bold ${darkMode ? 'text-zinc-500' : 'text-gray-600'}`}>Dirección</p>
                    <p className={`text-xs sm:text-sm md:text-base lg:text-lg break-words ${darkMode ? 'text-white' : 'text-gray-900'}`}>Transversal 29 A bis # 29-59 Sur, Bogotá</p>
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

            <div className={`relative w-full h-60 sm:h-72 md:h-96 lg:min-h-[500px] rounded-2xl md:rounded-3xl overflow-hidden border transition-all ${
              darkMode 
                ? 'border-white/10 md:grayscale md:hover:grayscale-0' 
                : 'border-gray-200 md:grayscale md:hover:grayscale-0'
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
      <footer className={`py-12 px-6 border-t ${darkMode ? 'bg-black border-white/10' : 'bg-white border-gray-200'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-3">
            <img 
              src="/logo-promadin.webp" 
              alt="Logo Fundación Promadín" 
              className="w-12 h-12 object-contain flex-shrink-0"
            />
            <span className={`font-bold tracking-widest ${darkMode ? 'text-white' : 'text-black'}`}>Fundación Promadin</span>
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
        @keyframes float {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(120deg); }
          66% { transform: translate(20px, -20px) rotate(240deg); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 24s ease-in-out infinite 4s;
        }
      `}</style>
    </div>
  );
};

export default App;
