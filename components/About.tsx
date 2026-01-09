
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-4xl py-24">
      <div className="flex flex-col items-center text-center">
        <div className="mb-8 reveal">
          <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-black">Nuestra Misión</span>
          <div className="h-px w-12 bg-gold mx-auto mt-4"></div>
        </div>
        
        <h2 className="font-serif text-5xl md:text-7xl uppercase tracking-tighter text-dark mb-10 leading-tight reveal">
          Arte en cada <br /><span className="italic font-light text-gold">detalle.</span>
        </h2>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-12 font-light reveal max-w-2xl">
          En <span className="text-dark font-bold">Estilo PVC El Salvador</span>, nuestra misión es redefinir el diseño de interiores a través de materiales innovadores y acabados de lujo que garantizan durabilidad y una estética impecable en cada ambiente.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 reveal w-full max-w-2xl">
          <div className="space-y-4">
             <h4 className="text-dark font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3">
               <ShieldCheck className="text-gold" size={16} />
               Calidad Certificada
             </h4>
             <p className="text-gray-500 text-sm leading-relaxed">Paneles con alta resistencia al impacto y texturas de alta definición.</p>
          </div>
          <div className="space-y-4">
             <h4 className="text-dark font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3">
               <ShieldCheck className="text-gold" size={16} />
               Compromiso VIP
             </h4>
             <p className="text-gray-500 text-sm leading-relaxed">Asesoría personalizada para proyectos residenciales y corporativos.</p>
          </div>
        </div>

        <div className="reveal">
          <a href="#contacto" className="inline-block bg-dark text-white text-[11px] uppercase tracking-[0.4em] font-black py-5 px-10 hover:bg-gold transition-colors duration-500 shadow-xl">
            Descubra la Experiencia
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
