export default function HeroApp() {
    return (
        <>
            <section id="início" className="bg-gradient-to-br from-black to-gray-900 py-32">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-green mb-6">
                        Transforme sua Carreira com a SodaCode
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                        Cursos profissionais de alta qualidade para impulsionar seu desenvolvimento
                        nas mais diversas áreas do mercado digital.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#plataforma" className="btn text-lg px-10 py-4">
                            Começar Agora
                        </a>
                        <a href="#cursos" className="btn-outline text-lg px-10 py-4">
                            Ver Cursos
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};
