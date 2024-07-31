import React from "react";
import { useState } from "react";
import { IoSettings } from "react-icons/io5";
import pic from "../clips/mmaghri.jpg";
import { IoMdLogOut } from "react-icons/io";
import {functionVisible, Nav} from "../Nav/Nav";
import { FaChevronDown } from "react-icons/fa";
import { Selector } from "../Selector/Slector";
import taj from "../clips/crown.png";
import redirect from "../clips/maximize.png";
import { PiInstagramLogoFill } from "react-icons/pi";
import "./Scrol.css";

export default function Scrol() {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [value, setValue] = useState(80);
    const student = [{pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 80, rank : 4, promo : "2023", campus : "Khouribga", color : "rgb(255, 214, 51)"}, 
    {pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 80, rank : 3, promo : "2023", campus : "Khouribga" , color : "rgb(194, 194, 214)"},
    {pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 70, rank : 3, promo : "2023", campus : "Khouribga" , color : "rgb(255, 153, 102)"},
    {pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 20, rank : 3, promo : "2023", campus : "Khouribga" , color : "rgb(230, 230, 230)"},
    {pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 90, rank : 2, promo : "2023", campus : "Khouribga" , color : "rgb(230, 230, 230)"},
    {pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 99, rank : 1, promo : "2023", campus : "Khouribga" , color : "rgb(230, 230, 230)"},
    {pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 99, rank : 1, promo : "2023", campus : "Khouribga" , color : "rgb(230, 230, 230)"},
    {pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 20, rank : 1, promo : "2023", campus : "Khouribga" , color : "rgb(230, 230, 230)"},
    {pic: pic , username : "mmaghri", name : "Mohammed Maghri", ranklvl : 20, rank : 1, promo : "2023", campus : "Khouribga", color : "rgb(230, 230, 230)"}
  ];
    return(
        <div className="flex items-center justify-center border-solid overflow-auto w-[100%] h-[100%] mt-[10px] rounded-[10px]">
        <div className="border-solid flex items-center justify-start flex-col duration-300 gap-[15px] lg:w-[70%]   md:w-[70%] h-[100%] max-w-[800px] rounded-[10px] xs:w-[100%]">
          <div className=" flex items-center justify-center gap-[10px] flex-col  w-[100%] h-[50px]"></div>
          {
            student.map((item, index) => (
              <div style={{boxShadow: '0px 0px 5px white', backgroundColor : `${item.color}`}} className="gap-[5px] border-solid bg-gray-400 border-white border-[5px] flex items-center justify-start w-[100%] max-w-[800px] h-[130px] rounded-[20px]">
              {/* <div className=" absolute w-[70px] h-[70px] border-solid z-100    top-[150px]">
                <img style={{transform: "rotate(-45deg)"}} src={taj}/>
              </div> */}
            <div style={{boxShadow : '0px 0px 5px black'}} className="border-solid border-[1px] ml-[5px] flex items-center justify-center border-black xs:w-[120px] xs:min-w-[120px] rounded-[50%] md:w-[120px] md:min-w-[120px] h-[120]">
              <img className="w-[100%] h-[100%] rounded-[50%]" src={item.pic}/>
            </div>
            <div style={{boxShadow: '0px 0px 5px black'}} className=" flex items-center flex-col justify-center h-[95%] rounded-[20px] xs:w-[260px] xm:w-[520px] sm:w-[660px] md:w-[600px] lg:w-[670px] mr-[5px] bg-white">
              <div className="w-[97%] h-[100%] rounded-[10px] flex items-center justify-start flex-row">
                <div className=" xs:w-[70%] xf:w-[100%] sm:w-[70%] md:w-[70%] h-[100%]">
                  <div className="w-[100%] h-[60%] flex items-start justify-center flex-col" > <p className="font-bars3 font-extrabold"> {item.username} </p>
                  <p className="font-bars3 text-[15px] font-normal"> {item.name}</p> </div>
                  <div className="w-[100%] gap-[10px] h-[30%] flex items-center justify-start flex-row" >
                    <p className=" font-bold "> Lvl : </p>
                    <div className="w-[40px] flex items-center justify-center h-[40px]  rounded-[50%] bg-black">
                      <p className="text-white font-bars3"> {item.rank}</p>
                    </div>
                  </div>
                </div>
                <div className="border-solid flex  flex-col  items-center justify-around  md:w-[30%] xf:w-[30%] xm:w-[30%] xs:w-[30%] sm:w-[30%]  duration-300 lg:w-[30%] h-[100%]">
                  <div className="w-[30px] h-[30px] duration-200 cursor-pointer  hover:scale-105">
                    <img src={redirect} />
                  </div>
                </div>
              </div>
              <div className="w-[100%] h-[20%] rounded-[10px] flex flex-row items-center justify-start">
                <div className="flex items-center justify-start w-[80%] h-[100%]">
                  <div style={{width : `${item.ranklvl}%`, marginLeft:'10px'}} className=" rounded-[20px] h-[40%] bg-black"></div>
                </div>
                <div className="w-[20%] max-w-[70px] flex items-center justify-center h-[100px]">
                  <p className="text-2xl font-bars3  font-black "> {item.ranklvl + "%"} </p>
                </div>
              </div>
            </div>
          </div>
          ))
          }
        </div>
      </div>
    );
}