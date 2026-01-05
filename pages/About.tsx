import React from 'react';
import { MapPin } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="pt-32 min-h-screen bg-white fade-in">

            {/* Story Section */}
            <section className="container mx-auto px-6 mb-32">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2 relative">
                        <div className="absolute top-4 left-4 w-full h-full border-2 border-primary-gold/30 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
                        <img
                            src="/assets/doctor.png"
                            alt="Dra. Adriana Vinhal"
                            className="rounded-lg shadow-2xl w-full object-cover grayscale-0"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <span className="text-primary-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Manifesto</span>
                        <h1 className="text-5xl font-serif text-secondary-petrol mb-8">Tradição & <span className="italic">Vanguarda</span></h1>
                        <div className="space-y-6 text-neutral-medium leading-relaxed font-light text-lg text-justify">
                            <p>
                                O <strong className="text-secondary-petrol">Instituto Acadêmico Vinhal (IAV)</strong> nasceu de uma inquietação: a necessidade de elevar o padrão da Harmonização Orofacial no Brasil. Situado no coração de Balneário Camboriú, somos um enclave de excelência que une clínica e academia.
                            </p>
                            <p>
                                Sob a direção clínica da Dra. Vinhal, o instituto rejeita as "padronizações de beleza". Acreditamos que a verdadeira harmonização é aquela que sussurra, não a que grita. Nossos resultados são planejados milimetricamente para respeitar a anatomia e a identidade de cada paciente.
                            </p>
                            <p>
                                Como centro de ensino, formamos a elite da HOF. Nossos alunos não aprendem apenas técnicas de injeção; aprendem a diagnosticar, a planejar e a entregar arte através da ciência.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Stripe */}
            <section className="bg-secondary-warmGray py-24">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-300">
                        <div className="px-6 pt-6 md:pt-0">
                            <h3 className="text-2xl font-serif text-secondary-petrol mb-4">Ética Inegociável</h3>
                            <p className="font-light text-neutral-medium">A saúde do paciente é soberana. Utilizamos exclusivamente produtos com FDA e ANVISA, mantendo rigorosos protocolos de biossegurança.</p>
                        </div>
                        <div className="px-6 pt-6 md:pt-0">
                            <h3 className="text-2xl font-serif text-secondary-petrol mb-4">Beleza Silenciosa</h3>
                            <p className="font-light text-neutral-medium">Defendemos o "Quiet Beauty". Procedimentos que rejuvenescem e embelezam sem deixar rastros artificiais.</p>
                        </div>
                        <div className="px-6 pt-6 md:pt-0">
                            <h3 className="text-2xl font-serif text-secondary-petrol mb-4">Inovação Científica</h3>
                            <p className="font-light text-neutral-medium">Estamos na fronteira do conhecimento, trazendo para BC as tecnologias e técnicas mais recentes dos congressos mundiais.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location / Clinic Space */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="flex items-center justify-center gap-2 text-primary-gold uppercase tracking-[0.2em] text-xs font-bold mb-4">
                            <MapPin className="w-4 h-4" /> Balneário Camboriú
                        </span>
                        <h2 className="text-4xl font-serif text-secondary-petrol mb-6">Um refúgio de bem-estar</h2>
                        <p className="text-neutral-medium max-w-2xl mx-auto font-light">
                            Nosso espaço foi arquitetado para transcender o ambiente clínico tradicional.
                            Privacidade, conforto sensorial e tecnologia de ponta esperam por você.
                        </p>
                    </div>

                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600"
                            alt="Clínica Interior Luxo"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-secondary-petrol/30"></div>
                        <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur p-8 max-w-sm rounded-sm hidden md:block">
                            <h4 className="font-serif text-xl text-secondary-petrol mb-2">Visite-nos</h4>
                            <p className="text-neutral-dark font-light text-sm">Av. Atlântica, 1234<br />Balneário Camboriú, SC</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;