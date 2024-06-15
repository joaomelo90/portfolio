import React from "react";
import Curriculum from "../../assets/pdf/dev_joao_melo.pdf"

import Main from "../main"

function About() {
    return (
        <div className=" w-screen h-screen bg-azulEscuro overflow-y-auto flex flex-col sm:overflow-x-hidden">

            <Main />

            <div className=" h-screen">
                <div className="flex justify-center py-20 sm:py-1 2xl:py-20">
                    <h1 className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-5xl font-black w-full text-center leading-normal m-0 p-0">João Melo</h1>
                </div>

                <div className=" w-full flex items-center justify-center">
                    <p className=" text-center px-4 text-zinc-200 leading-relaxed sm:w-8/12 ">
                        Olá, eu sou João Melo, tenho 33 anos e sou de São Bernardo do Campo. Estou cursando o segundo semestre de Análise e Desenvolvimento de Sistemas e complementando minha formação com cursos na Udemy e DevClub.
                        <br />
                        <br />
                        Atualmente, trabalho como motorista de aplicativo e realizo projetos pontuais como desenvolvedor web. Esses projetos me aproximam do mundo real da tecnologia, e me proporcionam uma rica experiência prática. Trabalho com HTML, CSS, TailwindCSS, React e JavaScript. No DevClub, formação Fullstack, aprendi ferramentas de back-end como Node.js, MongoDB, PostgreSQL, Docker e testes com Insomnia. Também tenho conhecimentos em TypeScript.
                        <br />
                        <br />
                        Estou em busca de novas oportunidades no mercado. Se você gostou do meu portfólio e quer conversar sobre trabalhos, projetos ou tirar dúvidas, estou à disposição! Basta clicar no ícone do WhatsApp. Ah, também deixarei meu currículo para você conferir
                        <br />
                        <br />

                        <span className=" text-3xl text-center">
                            Até logo!
                        </span>

                    </p>
                </div>

                <a href={Curriculum} download="dev_Front_end_joaoMelo">
                    <div className=" flex  flex-col items-center justify-center py-9 ">

                        <button className=" relative overflow-hidden rounded-lg px-20 py-6" >

                            <span className=" absolute inset-px z-10 flex items-center justify-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-300">   Curriculum </span>

                            <span aria-hidden className=" absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400" />
                        </button>

                    </div>

                </a>
            </div>
        </div>
    )
}

export default About