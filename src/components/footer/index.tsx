import dayjs from "dayjs";

export default function FooterApp() {
    return (
        <>
            <footer className="bg-black py-12 border-t-2 border-primary-green">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-primary-green text-2xl font-bold mb-4">
                                SodaCode
                            </h3>
                            <p className="text-white leading-relaxed">
                                Plataforma de ensino digital comprometida com sua evolução profissional
                                e sucesso na carreira.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-primary-green text-lg font-semibold mb-4">
                                Links Rápidos
                            </h4>
                            <ul className="space-y-2">
                                {['Início', 'Sobre', 'Cursos', 'Contactos'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            className="text-white hover:text-primary-green transition-colors duration-300 block py-1"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-primary-green text-lg font-semibold mb-4">
                                Cursos
                            </h4>
                            <ul className="space-y-2 text-white">
                                <li><a href="#" className="hover:text-primary-green transition-colors">Programação</a></li>
                                <li><a href="#" className="hover:text-primary-green transition-colors">Design</a></li>
                                <li><a href="#" className="hover:text-primary-green transition-colors">Marketing</a></li>
                                <li><a href="#" className="hover:text-primary-green transition-colors">Data Science</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-primary-green text-lg font-semibold mb-4">
                                Redes Sociais
                            </h4>
                            <div className="flex space-x-4">
                                {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="text-white hover:text-primary-green transition-colors duration-300"
                                    >
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-8 text-center">
                        <p className="text-white opacity-70">
                            &copy; {dayjs().year()} SodaCode. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
