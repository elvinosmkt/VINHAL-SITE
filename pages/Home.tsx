import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, GraduationCap, Sparkles, ChevronRight } from 'lucide-react';
import { TREATMENTS, WHATSAPP_NUMBER } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=2070"
            alt="Clínica Estética Luxo"
            className="w-full h-full object-cover scale-105 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-secondary-petrol/40 to-black/60 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-6 z-10 text-center text-white relative">
          <span className="block text-primary-gold uppercase tracking-[0.4em] text-xs md:text-sm font-bold mb-6 animate-slideUp">
            Balneário Camboriú • SC
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-8 leading-tight animate-slideUp delay-100">
            Instituto Acadêmico <br /><span className="italic text-primary-gold">Vinhal</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto tracking-wide text-white/90 leading-relaxed animate-slideUp delay-200">
            A união perfeita entre procedimentos estéticos de alta performance e educação superior em Harmonização Orofacial.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center animate-slideUp delay-300">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="bg-primary-gold text-secondary-petrol font-semibold py-4 px-10 rounded-sm hover:bg-white transition-all duration-300 uppercase tracking-widest text-xs transform hover:-translate-y-1 shadow-lg"
            >
              Agendar Avaliação
            </a>
            <Link
              to="/cursos"
              className="border border-white/50 backdrop-blur-sm text-white font-semibold py-4 px-10 rounded-sm hover:bg-white hover:text-secondary-petrol transition-all duration-300 uppercase tracking-widest text-xs"
            >
              Sou Profissional
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </section>

      {/* Persona Selection (Patient vs Professional) */}
      <section className="relative z-20 -mt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">

            {/* Patient Card */}
            <Link to="/tratamentos" className="group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800" alt="Paciente" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>

              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary-gold/20 p-2 rounded-full backdrop-blur-md">
                    <Sparkles className="w-5 h-5 text-primary-gold" />
                  </div>
                  <span className="uppercase tracking-[0.2em] text-xs font-bold text-primary-gold">Área do Paciente</span>
                </div>
                <h2 className="text-4xl font-serif text-white mb-4">Harmonização & <br />Estética Avançada</h2>
                <p className="text-white/80 mb-8 font-light text-sm leading-relaxed max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Descubra o protocolo BioLift, preenchimentos de alta definição e tecnologias para rejuvenescimento natural.
                </p>
                <div className="flex items-center gap-3 text-white font-medium uppercase tracking-widest text-xs border-b border-primary-gold/50 pb-1 w-fit group-hover:border-primary-gold transition-all">
                  Conhecer Tratamentos <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Professional Card */}
            <Link to="/cursos" className="group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" alt="Curso" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-petrol/95 via-secondary-petrol/40 to-transparent opacity-90 transition-opacity duration-500"></div>

              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/10 p-2 rounded-full backdrop-blur-md">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <span className="uppercase tracking-[0.2em] text-xs font-bold text-white">Área Profissional</span>
                </div>
                <h2 className="text-4xl font-serif text-white mb-4">Instituto de <br />Cursos & Mentorias</h2>
                <p className="text-white/80 mb-8 font-light text-sm leading-relaxed max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Eleve sua carreira com cursos Hands-on, residências e pós-graduação reconhecida pelo MEC.
                </p>
                <div className="flex items-center gap-3 text-white font-medium uppercase tracking-widest text-xs border-b border-white/50 pb-1 w-fit group-hover:border-white transition-all">
                  Ver Cursos Disponíveis <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Highlights - Premium Style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-primary-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Diferenciais IAV</span>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary-petrol mb-6">Por que escolher o <span className="italic">Instituto Vinhal?</span></h2>
            <div className="w-16 h-px bg-primary-gold mx-auto mb-8"></div>
            <p className="text-neutral-medium font-light leading-relaxed">
              Nossa filosofia une ciência, arte e tecnologia. Não buscamos transformações exageradas,
              mas sim o refinamento e o resgate da autoestima através de resultados elegantes e naturais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 border border-gray-100 rounded-xl hover:shadow-2xl hover:border-transparent transition-all duration-500 group">
              <div className="w-16 h-16 bg-secondary-warmGray rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary-gold/10 transition-colors">
                <Star className="w-6 h-6 text-secondary-petrol group-hover:text-primary-gold transition-colors" />
              </div>
              <h3 className="font-serif text-2xl text-secondary-petrol mb-4">Naturalidade Extrema</h3>
              <p className="text-neutral-medium font-light text-sm leading-relaxed">
                Técnicas exclusivas de miomodulação e preenchimento que respeitam a anatomia e a mímica facial. Sem exageros.
              </p>
            </div>

            <div className="text-center p-8 border border-gray-100 rounded-xl hover:shadow-2xl hover:border-transparent transition-all duration-500 group">
              <div className="w-16 h-16 bg-secondary-warmGray rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary-gold/10 transition-colors">
                <GraduationCap className="w-6 h-6 text-secondary-petrol group-hover:text-primary-gold transition-colors" />
              </div>
              <h3 className="font-serif text-2xl text-secondary-petrol mb-4">Autoridade Acadêmica</h3>
              <p className="text-neutral-medium font-light text-sm leading-relaxed">
                Não somos apenas uma clínica, somos uma escola. Nossos profissionais são professores que formam outros especialistas.
              </p>
            </div>

            <div className="text-center p-8 border border-gray-100 rounded-xl hover:shadow-2xl hover:border-transparent transition-all duration-500 group">
              <div className="w-16 h-16 bg-secondary-warmGray rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary-gold/10 transition-colors">
                <Sparkles className="w-6 h-6 text-secondary-petrol group-hover:text-primary-gold transition-colors" />
              </div>
              <h3 className="font-serif text-2xl text-secondary-petrol mb-4">Experiência Premium</h3>
              <p className="text-neutral-medium font-light text-sm leading-relaxed">
                Do aroma da recepção ao pós-atendimento personalizado. Tudo em Balneário Camboriú foi pensado para seu conforto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-24 bg-secondary-warmGray/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-secondary-petrol uppercase tracking-[0.2em] text-xs font-bold mb-2 block">Menu de Procedimentos</span>
              <h2 className="text-4xl font-serif text-secondary-petrol">Tratamentos em Destaque</h2>
            </div>
            <Link to="/tratamentos" className="hidden md:flex items-center gap-3 text-secondary-petrol font-medium uppercase tracking-widest text-xs hover:text-primary-gold transition-colors">
              Menu Completo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TREATMENTS.slice(0, 3).map((treatment) => (
              <div key={treatment.id} className="bg-white group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="overflow-hidden h-72 relative">
                  <img src={treatment.imageUrl} alt={treatment.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full">
                    <span className="text-xs font-bold text-secondary-petrol uppercase tracking-wider">{treatment.category}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-secondary-petrol mb-3 group-hover:text-primary-gold transition-colors">{treatment.title}</h3>
                  <p className="text-neutral-medium font-light text-sm mb-6 line-clamp-2">{treatment.description}</p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                    <span className="text-secondary-petrol font-semibold">{treatment.price}</span>
                    <Link to="/tratamentos" className="text-primary-gold hover:text-secondary-petrol transition-colors text-sm font-medium uppercase tracking-wider">Ver Detalhes</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/tratamentos" className="inline-flex items-center gap-2 bg-secondary-petrol text-white py-3 px-8 rounded-full text-xs font-bold uppercase tracking-widest">
              Ver Todos <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Elegant */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1596472247752-7d9732e5f379?auto=format&fit=crop&q=80&w=2000" alt="Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-secondary-petrol/95"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Sua melhor versão começa aqui.</h2>
          <p className="text-white/70 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Agende uma avaliação personalizada com nossa equipe e descubra o poder de uma harmonização facial planejada exclusivamente para você.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-primary-gold text-secondary-petrol font-semibold py-4 px-12 rounded-sm hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl uppercase tracking-[0.2em] text-xs"
          >
            Iniciar Conversa no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;