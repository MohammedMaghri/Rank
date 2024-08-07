import React from "react";
import { useNavigate } from "react-router-dom";
import Starfield from 'react-starfield';
import me from "../clips/this.png"
import lou from "../clips/loua.png"
import Cookies from "js-cookie";

export default function Auth() {
    const navigate = useNavigate();

    const api = "https://leets1337-3f387c570577.herokuapp.com/api/v1/authenticate";
    const functionNavigate = (path) => {
        window.open(path, '_blank');
    }
    const cally = (thepath) => {
        window.location.href = thepath;
    }

    localStorage.setItem('pics', me);
    localStorage.setItem('lou', lou);
    const token = "https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-6734cea9d925c671f887c117afed7807dfa8e7d9796b1f68084b6b9d1db6bb25&redirect_uri=https%3A%2F%2F1337leet.vercel.app%2Fhome&response_type=code";
    return (
        <div className="w-[100%] bg-black h-[100vh] flex items-center justify-center">
          <Starfield
            starCount={40000}
            starColor={[255, 255, 0]}
            speedFactor={0.05}                                                                                    
            backgroundColor="black"
          />
          <div className="w-[100%] h-[100%]
          flex items-center justify-center">
            <div  className="xs:w-[80%] flex
            items-center justify-start  rounded-[20px]  h-[70%] bg-transparent 
             max-w-[600px] gap-[20px] flex-col">
                <div  className="w-[80%] flex items-end justify-center h-[30%] rounded-[10px] bg-black">
                    <p className="font-bars4 font-bold text-6xl text-white"> 1337Leets </p>
                </div>
                <div className="flex items-center min-w-[300px] flex-col justify-start  w-[80%] h-[200px]">
                    <div style={{boxShadow: '0px 0px 5px yellow'}} onClick={() => (cally(token))} className=" cursor-pointer w-[200px] flex items-center 
                     justify-center h-[60px] border-solid rounded-[20px] border-yellow-400 border-[2px] duration-300 hover:scale-105">
                        <p className="text-yellow-400 font-bars3"> Login </p>
                    </div>
                    <div className="flex flex-col items-center justify-center  h-[100px]">
                        <p className="font-bars2 text-white font-black text-sm font-light">Welcome to the Rank School Students Board.</p>
                        <p className="text-white font-bars3"> By : mmaghri && mlouazir </p>
                    </div>
                    <div className="flex items-center justify-around w-[200px] h-[50px]">
                        <div  className="border-solid border-white border-[1px] cursor-pointer w-[50px] h-[50px] rounded-[50%] duration-200 hover:scale-110" onClick={() => functionNavigate('https://github.com/MohammedMaghri')}> <img className="h-[100%] w-[100%] rounded-[50%]" src={"https://i.postimg.cc/sxMRwvbV/IMG-9256.jpg"}/> </div>
                        <div className="border-solid border-white border-[1px] cursor-pointer w-[50px] h-[50px] rounded-[50%] duration-200 hover:scale-110" onClick={() => functionNavigate('https://profile.intra.42.fr/users/mlouazir')} > <img className="h-[100%] w-[100%] rounded-[50%]" src={localStorage.getItem('lou')}/> </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      );
}