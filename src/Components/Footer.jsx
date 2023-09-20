import React from 'react'
import {BiLogoDiscordAlt} from 'react-icons/bi';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaEthereum} from 'react-icons/fa';
import {IoSettingsSharp} from 'react-icons/io5'
const Footer = () => {
  return (
    <div className='text-white flex relative items-center border-t border-gray-400'>
      <div className='text-yellow-300 border-r border-gray-400 pr-2'>
        LIVE DATA ACTIVE
      </div>
      <div className='flex text-2xl gap-2 border-r border-gray-400'>
        <BiLogoDiscordAlt/>
        <AiOutlineTwitter/>
      </div>
      <div className='flex items-center pl-2 pr-2 border-r border-gray-400'>
        <FaEthereum/>$1610.04
      </div>
      <div className='flex gap-4 border-r border-gray-400 pl-2 pr-2'>
        COLLECT

        <div className='text-yellow-300'>TRADE</div>
      </div>
      <div className='text-white pl-2'><IoSettingsSharp/></div>

    </div>
  )
}

export default Footer
