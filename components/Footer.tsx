
import React from 'react';

const LogoFooter: React.FC = () => (
  <div className="flex flex-col items-center md:items-start leading-[0.8] font-sans text-white group">
    <span className="text-3xl font-black tracking-[-0.05em] uppercase group-hover:text-gold transition-colors">ESTILO</span>
    <div className="flex items-end gap-1">
      <span className="text-4xl font-black tracking-[-0.05em] uppercase group-hover:text-gold transition-colors">PVC</span>
      <span className="text-[7px] font-bold tracking-[0.1em] uppercase text-white/60 pb-0.5">EL SALVADOR</span>
    </div>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-12">
          <div className="flex flex-col items-center md:items-start">
            <a href="#inicio" className="block mb-6">
              <LogoFooter />
            </a>
            <p className="text-gray-500 text-sm mt-4 max-w-sm leading-loose">
              Líderes en revestimientos premium para muros en El Salvador. 
              Calidad que transforma y diseño que trasciende.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <p className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">Contacto Corporativo</p>
            <p className="text-white font-bold tracking-widest text-xs">estilopvcelsalvador@gmail.com</p>
            <p className="text-white font-black tracking-widest text-lg">+503 7424 5711</p>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-700 gap-6">
          <p>© {new Date().getFullYear()} Estilo PVC El Salvador. Todos los derechos reservados.</p>
          <div className="flex space-x-8 font-bold">
            <a href="#" className="hover:text-gold transition-colors">Privacidad</a>
            <a href="#" className="hover:text-gold transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
