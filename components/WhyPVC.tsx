
import React from 'react';
import { Star } from 'lucide-react';

const RatingStars: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className="flex justify-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className={`${i < count ? 'text-gold fill-gold' : 'text-gray-200'} transition-colors duration-300`}
        />
      ))}
    </div>
  );
};

const WhyPVC: React.FC = () => {
  const comparisonData = [
    { material: 'PVC', estetica: 5, mantenimiento: 5, durabilidad: 5, isPremium: true },
    { material: 'Pintura', estetica: 2, mantenimiento: 1, durabilidad: 2, isPremium: false },
    { material: 'Madera', estetica: 4, mantenimiento: 2, durabilidad: 3, isPremium: false },
  ];

  return (
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-20">
        <h3 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Análisis de Valor</h3>
        <h2 className="font-serif text-4xl md:text-5xl uppercase tracking-widest text-dark">Cuadro Comparativo</h2>
        <div className="w-20 h-px bg-gold/50 mx-auto mt-8"></div>
      </div>

      <div className="bg-white shadow-2xl overflow-hidden rounded-xl border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-dark text-white">
                <th className="py-8 px-6 font-serif text-xl uppercase tracking-widest border-r border-white/10">Material</th>
                <th className="py-8 px-6 font-serif text-xl uppercase tracking-widest border-r border-white/10">Estética</th>
                <th className="py-8 px-6 font-serif text-xl uppercase tracking-widest border-r border-white/10">Mantenimiento</th>
                <th className="py-8 px-6 font-serif text-xl uppercase tracking-widest">Durabilidad</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={`${idx !== comparisonData.length - 1 ? 'border-b border-gray-100' : ''} ${row.isPremium ? 'bg-gold/5' : 'hover:bg-gray-50'} transition-colors`}
                >
                  <td className={`py-10 px-6 font-serif text-2xl border-r border-gray-100 ${row.isPremium ? 'text-dark font-black' : 'text-gray-400'}`}>
                    {row.material}
                    {row.isPremium && <span className="block text-[9px] uppercase tracking-[0.3em] font-sans text-gold mt-2">Nuestra Solución</span>}
                  </td>
                  <td className="py-10 px-6 border-r border-gray-100">
                    <RatingStars count={row.estetica} />
                  </td>
                  <td className="py-10 px-6 border-r border-gray-100">
                    <RatingStars count={row.mantenimiento} />
                  </td>
                  <td className="py-10 px-6">
                    <RatingStars count={row.durabilidad} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <p className="mt-12 text-center text-gray-400 text-xs uppercase tracking-widest font-medium">
        * Basado en pruebas de rendimiento en condiciones de alta humedad en El Salvador.
      </p>
    </div>
  );
};

export default WhyPVC;
