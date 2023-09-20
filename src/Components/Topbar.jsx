import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { TbWorldWww } from "react-icons/tb";
import { RiArrowDownSLine } from "react-icons/ri";
import {FaEthereum} from 'react-icons/fa'
import Topbarimg from '../assets/topbarimg.webp'

const Topbar = () => {
  return (
    <div className="text-white flex border-b border-gray-500 p-2">
      <div className="relative flex items-center gap-4 justify-between">
        <div>
          <img
            className="flex w-16 h-16 opacity-100 object-cover rounded-full"
            src={Topbarimg}
            alt="/"
          />
        </div>
        <div className="flex relative gap-9">
          <div>
            <div>
              <h2 className="text-customlarge">BoredApeYachtClub</h2>
            </div>
            <div className="flex gap-2 text-2xl cursor-pointer text-customgray">
              <MdOutlineContentCopy className="hover:text-white" />
              <AiFillTwitterCircle className="hover:text-white" />
              <BiLogoDiscordAlt className="hover:text-white" />
              <TbWorldWww className="hover:text-white" />
              <RiArrowDownSLine className="hover:text-white" />
            </div>
          </div>
          <div className="ml-20">
            <ul className="flex uppercase gap-9 font-semibold">
                <li >
                    <div>
                        <h5 className="text-lg text-gray-500">FLOOR PRICE</h5>
                        <p className="flex items-center">24.30 <FaEthereum/></p>
                        
                    </div>
                </li>
                <li>
                    <div>
                        <h5 className="text-lg text-gray-500">top bidE</h5>
                        <p className="flex items-center">24.30</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h5 className="text-lg text-gray-500">1d change</h5>
                        <p className="text-yellow-300 font-semibold">0.04%</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h5 className="text-lg text-gray-500">7d change</h5>
                        <p className="text-yellow-500">-6.50%</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h5 className="text-lg text-gray-500">15m volume</h5>
                        <p className="flex justify-end">-</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h5 className="text-lg text-gray-500">1d volume</h5>
                        <p className="flex items-center">24.30 <FaEthereum/></p>
                    </div>
                </li>
                <li>
                    <div>
                        <h5 className="text-lg text-gray-500">7d volume</h5>
                        <p className="flex items-center">5628.22 <FaEthereum/></p>
                    </div>
                </li>
                <li>
                    <div>
                        <h5 className="text-lg text-gray-500">owners</h5>
                        <p>5639(56%)</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h5 className="text-lg text-gray-500">supply</h5>
                        <p>9998</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h5 className="text-lg text-gray-500">royalty</h5>
                        <p>0.01</p>
                    </div>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
