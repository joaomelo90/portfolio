import React from "react";
import {Animated} from './styled'
import Avatar from '../../assets/jpsfnova.png'

import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill , RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";

import Main from "../main"

function Start(){
    return (
        
       <div className=" h-screen w-screen bg-azulEscuro flex ">
        
        <Main/>

        <div className=" h-screen w-screen flex flex-col items-center justify-center">
        
        <div className=" flex items-center justify-center">
            <img src={Avatar}
             alt="avatar"
             className=" w-64 rounded-3xl opacity-95 transform transition-transform duration-300 animate-pulse  "
             />
        </div>
        <div className=" flex items-center justify-center flex-col">
            <h1 className=" text-white py-4 text-3xl font-bold tracking-[0.80rem] ">João Melo</h1>
            <Animated>Front-end developer</Animated>
        </div>

        <div className=" w-60 py-4 flex gap-4 items-center justify-center">

        <TiHtml5 className=" w-24 h-24 text-html animate-float1"/>
        <FaCss3Alt className=" w-20 h-20 text-css animate-float2"/>
        <RiJavascriptFill className=" w-20 h-20 text-js animate-float3"/>
        <RiReactjsLine className=" w-20 h-20 text-rc animate-float4"/>
        <RiTailwindCssLine className=" w-20 h-20 text-tw animate-float5"/>
        </div>
        </div>

       </div>

    )
}

export default Start




