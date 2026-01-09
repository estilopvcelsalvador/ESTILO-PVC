
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Carolina Méndez",
    role: "Residencial Santa Elena",
    text: "Increíble cambio en mi sala. El panel de mármol blanco se ve idéntico a la piedra real pero mucho más fácil de limpiar. La instalación fue impecable.",
    stars: 5
  },
  {
    name: "Arq. Roberto Díaz",
    role: "Estudio Diseño Urbano",
    text: "Como arquitecto busco materiales que duren y se vean premium. Estilo PVC es mi aliado número uno por su puntualidad y calidad de acabados.",
    stars: 5
  },
  {
    name: "Miguel Ángel Paz",
    role: "Local Comercial",
    text: "Instalaron los listones en mi oficina en una sola tarde. Sin polvo ni ruidos molestos. Recomendados 100% por su profesionalismo.",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h3 className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-4">Experiencias</h3>
        <h2 className="font-serif text-4xl md:text-5xl uppercase tracking-widest text-white">Lo que dicen de nosotros</h2>
        <div className="w-24 h-px bg-gold/50 mx-auto mt-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <div key={idx} className="bg-dark border border-white/5 p-10 rounded-2xl hover:border-gold/30 transition-all duration-500 relative overflow-hidden group">
            <div className="flex mb-6 text-gold">
              {[...Array(rev.stars)].map((_, i) => (
                <Star key={i} size={16} fill="#D4AF37" className="mr-1 animate-pulse" />
              ))}
            </div>
            <p className="text-gray-300 italic text-sm leading-loose mb-8 relative z-10">
              "{rev.text}"
            </p>
            <div>
              <h4 className="text-white font-bold text-[12px] uppercase tracking-widest">{rev.name}</h4>
              <p className="text-gold text-[9px] uppercase tracking-widest font-medium mt-1">{rev.role}</p>
            </div>
            {/* Adorno visual de fondo */}
            <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <Star size={120} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
