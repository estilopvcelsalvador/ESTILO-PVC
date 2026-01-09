
import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ShoppingBag, X, Trash2, ArrowRight, Shield } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  type: 'liston' | 'marmol';
}

const App: React.FC = () => {
  const [cart, setCart] = useState<{product: Product, qty: number}[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + (item.product.price * item.qty), 0);

  // Nombres originales restaurados
  const listones: Product[] = [
    { id: 1, name: 'Café Oscuro', price: 9.99, type: 'liston' },
    { id: 2, name: 'Gris', price: 9.99, type: 'liston' },
    { id: 3, name: 'Roble', price: 9.99, type: 'liston' },
    { id: 4, name: 'Nogal', price: 9.99, type: 'liston' },
    { id: 5, name: 'Ceniza', price: 9.99, type: 'liston' },
    { id: 6, name: 'Ébano', price: 9.99, type: 'liston' },
  ];

  const laminas: Product[] = [
    { id: 101, name: 'Mármol Carrara', price: 38.99, type: 'marmol' },
    { id: 102, name: 'Mármol Grafito', price: 38.99, type: 'marmol' },
    { id: 103, name: 'Mármol Sahara', price: 38.99, type: 'marmol' },
    { id: 104, name: 'Mármol Negro', price: 38.99, type: 'marmol' },
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-10 right-10 z-[60] bg-gold text-dark p-5 rounded-full shadow-[0_10px_40px_rgba(197,160,40,0.5)] hover:scale-110 transition-all duration-500 group border border-white/20"
      >
        <ShoppingBag size={28} strokeWidth={1.5} />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-dark text-[10px] font-black w-7 h-7 flex items-center justify-center rounded-full border border-gold">
            {cart.reduce((a, b) => a + b.qty, 0)}
          </span>
        )}
      </button>

      <main>
        <section id="inicio">
          <Hero />
        </section>

        <div className="bg-premium py-20 border-y luxury-border relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10"></div>
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center relative z-10">
            {[
              { val: "10+", label: "Años de Garantía Real", sub: "Respaldo Certificado" },
              { val: "100%", label: "Resistente al Agua", sub: "Polímeros de Alta Densidad" },
              { val: "24h", label: "Instalación Élite", sub: "Sin Escombros" }
            ].map((stat, i) => (
              <div key={i} className="space-y-4 reveal">
                <p className="gold-text-glow gold-gradient text-6xl font-black font-serif italic">{stat.val}</p>
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.4em] text-white font-bold">{stat.label}</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gold/60 font-medium italic">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section id="beneficios" className="py-24 bg-white text-dark">
          <Benefits />
        </section>

        {/* Sin imagen excedente entre beneficios y nosotros */}
        <section id="nosotros" className="py-24 bg-[#F9F9F9]">
          <About />
        </section>

        <section id="servicios" className="py-32 bg-premium">
          <Services />
        </section>

        <section id="productos" className="py-32 bg-dark relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
          <div className="container mx-auto px-6">
            <div className="text-center mb-24 reveal">
              <h3 className="text-gold uppercase tracking-[0.6em] text-[10px] font-black mb-6 italic">Signature Collection</h3>
              <h2 className="font-serif text-5xl md:text-7xl uppercase tracking-tighter text-white">Nuestra <span className="text-gold">Curaduría</span></h2>
              <p className="text-gray-500 mt-6 tracking-[0.2em] uppercase text-xs font-light">Materiales seleccionados para arquitecturas de alto nivel</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {listones.concat(laminas).map(product => (
                <div key={product.id} className="group luxury-border bg-premium/20 p-10 hover:bg-premium/50 transition-all duration-700 text-center relative reveal">
                  <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-700 m-2"></div>
                  <Shield size={24} className="mx-auto mb-8 text-gold/20 group-hover:text-gold transition-colors duration-700" strokeWidth={1} />
                  <h4 className="text-white font-serif text-3xl uppercase tracking-tighter mb-4">{product.name}</h4>
                  <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="h-px w-8 bg-gold/30"></div>
                    <p className="text-gold font-bold text-2xl tracking-widest">${product.price}</p>
                    <div className="h-px w-8 bg-gold/30"></div>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-white text-dark hover:bg-gold hover:text-white text-[11px] uppercase tracking-[0.3em] font-black py-6 transition-all duration-500 shadow-2xl relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <ShoppingBag size={14} />
                      Solicitar Muestra
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="py-32 bg-white">
          <Contact />
        </section>
      </main>

      <Footer />

      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full max-w-xl bg-premium h-full flex flex-col shadow-[0_0_100px_rgba(0,0,0,1)] border-l luxury-border animate-in slide-in-from-right duration-500">
            <div className="p-12 border-b luxury-border flex justify-between items-center">
              <div>
                <h3 className="font-serif text-4xl uppercase tracking-tighter">Resumen de Selección</h3>
                <p className="text-gold uppercase tracking-[0.3em] text-[10px] mt-2 font-bold">Asesoría Personalizada Estilo PVC</p>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-gold transition-colors p-2">
                <X size={32} strokeWidth={1} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="text-center py-32 opacity-20">
                  <ShoppingBag size={80} className="mx-auto mb-8" strokeWidth={0.5} />
                  <p className="uppercase tracking-[0.5em] text-xs font-bold">Su lista de deseos está vacía</p>
                </div>
              ) : (
                <div className="space-y-12">
                  {cart.map(item => (
                    <div key={item.product.id} className="flex justify-between items-center group">
                      <div className="flex-1">
                        <h4 className="text-lg font-serif uppercase tracking-widest text-white mb-2 group-hover:text-gold transition-colors">{item.product.name}</h4>
                        <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-gray-500 font-bold">
                          <span>Cantidad: {item.qty}</span>
                          <span className="h-4 w-px bg-white/10"></span>
                          <span className="text-gold">${(item.product.price * item.qty).toFixed(2)}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-700 hover:text-red-500 transition-colors ml-8"
                      >
                        <Trash2 size={20} strokeWidth={1} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-12 bg-dark/50 border-t luxury-border space-y-10">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-gray-400 uppercase tracking-[0.5em] font-bold">Inversión Estimada</span>
                  <span className="text-5xl text-white font-serif italic font-black gold-text-glow">${total.toFixed(2)}</span>
                </div>
                <a 
                  href={`https://wa.me/50374245711?text=Deseo%20una%20cotización%20premium%20por:%20${cart.map(i => `${i.qty}%20x%20${i.product.name}`).join(',%20')}.%20Inversión%20Total:%20$${total.toFixed(2)}`}
                  target="_blank"
                  className="w-full bg-gold hover:bg-white text-dark font-black uppercase tracking-[0.5em] text-[12px] py-8 flex items-center justify-center transition-all duration-700 group shadow-2xl"
                >
                  Confirmar con mi Asesor
                  <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={20} />
                </a>
                <p className="text-[10px] text-center text-gray-600 uppercase tracking-widest font-bold">Atención prioritaria 24/7 para clientes premium</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
