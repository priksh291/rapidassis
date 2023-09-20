import React from 'react'
import { TbClockHour3 } from "react-icons/tb";
import {FiArrowUpRight} from "react-icons/fi"
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { FaEthereum } from "react-icons/fa";
import {VscGraph} from 'react-icons/vsc'
import {VscGraphScatter} from 'react-icons/vsc'
import chartassis from '../assets/chartassis.jpg'
const Rightbar = () => {
  return (
    <div className='text-white justify-start mr-4 p-4 border-l border-gray-400'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
        <FiArrowUpRight className='text-2xl'/>
        <h1 className='text-xl '>ACTIVITY</h1>
        </div>
        <div>
          <div className='flex items-center text-gray-400 cursor-pointer'>
            ALL
            <MdOutlineKeyboardArrowDown/>
          </div>
        </div>
      </div>
      <div className='border-b border-gray-500 pb-2'>
        <ul className='uppercase flex justify-start gap-6 items-center text-base text-gray-400'>

          <li><TbClockHour3 className='text-xl'/></li>
          <li>item</li>
          <li>price</li>
          <li>seller</li>
          <li>buyer</li>
        </ul>
      </div>
      <div className='pb-2 pt-2 p-2'>
        <ul className=' flex justify-start gap-6 items-center text-base '>

          <li>17s</li>
          <li><img src='https://blur.io/asset/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1241' /></li>
          <li>25.0</li>
          <li>82bbbca</li>
          <li>efa131</li>
        </ul>
      </div>
      <div className='pb-2 pt-2 p-2'>
        <ul className=' flex justify-start gap-6 items-center text-base hover:bg-gray-800 cursor-pointer'>

          <li>17s</li>
          <li><img src='https://blur.io/asset/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1241' /></li>
          <li className='flex items-center'>25.0 <FaEthereum/></li>
          <li>82bbbca</li>
          <li>efa131</li>
        </ul>
      </div>
      <div className='pb-2 pt-2 p-2'>
        <ul className=' flex justify-start gap-6 items-center text-base hover:bg-gray-800 cursor-pointer'>

          <li>17s</li>
          <li><img src='https://blur.io/asset/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1241' /></li>
          <li className='flex items-center'>25.0 <FaEthereum/></li>
          <li>82bbbca</li>
          <li>efa131</li>
        </ul>
      </div>
      <div className='pb-2 pt-2 p-2'>
        <ul className=' flex justify-start gap-6 items-center text-base hover:bg-gray-800 cursor-pointer'>

          <li>17s</li>
          <li><img src='https://blur.io/asset/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1241' /></li>
          <li className='flex items-center'>25.0 <FaEthereum/></li>
          <li>82bbbca</li>
          <li>efa131</li>
        </ul>
      </div>
      <div className='pb-2 pt-2 p-2'>
        <ul className=' flex justify-start gap-6 items-center text-base hover:bg-gray-800 cursor-pointer'>

          <li>17s</li>
          <li><img src='https://blur.io/asset/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1241' /></li>
          <li className='flex items-center'>25.0 <FaEthereum/></li>
          <li>82bbbca</li>
          <li>efa131</li>
        </ul>
      </div>
      <div className='pb-2 pt-2 p-2'>
        <ul className=' flex justify-start gap-6 items-center text-base hover:bg-gray-800 cursor-pointer'>

          <li>17s</li>
          <li><img src='https://blur.io/asset/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1241' /></li>
          <li className='flex items-center'>25.0 <FaEthereum/></li>
          <li>82bbbca</li>
          <li>efa131</li>
        </ul>
      </div>
      <div className='pb-2 pt-2 p-2'>
        <ul className=' flex justify-start gap-6 items-center text-base hover:bg-gray-800 cursor-pointer'>

          <li>17s</li>
          <li><img src='https://blur.io/asset/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1241' /></li>
          <li className='flex items-center'>25.0 <FaEthereum/></li>
          <li>82bbbca</li>
          <li>efa131</li>
        </ul>
      </div>
      <div className='border-t border-gray-500 flex gap-8'>
        <div className='flex items-center gap-1'><VscGraph/> DEPTH</div>
        <div className='flex items-center gap-1 text-yellow-400 font-semibold'><VscGraphScatter/> SALES</div>
      </div>
      <div>
        <img src = {chartassis} alt='/'/>
      </div>
      
    </div>
  )
}

export default Rightbar
