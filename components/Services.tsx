
import React from 'react';
import { Home, Building2, Layers, ShieldCheck, Ruler, Wrench } from 'lucide-react';

const mainServices = [
  {
    icon: <Layers size={40} />,
    title: 'Venta de Material',
    desc: 'Venta de paneles decorativos de PVC de alta gama por pieza.'
  },
  {
    icon: <Wrench size={40} />,
    title: 'Instalación Profesional',
    desc: 'Equipo técnico especializado para acabados impecables en tus proyectos.'
  },
  {
    icon: <Home size={40} />,
    title: 'Residencial',
    desc: 'Transformamos salas, comedores, cocinas, baños y dormitorios en espacios de lujo.'
  },
  {
    icon: <Building2 size={40} />,
    title: 'Comercial',
    desc: 'Revestimientos elegantes para oficinas, locales y proyectos corporativos.'
  }
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h3 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Nuestra Experticia</h3>
        <h2 className="font-serif text-4xl md:text-5xl uppercase tracking-widest text-white">Servicios Integrales</h2>
        <div className="w-20 h-px bg-gold/50 mx-auto mt-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {mainServices.map((service, idx) => (
          <div key={idx} className="bg-premium/40 p-10 border border-white/5 hover:border-gold/30 transition-all duration-700 group text-center">
            <div className="text-gold mb-8 flex justify-center group-hover:scale-110 transition-transform duration-500">
              {service.icon}
            </div>
            <h4 className="font-serif text-xl uppercase tracking-widest mb-6 text-white group-hover:text-gold transition-colors">{service.title}</h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-12 border-t border-white/5 pt-16">
        <div className="flex items-center space-x-3 group">
          <ShieldCheck className="text-gold" size={20} />
          <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 group-hover:text-white transition-colors">Paredes Interiores</span>
        </div>
        <div className="flex items-center space-x-3 group">
          <ShieldCheck className="text-gold" size={20} />
          <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 group-hover:text-white transition-colors">Paredes Exteriores</span>
        </div>
        <div className="flex items-center space-x-3 group">
          <Ruler className="text-gold" size={20} />
          <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 group-hover:text-white transition-colors">Asesoría Técnica</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
