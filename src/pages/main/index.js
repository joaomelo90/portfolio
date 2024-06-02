import React, { useState } from "react";
import {Link} from "react-router-dom"
import jp from "../../assets/jp.jpg"

import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineUser, AiTwotoneTool, AiTwotoneMail, AiOutlineHome } from "react-icons/ai";
import { FcMenu } from "react-icons/fc"



function Main() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (

    <div >

      <div className="flex h-full  fixed bg-marinho z-50 sm:w-48">

        <aside
          className="hidden sm:flex w-full max-w-[200px] min-h-screen relative bg-marinho flex-col px-2 py-5"
        >
          <div className=" fixed ">
            <div className=" flex justify-center items-center flex-col">

              <img src={jp}
                alt="joão melo"
                className=" w-28 h-28 rounded-full overflow-hidden border-4 border-zinc-400"
              />

              <h1 className=" text-white ml-5 text-xl font-bold mt-5">Dev João Melo</h1>
              <div className=" flex p-3 gap-7">
              <a href="https://github.com/joaomelo90" target="_blank" rel="noopener noreferrer"> 
                < AiOutlineGithub className=" bg-white rounded-full" />
            </a>
            <a href=" https://www.linkedin.com/in/joao-paulo-moreira-melo/" target="_blank" rel="noopener noreferrer"> 
                < AiOutlineLinkedin className=" bg-white rounded-full " />
                </a>
                <a href="https://wa.me/+5511958083366" target="_blank" text= "Olá, gostei do seu portfólio! Gostaria de entrar em contato com você."> 
                < AiOutlineWhatsApp className=" bg-white rounded-full" />
                </a>

              </div>
            </div>

            <nav className="flex flex-col mt-8 w-full gap-5">
              <Link 
                to="/"
                className="flex items-center gap-2 text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
              >
                <AiOutlineHome />
                Inicio
              </Link>

              <Link
                to="/sobre"
                className="flex items-center gap-2 text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
              >
                < AiOutlineUser />
                Sobre
              </Link>

              <Link
                to="/portfolio"
                className="flex items-center gap-2 text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
              >
                < AiTwotoneTool />
                Portifólio
              </Link>

              <Link
                to="/contatos"
                className="flex items-center gap-2 text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
              >
                <AiTwotoneMail />
                Contatos
              </Link>
            </nav>
          </div>
        </aside>

        <main className="  w-full flex flex-col pb-4">

          <div id="menu" className={`absolute z-50 ${menuOpen ? 'flex' : 'hidden'} flex-col px-3 py-2  bg-marinho text-white shadow-xl`}>

            <button onClick={closeMenu} className=" text-3xl text-bold mt-4">X</button>
            <nav className=" flex flex-col mt-8 gap-5 w-full ">
              <Link
                to="/"
                className="flex items-center gap-2 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
              >
                <AiOutlineHome />
                Inicio
              </Link>

              <Link
                to="/sobre"
                className="flex items-center gap-2 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
              >
                < AiOutlineUser />
                Sobre
              </Link>

              <Link
                to="/portfolio"
                className="flex items-center gap-2 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
              >
                < AiTwotoneTool />
                Portifólio
              </Link>

              <Link
                to="/contatos"
                className="flex items-center gap-2 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
              >
                <AiTwotoneMail />
                Contatos
              </Link>
            </nav>

          </div>

          <header className="sm:hidden bg-marinho w-full py-5 px-3 flex flex-row items-center justify-between fixed">

          <button id="btn-open" onClick={closeMenu} className=" flex justify-center ">
              <FcMenu className=" w-7 h-7 " />
            </button>

            <div >
              <h1 className=" text-white text-xs font-bold whitespace-nowrap">Dev João Melo</h1>

            </div>

            <div className="flex gap-3 ml-20 ">
            <a href="https://github.com/joaomelo90" target="_blank" rel="noopener noreferrer"> 
              < AiOutlineGithub className=" w-6 h-6 bg-slate-100 rounded-full" />
             </a>

             <a href=" https://www.linkedin.com/in/joao-paulo-moreira-melo/" target="_blank" rel="noopener noreferrer"> 
              < AiOutlineLinkedin className=" w-6 h-6 bg-slate-100 rounded-full " />
              </a>

              <a href="https://wa.me/+5511958083366" target="_blank" text= "Olá, gostei do seu portfólio! Gostaria de entrar em contato com você."> 
              < AiOutlineWhatsApp className=" w-6 h-6 bg-slate-100 rounded-full" />
              </a>
            </div>

      
          </header>
          
        </main>

      </div>


    </div>
  );
}

export default Main;
