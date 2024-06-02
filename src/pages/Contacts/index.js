import React, { useState } from "react";
import emailjs from "@emailjs/browser"

import Whats from "../../assets/whats.gif"
import Linkedin from "../../assets/linkedin.gif"
import Git from "../../assets/git.gif"

import Main from "../main"


function Contacts() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos",)
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_8ylut5h", "template_jbubzce", templateParams, "LdZxz7WEsAGc3vQVN")
      .then((response) => {
        console.log("Email enviado", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
      }, (err) => {
        console.log("ERRO: ", err)
      })

  }

  return (
    <div className=" h-screen w-screen flex bg-azulEscuro ">

      <Main />

      <div className="flex flex-col justify-center items-center">

        <h1 className=" mb-5 text-white font-bold ">Contato</h1>

        <form className=" w-[90%] sm:max-w-2xl sm:w-full flex flex-col" onSubmit={sendEmail}>
          <input
            className=" mb-3 h-9 p-2  rounded border py-2"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className=" mb-3 h-9 p-2 rounded border py-2"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className=" mb-4 rounded border p-2 h-24 resize-none"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className=" flex-wrap-reverse rounded border-none cursor-pointer bg-indigo-950 transition text-white hover:bg-indigo-700 hover:scale-105" type="submit" value="Enviar" />
        </form>

        <div className=" w-5/6 flex justify-center gap-10 mt-10 sm:w-1/2 ">

          <a href="https://wa.me/+5511958083366" target="_blank" text="Olá, gostei do seu portfólio! Gostaria de entrar em contato com você.">
            <img
              src={Whats}
              alt="whatsapp"
              className=" w-screen" />
          </a>

          <a href=" https://www.linkedin.com/in/joao-paulo-moreira-melo/" target="_blank" rel="noopener noreferrer">
            <img
              src={Linkedin}
              alt="linkedin"
              className=" w-screen" />

          </a>

          <a href="https://github.com/joaomelo90" target="_blank" rel="noopener noreferrer">
            <img
              src={Git}
              alt="github"
              className=" w-screen rounded-full" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contacts