export default function AboutApp() {
    return (
        <>
            <section id="sobre" className="section bg-dark-gray">
                <div className="container">
                    <h2 className="section-title">Sobre Nós</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl text-primary-green font-bold mb-6">
                                Quem Somos
                            </h3>
                            <p className="text-lg text-white mb-4 leading-relaxed">
                                A SodaCode é uma plataforma de ensino digital comprometida em oferecer
                                cursos de alta qualidade nas mais diversas áreas profissionais.
                                Nossa missão é democratizar o acesso à educação de qualidade.
                            </p>
                            <p className="text-lg text-white mb-6 leading-relaxed">
                                Com uma metodologia prática e focada no mercado de trabalho,
                                nossos cursos são desenvolvidos por profissionais experientes
                                que estão no dia a dia das suas respectivas áreas.
                            </p>
                            <ul className="space-y-3 mt-8">
                                {[
                                    'Cursos atualizados constantemente',
                                    'Professores especialistas',
                                    'Acesso vitalício aos cursos',
                                    'Suporte individualizado'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center space-x-3 text-white text-lg">
                                        <span className="text-primary-green text-xl">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gray-800 p-8 rounded-xl border-2 border-primary- green">
                            <h4 className="text-2xl text-primary-green font-bold mb-4 text-center">
                                Nossa Metodologia
                            </h4>
                            <p className="text-white text-lg leading-relaxed">
                                Combinamos teoria e prática em vídeo-aulas dinâmicas, com projetos
                                reais que preparam você para os desafios do mercado de trabalho.
                                Aprenda com cases reais e desenvolva projetos práticos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
