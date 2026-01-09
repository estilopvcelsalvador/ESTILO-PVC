
import React from 'react';
import { Mail, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <h3 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Atención al Cliente</h3>
          <h2 className="font-serif text-5xl uppercase tracking-widest text-dark mb-10 leading-tight">Convierte tus paredes en protagonistas.</h2>
          <p className="text-gray-500 text-lg mb-12 font-light italic">Estamos listos para asesorarte en tu próximo proyecto residencial o comercial con la elegancia que mereces.</p>
          
          <div className="space-y-10">
            <div className="flex items-center space-x-6 group">
              <div className="w-14 h-14 bg-gray-50 border border-gray-100 flex items-center justify-center rounded-full text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">WhatsApp / Teléfono</p>
                <a href="https://wa.me/50374245711" target="_blank" className="text-dark font-bold text-2xl hover:text-gold transition-colors">+503 7424 5711</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 group">
              <div className="w-14 h-14 bg-gray-50 border border-gray-100 flex items-center justify-center rounded-full text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Email Corporativo</p>
                <p className="text-dark font-bold text-base">estilopvcelsalvador@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex space-x-8">
            <a href="https://instagram.com/estilopvc_sv" target="_blank" className="text-dark hover:text-gold transition-all transform hover:scale-110"><Instagram size={24} /></a>
            <a href="#" className="text-dark hover:text-gold transition-all transform hover:scale-110"><Facebook size={24} /></a>
            <a href="https://wa.me/50374245711" target="_blank" className="text-dark hover:text-gold transition-all transform hover:scale-110"><MessageCircle size={24} /></a>
          </div>
        </div>

        <div className="lg:w-1/2 w-full bg-white p-12 shadow-2xl border border-gray-100">
          <h4 className="font-serif text-2xl uppercase tracking-widest mb-10 text-center">Cotiza por WhatsApp</h4>
          <p className="text-gray-400 text-xs text-center uppercase tracking-[0.2em] mb-12">Selecciona tus materiales arriba o envíanos un mensaje directo para asesoría personalizada.</p>
          <div className="space-y-6">
            <a 
              href="https://wa.me/50374245711"
              target="_blank"
              className="block w-full bg-dark text-white text-center font-bold uppercase tracking-widest text-[10px] py-6 hover:bg-gold hover:text-dark transition-all duration-500 shadow-xl"
            >
              Iniciar Chat de Cotización
            </a>
            <div className="h-px bg-gray-100 w-full my-10"></div>
            <p className="text-[10px] text-gray-400 italic text-center leading-relaxed font-medium">
              Horario de atención:<br /> Lunes a Viernes 8:00 AM - 5:00 PM<br /> Sábados 8:00 AM - 12:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
