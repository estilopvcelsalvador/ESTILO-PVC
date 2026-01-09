
import React from 'react';

const projectImages = [
  { url: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800', title: 'Residencia Premium', category: 'Interior' },
  { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800', title: 'Oficinas Corporativas', category: 'Corporativo' },
  { url: 'https://images.unsplash.com/photo-1600607687940-c52af0497641?auto=format&fit=crop&q=80&w=800', title: 'Espacio Comercial', category: 'Comercial' },
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', title: 'Fachada Exterior', category: 'Exterior' },
];

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h3 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Portafolio</h3>
        <h2 className="font-serif text-4xl md:text-5xl uppercase tracking-widest text-white mb-8">PROYECTOS QUE INSPIRAN:<br /><span className="text-gray-500">Diseño y Vanguarda</span></h2>
        <p className="text-gray-400 text-lg max-w-4xl mx-auto font-light leading-relaxed text-justify md:text-center italic">
          En Estilo PVC El Salvador, materializamos visiones arquitectónicas integrando la sofisticación del PVC decorativo en entornos de alto nivel. Nuestra experiencia abarca desde la calidez de residencias privadas hasta la sobriedad y elegancia de espacios comerciales y corporativos en todo el país.
          <br /><br />
          Cada instalación es un equilibrio perfecto entre texturas modernas, tonos neutros y una iluminación estratégica que resalta la tridimensionalidad de nuestros paneles tipo listón.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projectImages.map((project, idx) => (
          <div key={idx} className="group relative overflow-hidden aspect-[4/5] cursor-pointer bg-premium">
            <img 
              src={project.url} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-gold text-[9px] tracking-[0.4em] uppercase mb-2 font-bold">{project.category}</span>
              <h4 className="text-white font-serif text-lg uppercase tracking-widest">{project.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
