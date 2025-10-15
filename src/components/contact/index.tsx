import { useState } from "react";

export default function ContactApp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Formulário enviado:', formData);
        alert('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
    };
    return (
        <>
            <section id="contactos" className="section bg-dark-gray">
                <div className="container">
                    <h2 className="section-title">Contactos</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl text-primary-green font-bold mb-6">
                                Entre em Contacto
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Seu nome"
                                        required
                                        className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-green transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Seu email"
                                        required
                                        className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-green transition-colors"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Sua mensagem"
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-green transition-colors resize-vertical"
                                    />
                                </div>
                                <button type="submit" className="btn w-full text-lg py-4">
                                    Enviar Mensagem
                                </button>
                            </form>
                        </div>

                        <div>
                            <h3 className="text-2xl text-primary-green font-bold mb-6">
                                Informações de Contacto
                            </h3>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-primary-green text-lg font-semibold mb-2">Email</h4>
                                    <p className="text-white text-lg">contacto@sodacode.com</p>
                                </div>
                                <div>
                                    <h4 className="text-primary-green text-lg font-semibold mb-2">Telefone</h4>
                                    <p className="text-white text-lg">+244 XXX XXX XXX</p>
                                </div>
                                <div>
                                    <h4 className="text-primary-green text-lg font-semibold mb-2">Endereço</h4>
                                    <p className="text-white text-lg">Angola| Luanda | Vila Alice</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg mt-6">
                                    <h4 className="text-primary-green text-lg font-semibold mb-3">Horário de Atendimento</h4>
                                    <p className="text-white">Segunda a Sexta: 9h - 18h</p>
                                    <p className="text-white">Sábado: 9h - 13h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
