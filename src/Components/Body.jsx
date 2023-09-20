import React from "react";
import { BsStack } from "react-icons/bs";
import { BiData } from "react-icons/bi";
import { FaHandHoldingWater } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbGridDots } from "react-icons/tb";
import { PiSquaresFourThin } from "react-icons/pi";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { TbClockHour3 } from "react-icons/tb";
import { FaEthereum } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
const Body = () => {
  return (
    <div className="text-white p-3 ">
      <div className="flex gap-40 border-b border-gray-500 pt-4  pb-4">
        <div>
          <ul className="flex gap-5 text-gray-400 text-xl">
            <li className="flex gap-2">
              <BsStack />
              ITEMS
            </li>
            <li className="flex gap-2">
              <BiData />
              BIDS
            </li>
            <li className="flex gap-2">
              <FaHandHoldingWater />
              LOANS
            </li>
            <li className="flex gap-2">
              <BsPeopleFill />
              HOLDERS
            </li>
          </ul>
        </div>
        <div className="flex gap-6">
          <div className="relative flex">
            <input
              type="text"
              className="w-full h-full text-gray-400 border border-gray-700 bg-gray-800 font-proto-mono pl-10 rounded-md"
              placeholder="Item ID"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <AiOutlineSearch className="text-gray-300" />
            </div>
          </div>

          <div>
            <ul className="flex text-2xl gap-2 text-gray-400">
              <li>
                <TfiMenuAlt />
              </li>
              <li>
                <TfiMenuAlt />
              </li>
              <li>
                <TbGridDots />
              </li>
              <li>
                <PiSquaresFourThin />
              </li>
              <li>
                <AiFillSetting />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="uppercase flex gap-2 text-gray-400 font-semibold text-lg justify-between border-b border-gray-500 p-2">
          <div className="flex gap-4">
            <input type="checkbox" />
            <ul>
              <li>485 listed</li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-11 items-center">
              <li>Rarity</li>
              <li>buy now</li>
              <li>last sale</li>
              <li>top bid</li>
              <li>owner</li>
              <li>#held</li>
              <li>
                <TbClockHour3 />
              </li>
            </ul>
          </div>
        </div>
        <div className="cursor-pointer ">
          <div className="uppercase flex gap-2 text-gray-400 font-semibold text-2lg justify-between border-b border-gray-500 p-2 cursor-pointer hover:bg-slate-800">
            <div className="flex gap-4 ">
              <input type="checkbox" />
              <ul className="flex items-center gap-2">
                <li>
                  <img
                    className="w-11 h-11 opacity-100 object-cover rounded-md"
                    src="https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/847-4752d1a275624acb?w=64"
                    alt=""
                  />
                </li>
                <li>#847</li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-12 items-center text-lg">
                <li className="text-base">8551</li>
                <li className="border border-gray-400 pl-3 pr-3">25.30</li>
                <li className="flex items-center">
                  24.32 <FaEthereum />
                </li>
                <li className="flex items-center">
                  24.60 <FaEthereum />
                </li>
                <li>7Df70b</li>
                <li>2</li>
                <li className="lowercase">2h ago</li>
              </ul>
            </div>
          </div>
          <div className="uppercase flex gap-2 text-gray-400 font-semibold text-2lg justify-between border-b border-gray-500 p-2 hover:bg-slate-800">
            <div className="flex gap-4">
              <input type="checkbox" />
              <ul className="flex items-center gap-2">
                <li>
                  <img
                    className="w-11 h-11 opacity-100 object-cover rounded-md"
                    src="https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/847-4752d1a275624acb?w=64"
                    alt=""
                  />
                </li>
                <li>#847</li>
              </ul>
            </div>
            <div className="cursor-pointer">
              <ul className="flex gap-12 items-center text-lg">
                <li className="text-base">8551</li>
                <li className="border border-gray-400 pl-3 pr-3">25.30</li>
                <li className="flex items-center">
                  24.32 <FaEthereum />
                </li>
                <li className="flex items-center">
                  24.60 <FaEthereum />
                </li>
                <li>7Df70b</li>
                <li>2</li>
                <li className="lowercase">2h ago</li>
              </ul>
            </div>
          </div>
          <div className="uppercase flex gap-2 text-gray-400 font-semibold text-2lg justify-between border-b border-gray-500 p-2 hover:bg-slate-800">
            <div className="flex gap-4">
              <input type="checkbox" />
              <ul className="flex items-center gap-2">
                <li>
                  <img
                    className="w-11 h-11 opacity-100 object-cover rounded-md"
                    src="https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/847-4752d1a275624acb?w=64"
                    alt=""
                  />
                </li>
                <li>#847</li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-12 items-center text-lg">
                <li className="text-base">8551</li>
                <li className="border border-gray-400 pl-3 pr-3">25.30</li>
                <li className="flex items-center">
                  24.32 <FaEthereum />
                </li>
                <li className="flex items-center">
                  24.60 <FaEthereum />
                </li>
                <li>7Df70b</li>
                <li>2</li>
                <li className="lowercase">2h ago</li>
              </ul>
            </div>
          </div>
          <div className="uppercase flex gap-2 text-gray-400 font-semibold text-2lg justify-between border-b border-gray-500 p-2 hover:bg-slate-800">
            <div className="flex gap-4">
              <input type="checkbox" />
              <ul className="flex items-center gap-2">
                <li>
                  <img
                    className="w-11 h-11 opacity-100 object-cover rounded-md"
                    src="https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/847-4752d1a275624acb?w=64"
                    alt=""
                  />
                </li>
                <li>#847</li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-12 items-center text-lg">
                <li className="text-base">8551</li>
                <li className="border border-gray-400 pl-3 pr-3">25.30</li>
                <li className="flex items-center">
                  24.32 <FaEthereum />
                </li>
                <li className="flex items-center">
                  24.60 <FaEthereum />
                </li>
                <li>7Df70b</li>
                <li>2</li>
                <li className="lowercase">2h ago</li>
              </ul>
            </div>
          </div>
          <div className="uppercase flex gap-2 text-gray-400 font-semibold text-2lg justify-between border-b border-gray-500 p-2 hover:bg-slate-800">
            <div className="flex gap-4">
              <input type="checkbox" />
              <ul className="flex items-center gap-2">
                <li>
                  <img
                    className="w-11 h-11 opacity-100 object-cover rounded-md"
                    src="https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/847-4752d1a275624acb?w=64"
                    alt=""
                  />
                </li>
                <li>#847</li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-12 items-center text-lg">
                <li className="text-base">8551</li>
                <li className="border border-gray-400 pl-3 pr-3">25.30</li>
                <li className="flex items-center">
                  24.32 <FaEthereum />
                </li>
                <li className="flex items-center">
                  24.60 <FaEthereum />
                </li>
                <li>7Df70b</li>
                <li>2</li>
                <li className="lowercase">2h ago</li>
              </ul>
            </div>
          </div>
          <div className="uppercase flex gap-2 text-gray-400 font-semibold text-2lg justify-between border-b border-gray-500 p-2 hover:bg-slate-800">
            <div className="flex gap-4">
              <input type="checkbox" />
              <ul className="flex items-center gap-2">
                <li>
                  <img
                    className="w-11 h-11 opacity-100 object-cover rounded-md"
                    src="https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/847-4752d1a275624acb?w=64"
                    alt=""
                  />
                </li>
                <li>#847</li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-12 items-center text-lg">
                <li className="text-base">8551</li>
                <li className="border border-gray-400 pl-3 pr-3">25.30</li>
                <li className="flex items-center">
                  24.32 <FaEthereum />
                </li>
                <li className="flex items-center">
                  24.60 <FaEthereum />
                </li>
                <li>7Df70b</li>
                <li>2</li>
                <li className="lowercase">2h ago</li>
              </ul>
            </div>
          </div>
          <div className="uppercase flex gap-2 text-gray-400 font-semibold text-2lg justify-between border-b border-gray-500 p-2 hover:bg-slate-800">
            <div className="flex gap-4">
              <input type="checkbox" />
              <ul className="flex items-center gap-2">
                <li>
                  <img
                    className="w-11 h-11 opacity-100 object-cover rounded-md"
                    src="https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/847-4752d1a275624acb?w=64"
                    alt=""
                  />
                </li>
                <li>#847</li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-12 items-center text-lg">
                <li className="text-base">8551</li>
                <li className="border border-gray-400 pl-3 pr-3">25.30</li>
                <li className="flex items-center">
                  24.32 <FaEthereum />
                </li>
                <li className="flex items-center">
                  24.60 <FaEthereum />
                </li>
                <li>7Df70b</li>
                <li>2</li>
                <li className="lowercase">2h ago</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <div className="border flex justify-between border-yellow-600 w-60 rounded-sm font-semibold cursor-pointer p-2">
            <div>BUY FLOOR</div>
            <div className="flex items-center text-red-700 font-semibold">
              24.95 <FaEthereum />
            </div>
          </div>
          <div className="flex items-center text-yellow-200">
            OR 1.16 <FaEthereum />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            OPTIMIZE SLEEP
          </div>
          <div><MdSettings/></div>
        </div>
      </div>
    </div>
  );
};

export default Body;
