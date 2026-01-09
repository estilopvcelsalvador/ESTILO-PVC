
import React from 'react';
import { ChevronRight as ChevronRightIcon, ArrowDown } from 'lucide-react';

const LogoBrand: React.FC = () => (
  <div className="flex flex-col items-center justify-center font-sans select-none mb-10 animate-fade-in">
    <div className="flex flex-col items-start leading-[0.8]">
      {/* "ESTILO" en blanco puro, monumental */}
      <span className="text-7xl md:text-9xl lg:text-[13rem] font-black tracking-[-0.05em] uppercase text-white">
        ESTILO
      </span>
      <div className="flex items-baseline gap-4 md:gap-8">
        {/* "PVC" en blanco puro */}
        <span className="text-8xl md:text-[11rem] lg:text-[16rem] font-black tracking-[-0.05em] uppercase text-white">
          PVC
        </span>
        {/* "EL SALVADOR" pequeño a la derecha, tal cual la imagen */}
        <span className="text-[10px] md:text-3xl font-bold tracking-[0.1em] uppercase text-white mb-2 md:mb-6">
          EL SALVADOR
        </span>
      </div>
    </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-dark">
      {/* Fondo de paneles fusionado con muy baja opacidad */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 opacity-20"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&q=80&w=2000')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pt-24">
        {/* LOGO ORIGINAL (BLANCO PURO) - PROTAGONISTA */}
        <LogoBrand />

        <div className="max-w-5xl mx-auto">
          {/* Slogan reducido para no competir con el logo */}
          <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl text-white uppercase tracking-[0.2em] mb-6 leading-none animate-fade-in [animation-delay:300ms]">
            DISEÑO & LUJO<span className="text-gold">.</span>
          </h1>
          
          <div className="mb-12 animate-fade-in [animation-delay:600ms]">
             <span className="italic text-gray-500 text-sm md:text-xl tracking-[0.4em] block font-light uppercase">
              Elegancia que se instala, <span className="text-white border-b border-gold/30">diseño que transforma.</span>
            </span>
          </div>
          
          <p className="text-gray-400 text-[10px] md:text-xs lg:text-sm max-w-xl mx-auto mb-16 font-light tracking-[0.3em] uppercase leading-relaxed animate-fade-in [animation-delay:900ms] opacity-60">
            Transformamos espacios con tecnología de PVC de alta fidelidad que emula la calidez de la madera y la sofisticación del mármol.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 animate-fade-in [animation-delay:1200ms]">
            <a
              href="https://wa.me/50374245711"
              target="_blank"
              className="group bg-gold text-dark font-black uppercase tracking-[0.4em] text-[11px] py-6 px-14 flex items-center justify-center hover:bg-white transition-all duration-700 shadow-[0_20px_50px_rgba(197,160,40,0.2)]"
            >
              Cotizar por WhatsApp
              <ChevronRightIcon className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="#productos"
              className="group text-white/40 font-bold uppercase tracking-[0.4em] text-[11px] flex items-center hover:text-gold transition-all"
            >
              Ver Catálogo
              <ArrowDown className="ml-3 animate-bounce" size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
