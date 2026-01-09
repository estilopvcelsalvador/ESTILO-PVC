
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCart: () => void;
  cartCount: number;
}

const Logo: React.FC = () => (
  <div className="flex flex-col leading-none font-sans select-none text-white">
    <div className="flex flex-col items-start">
      <div className="flex items-baseline space-x-1 md:space-x-2">
        <span className="text-2xl md:text-4xl font-black tracking-tighter uppercase">PVC</span>
        <span className="text-[7px] md:text-[9px] font-bold tracking-[0.2em] uppercase opacity-90 border-t border-gold pt-1">EL SALVADOR</span>
      </div>
    </div>
  </div>
);

const Navbar: React.FC<NavbarProps> = ({ onOpenCart, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Catálogo', href: '#productos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/95 py-3 shadow-xl backdrop-blur-md border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="hover:opacity-80 transition-opacity">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <button 
            onClick={onOpenCart}
            className="relative text-white hover:text-gold transition-colors p-2"
            aria-label="Ver presupuesto"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-dark text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-lg ring-2 ring-dark">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            className="lg:hidden text-white hover:text-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <a
            href="https://wa.me/50374245711"
            target="_blank"
            className="hidden sm:block bg-gold hover:bg-white text-dark text-[10px] uppercase tracking-[0.3em] font-bold py-3 px-6 transition-all rounded"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Mobile Menu - Sin bordes laterales */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-dark border-t border-white/5 py-8 px-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[11px] uppercase tracking-[0.3em] font-bold text-gray-300 hover:text-gold"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
