export default function HeaderApp() {
    return (
        <>
            <header className="bg-black py-4 border-b-2 border-primary-green sticky top-0 z-50">
                <div className="container">
                    <nav className="flex justify-between items-center">
                        <div className="text-primary-green text-2xl md:text-3xl font-bold">
                            SodaCode
                        </div>

                        <ul className="flex items-center space-x-8">
                            {['Início', 'Sobre', 'Cursos', 'Contactos'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-white hover:text-primary-green transition-colors duration-300 hidden md:block"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href="#plataforma" className="btn text-sm md:text-base">
                                    Acessar Plataforma
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};
