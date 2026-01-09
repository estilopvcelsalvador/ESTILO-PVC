
import React from 'react';
import { Droplets, ShieldCheck, Zap, Sparkles, Clock, Layout } from 'lucide-react';

const benefits = [
  {
    icon: <Droplets className="text-gold" size={32} />,
    title: 'Resistente a Humedad',
    desc: 'Ideal para climas tropicales y zonas húmedas, sin deformaciones ni moho.'
  },
  {
    icon: <Sparkles className="text-gold" size={32} />,
    title: 'Fácil Limpieza',
    desc: 'Superficies que repelen el polvo y se limpian con un simple paño húmedo.'
  },
  {
    icon: <Zap className="text-gold" size={32} />,
    title: 'Instalación Rápida',
    desc: 'Proceso eficiente, sin escombros y en tiempos récord para su comodidad.'
  },
  {
    icon: <Layout className="text-gold" size={32} />,
    title: 'Estético y Moderno',
    desc: 'Acabados de lujo que imitan madera y piedra con realismo excepcional.'
  },
  {
    icon: <Clock className="text-gold" size={32} />,
    title: 'Alta Durabilidad',
    desc: 'Materiales diseñados para resistir el paso del tiempo manteniendo su color.'
  },
  {
    icon: <ShieldCheck className="text-gold" size={32} />,
    title: 'Áreas Versátiles',
    desc: 'Perfecto para transformar cualquier ambiente residencial o comercial.'
  }
];

const Benefits: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h3 className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-2 italic">Excelencia</h3>
        <h2 className="font-serif text-4xl md:text-5xl uppercase tracking-widest text-dark">Beneficios del PVC</h2>
        <div className="w-20 h-px bg-gold mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="group bg-white p-8 border-b-2 border-transparent hover:border-gold transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="mb-6 transform group-hover:-translate-y-1 transition-transform duration-300">
              {benefit.icon}
            </div>
            <h4 className="text-xl font-serif uppercase tracking-wider mb-4 text-dark">{benefit.title}</h4>
            <p className="text-gray-500 leading-relaxed text-sm font-light">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
