export default function FeaturedCoursesApp() {
    type Course = {
        id: number;
        title: string;
        description: string;
        price: number;
        image: string;
        category: string;
    };

    const featuredCourses: Course[] = [
        {
            id: 1,
            title: "Desenvolvimento Web Full Stack",
            description: "Aprenda a criar aplicações web completas com as tecnologias mais modernas do mercado.",
            price: 43.599,
            image: "/api/placeholder/300/200",
            category: "Programação"
        },
        {
            id: 2,
            title: "Data Science para Iniciantes",
            description: "Domine os fundamentos da ciência de dados e machine learning com Python.",
            price: 349.000,
            image: "/api/placeholder/300/200",
            category: "Data Science"
        },
        {
            id: 3,
            title: "UX/UI Design Moderno",
            description: "Crie interfaces incríveis e experiências de usuário memoráveis.",
            price: 279.000,
            image: "/api/placeholder/300/200",
            category: "Design"
        }
    ];
    return (
        <>
            <section id="cursos" className="section bg-black">
                <div className="container">
                    <h2 className="section-title">Cursos em Destaque</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredCourses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-dark-gray rounded-xl overflow-hidden border border-gray-700 hover:transform hover:scale-105 transition-all duration-300"
                            >
                                <div className="h-48 bg-gray-700 flex items-center justify-center text-primary-green text-xl font-bold">
                                    [Imagem do Curso]
                                </div>
                                <div className="p-6">
                                    <span className="text-primary-green text-sm font-bold uppercase tracking-wide">
                                        {course.category}
                                    </span>
                                    <h3 className="text-white text-xl font-bold mt-2 mb-3 line-clamp-2">
                                        {course.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4 line-clamp-3">
                                        {course.description}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-primary-green text-2xl font-bold">
                                            AOA {course.price},00
                                        </span>
                                        <button className="btn text-sm px-6 py-2">
                                            Ver Curso
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a href="#plataforma" className="btn text-lg px-12 py-4">
                            Ver Todos os Cursos
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};
