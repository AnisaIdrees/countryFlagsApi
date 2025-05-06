import React from 'react'
import { GrLanguage } from "react-icons/gr";
import { FaPersonHarassing } from "react-icons/fa6";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { LuLanguages } from "react-icons/lu";
import { TbTimezone } from "react-icons/tb";
import { BsCurrencyExchange } from "react-icons/bs";
import { MdAddHomeWork } from "react-icons/md";
import { GiModernCity } from "react-icons/gi";

function MiniCard({icon , title, value}) {
 
    return (
        <>
            <div className="card w-[250px] h-[100px] bg-[#292926] rounded-[15px] flex-row gap-4 justify-center items-center">
                <div className="iconBox">
                {icon}    {/* < MdOutlineReduceCapacity className='text-[90px] w-11 text-[#0062ff]' /> */}
                </div>
                <div className="textBox">
                    <h1 className='text-[23px] font-bold text-[white]'>{title}</h1>
                    <p className='text-[white] pt-2'>{value}</p>
                </div>
            </div>



        </>
    )
}

export default MiniCard