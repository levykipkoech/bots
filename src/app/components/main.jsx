import React from "react";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {AiOutlineMail} from "react-icons/ai"

const Main = () =>{
    return(
       <div className="w-full h-screen text-center">
        <div className="max-w-[1240px w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <p className="uppercase text-sm tracking-widest text-gray-600">LET'S BUILD SOMETHING</p>
                <h1 className="py-4 text-gray-700">Hey I'm <span className="text-[#5651e5]">Levy</span></h1>
                <h1 className="py-2 text-gray-700">A software developer</h1>
                <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                    remember to add some text
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaLinkedinIn/>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaGithub/>
                    </div>
                    
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                        <AiOutlineMail/>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                        <BsFillPersonLinesFill/>
                    </div>

                </div>
            </div>
        </div>
       </div>
    )
}


export default Main;