import React from "react";
import {RiWallet3Line} from 'react-icons/ri'
import {TfiSearch} from 'react-icons/tfi'
const Navbar = () => {
  return (
    <div className="relative m-3 flex justify-between border-b border-gray-500 p-3">
      <div className="flex">
        <div>
          <img
            className="flex w-68 h-8"
            src="https://blur.io/logo.png"
            alt="/"
          />
        </div>
        <div className="uppercase flex ml-3 items-center">
          <ul className="flex gap-5 text-gray-600 font-semibold cursor-pointer ">
            <li className="hover:text-white">Collections</li>
            <li className="hover:text-white">activity</li>
            <li className="hover:text-white">airdrop</li>
            <li className="hover:text-white">Portfolio</li>
          </ul>
        </div>
      <div className="relative ml-40">
        
        <div className="relative h-full">
        <input type="text" placeholder="Collections, Wallets or ENS" className="border w-80 h-full relative text-gray-200 border-gray-800 bg-gray-800 pl-10 rounded-md"/>
        <TfiSearch className="absolute inset-y-2.5 text-gray-300 inset-x-2 "/>
        </div>
      </div>
      </div>
      <div className="cursor-pointer">
        <div className="border border-gray-300 border-l-0 border-r-0 border-t-0 border-b-0 flex items-center justify-center bg-orange w-60 h-9 font-semibold hover:bg-white rounded-md"><RiWallet3Line className="w-9 text-xl cursor-pointer"/>CONNECT WALLET</div>
      </div>
    </div>
  );
};

export default Navbar;
