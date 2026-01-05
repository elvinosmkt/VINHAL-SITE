
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import Logo from './Logo';
import { INSTAGRAM_URL, ADDRESS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tratamentos', path: '/tratamentos' },
    { name: 'Antes & Depois', path: '/galeria' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${scrolled || !isHome
      ? 'bg-white/90 backdrop-blur-md shadow-lg py-3'
      : 'bg-transparent py-6'
      }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="z-50 group">
          <Logo scrolled={scrolled || !isHome} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-semibold tracking-[0.15em] uppercase hover:text-primary-gold transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-primary-gold after:bottom-[-4px] after:left-0 after:transition-all hover:after:w-full ${location.pathname === link.path
                ? 'text-primary-gold after:w-full'
                : (scrolled || !isHome) ? 'text-secondary-petrol' : 'text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className={`${(scrolled || !isHome) ? 'text-secondary-petrol' : 'text-white'} hover:text-primary-gold transition-transform hover:scale-110`}
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden z-50 focus:outline-none transition-colors ${isOpen || scrolled || !isHome ? 'text-secondary-petrol' : 'text-white'
            }`}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center space-y-8 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          } md:hidden`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-3xl font-serif font-medium ${location.pathname === link.path ? 'text-primary-gold' : 'text-secondary-petrol'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="text-secondary-petrol mt-8"
          >
            <Instagram className="w-8 h-8" />
          </a>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-petrol text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-20">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="mb-6 block">
              <Logo light />
            </Link>
            <p className="text-white/70 mb-8 font-light leading-relaxed text-sm">
              Elevando o padrão da Harmonização Facial em Balneário Camboriú.
              Ciência, arte e excelência para pacientes e profissionais.
            </p>
            <div className="flex space-x-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-secondary-petrol transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 md:pl-12">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-primary-gold">Contato & Localização</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-4 text-white/80 font-light text-sm">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary-gold shrink-0" />
                  <span>{ADDRESS}</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-primary-gold shrink-0" />
                  <span>(47) 97400-9399</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-primary-gold shrink-0" />
                  <span>contato@iav.com.br</span>
                </li>
              </ul>
              <div>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  Atendimento com hora marcada.<br />
                  Segunda a Sexta: 09h - 20h<br />
                  Sábado: 09h - 12h<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-primary-gold">Menu Rápido</h4>
            <ul className="space-y-3 text-white/70 font-light text-sm">
              <li><Link to="/tratamentos" className="hover:text-primary-gold hover:pl-2 transition-all">Tratamentos</Link></li>
              <li><Link to="/cursos" className="hover:text-primary-gold hover:pl-2 transition-all">Instituto de Cursos</Link></li>
              <li><Link to="/galeria" className="hover:text-primary-gold hover:pl-2 transition-all">Antes e Depois</Link></li>
              <li><Link to="/sobre" className="hover:text-primary-gold hover:pl-2 transition-all">Sobre o Instituto</Link></li>
              <li><Link to="/contato" className="hover:text-primary-gold hover:pl-2 transition-all">Fale Conosco</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-light">
          <p>&copy; {new Date().getFullYear()} Instituto Acadêmico Vinhal. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Design Premium por IAV Studio.</p>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-neutral-light">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
