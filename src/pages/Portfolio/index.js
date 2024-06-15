import React from "react";

import Node from "../../assets/node.jpg"
import Barber from "../../assets/barber02.jpg"
import House from "../../assets/house.jpg"
import Uber from "../../assets/1714264428267.jpg"
import Mackcar from "../../assets/mackCar.jpg"
import Piloto from "../../assets/piloto.jpg"

import Dinho from "../../assets/pdf/dinho.pdf"

import Main from "../main"

function Portfolio() {
    return (
        <div className=" h-screen min-h-screen  w-screen bg-azulEscuro flex">

            <Main/>

            <div className=" h-screen w-screen ">

            <div className="flex justify-center mt-20 sm:mt-5">
                <h1 className=" text-zinc-200 font-black w-full text-center text-5xl mb-5 md:mb-14 sm:ml-40">Portfólio</h1>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-azulEscuro sm:ml-48">

                <a
                    href="https://github.com/joaomelo90/code_burger_API_Final"
                    class="bg-zinc-200 p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-xl duration-300"
                >
                    <div>

                        <div class="group overflow-hidden rounded-lg">

                            <div class="absolute z-40 top-5 left-5">

                                <div class=" flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full ">
                                    <p class="font-medium text-sm">API Humbergueria</p>

                                </div>
                            </div>
                            <img
                                src={Node}
                                alt="node_backEnd"
                                class="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300 " />
                        </div>

                        <div class="w-full flex flex-col gap-1 my-2">
                            <h2 class="text-lg font-bold">Projeto Back-end API para Hamburgueria</h2>
                            <div>
                                <p class="text-gray-600 text-sm ">Desenvolvido com Node.js, JavaScript, Docker e PostgreSQL, este projeto conta com uma API robusta para gerenciamento de uma hamburgueria. Além disso, foram realizados testes utilizando o Insomnia para garantir a funcionalidade e a segurança das operações</p>

                            </div>
                        </div>
                    </div>

                    <div class="mt-auto">
                        <p class="my-1 font-bold text-indigo-500"> Ferramentas e Tecnologias:</p>
                        <span class="font-medium text-sm">Nodejs -</span>
                        <span class="font-medium text-sm">Javascript -</span>
                        <span class="font-medium text-sm">Insomnia -</span>
                        <span class="font-medium text-sm">PostgresSQL -</span>
                        <span class="font-medium text-sm">Docker </span>
                    </div>
                </a>

                <a
                    href="https://github.com/joaomelo90/Barbearia_Gui_Corts"
                    class="bg-zinc-200 p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-xl duration-300"
                >
                    <div>

                        <div class="group overflow-hidden rounded-lg">

                            <div class="absolute z-40 top-5 left-5">

                                <div class=" flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full ">
                                    <p class="font-medium text-sm"> Front-End</p>

                                </div>
                            </div>
                            <img
                                src={Barber}
                                alt="barbearia_gui_corts"
                                class="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300 " />
                        </div>

                        <div class="w-full flex flex-col gap-1 my-2">
                            <h2 class="text-lg font-bold">Projeto Pontual em Produção: Barbearia Gui Corts</h2>
                            <div>
                                <p class="text-gray-600 text-sm ">Este projeto foi desenvolvido com o objetivo de divulgar a Barbearia Gui Corts e atrair novos clientes. Utilizando tecnologias modernas, o site oferece uma experiência atraente e interativa para os usuários, com elementos animados que tornam a navegação mais agradável,com o objetivo de
                                    criar uma presença online impactante para a Barbearia Gui Corts, facilitando o acesso às informações essenciais e incentivando a captação de novos clientes.</p>

                            </div>
                        </div>
                    </div>

                    <div class="mt-auto">
                        <p class="my-1 font-bold text-indigo-500"> Ferramentas e Tecnologias:</p>
                        <span class="font-medium text-sm">HTML -</span>
                        <span class="font-medium text-sm">CSS -</span>
                        <span class="font-medium text-sm">React -</span>
                        <span class="font-medium text-sm">Javascript</span>

                    </div>
                </a>

                <a
                    href="https://github.com/joaomelo90/dev_house"
                    class="bg-zinc-200 p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-xl duration-300"
                >
                    <div>

                        <div class="group overflow-hidden rounded-lg">

                            <div class="absolute z-40 top-5 left-5">

                                <div class=" flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full ">
                                    <p class="font-medium text-sm"> Front-End</p>

                                </div>
                            </div>
                            <img
                                src={House}
                                alt="devhouse"
                                class="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300 " />
                        </div>

                        <div class="w-full flex flex-col gap-1 my-2">
                            <h2 class="text-lg font-bold">
                                Projeto Landing Page DevHouse com TailwindCSS</h2>
                            <div>
                                <p class="text-gray-600 text-sm ">Este projeto, intitulado Landing Page devHouse, foi desenvolvido com o intuito de aprimorar habilidades em TailwindCSS, como parte de um curso de estudos na Udemy,com o Objetivo de
                                    criar uma landing page moderna e responsiva utilizando TailwindCSS, visando melhorar o conhecimento e a aplicação prática dessa ferramenta.
                                    Este projeto não apenas cumpre o objetivo de fortalecer habilidades técnicas, mas também contribui para a construção de um portfólio profissional atraente e funcional. </p>

                            </div>
                        </div>
                    </div>

                    <div class="mt-auto">
                        <p class="my-1 font-bold text-indigo-500"> Ferramentas e Tecnologias:</p>
                        <span class="font-medium text-sm">HTML -</span>
                        <span class="font-medium text-sm">Tailwindcss -</span>
                        <span class="font-medium text-sm">Javascript</span>

                    </div>
                </a>

                <a
                    href="https://github.com/joaomelo90/home_uber"
                    class="bg-zinc-200 p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-xl duration-300"
                >
                    <div>

                        <div class="group overflow-hidden rounded-lg">

                            <div class="absolute z-40 top-5 left-5">

                                <div class=" flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full ">
                                    <p class="font-medium text-sm"> Front-End</p>

                                </div>
                            </div>
                            <img
                                src={Uber}
                                alt="uber"
                                class="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300 " />
                        </div>

                        <div class="w-full flex flex-col gap-1 my-2">
                            <h2 class="text-lg font-bold">
                                Projeto Landing Page  Uber com TailwindCSS</h2>
                            <div>
                                <p class="text-gray-600 text-sm ">Este projeto foi desenvolvido como uma landing page da Uber, com o objetivo de aprimorar habilidades em TailwindCSS. Realizado como parte de um curso de estudos na Udemy, este projeto visa oferecer uma experiência prática na criação de interfaces modernas e responsivas, a landing page serve como um exercício prático para aplicar os conceitos aprendidos no curso, proporcionando uma experiência de aprendizado e a construção de um portfólio sólido. </p>

                            </div>
                        </div>
                    </div>

                    <div class="mt-auto">
                        <p class="my-1 font-bold text-indigo-500"> Ferramentas e Tecnologias:</p>
                        <span class="font-medium text-sm">HTML -</span>
                        <span class="font-medium text-sm">Tailwindcss </span>


                    </div>
                </a>

                <a
                    href="https://novo-mack-car.vercel.app/"
                    class="bg-zinc-200 p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-xl duration-300"
                >
                    <div>

                        <div class="group overflow-hidden rounded-lg">

                            <div class="absolute z-40 top-5 left-5">

                                <div class=" flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full ">
                                    <p class="font-medium text-sm"> Front-End</p>

                                </div>
                            </div>
                            <img
                                src={Mackcar}
                                alt="mackcar"
                                class="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300 " />
                        </div>

                        <div class="w-full flex flex-col gap-1 my-2">
                            <h2 class="text-lg font-bold">

                                Projeto Pontual em Produção: Oficina Mecânica Mack Car</h2>
                            <div>
                                <p class="text-gray-600 text-sm ">Projeto pontual para a Oficina Mecânica Mack Car com o objetivo claro de divulgar seus serviços e atrair novos clientes. Utilizando uma combinação de tecnologias modernas, incluindo HTML, CSS, React e JavaScript, uma plataforma digital dinâmica e interativa.

                                    Além da presença online, ouve uma edição de foto personalizada utilizando o PhotoScape. Esta edição inclui um carrossel de serviços que a oficina oferece, apresentando de forma atraente e informativa. Também  foi integrado a localização da oficina em um mapa, facilitando para os clientes encontrar o local. </p>

                            </div>
                        </div>
                    </div>

                    <div class="mt-auto">
                        <p class="my-1 font-bold text-indigo-500"> Ferramentas e Tecnologias:</p>
                        <span class="font-medium text-sm">HTML -</span>
                        <span class="font-medium text-sm">CSS - </span>
                        <span class="font-medium text-sm">React - </span>
                        <span class="font-medium text-sm">Javascript -</span>
                        <span class="font-medium text-sm">PhotoScape</span>


                    </div>
                </a>

                <a
                    href={Dinho} download="Dinho sena portfólio"
                    class="bg-zinc-200 p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-xl duration-300"
                >
                    <div>

                        <div class="group overflow-hidden rounded-lg">

                            <div class="absolute z-40 top-5 left-5">

                                <div class=" flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full ">
                                    <p class="font-medium text-sm"> Portifólio - PowerPoint</p>

                                </div>
                            </div>
                            <img
                                src={Piloto}
                                alt="piloto dinho sena"
                                class="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300 " />
                        </div>

                        <div class="w-full flex flex-col gap-1 my-2">
                            <h2 class="text-lg font-bold">

                                Projeto Pontual: Portfólio do Piloto de Kart Dinho Sena</h2>
                            <div>
                                <p class="text-gray-600 text-sm "> Projeto pontual focado na criação de um portfólio para apresentação e divulgação do talentoso piloto de kart Dinho Sena. Com o objetivo principal de atrair patrocínio e apoio para sua carreira, utilizamos uma combinação de montagens de fotos no PhotoScape e criação de apresentações no PowerPoint para desenvolver um portfólio completo e impactante. Este projeto não apenas destaca o talento e o potencial do piloto Dinho Sena, mas também serve como uma poderosa ferramenta de marketing e promoção para impulsionar sua carreira e contribuir para o crescimento e desenvolvimento do esporte do kartismo. </p>

                            </div>
                        </div>
                    </div>

                    <div class="mt-auto">
                        <p class="my-1 font-bold text-indigo-500"> Ferramentas e Tecnologias:</p>
                        <span class="font-medium text-sm">PowerPoint -</span>

                        <span class="font-medium text-sm">PhotoScape</span>


                    </div>
                </a>



            </div>



            </div>

        </div >
    )
}

export default Portfolio