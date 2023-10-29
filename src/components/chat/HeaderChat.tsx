import React, { useState } from 'react';
import { BsFillTelephoneFill, BsFillCameraVideoFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import SearchChat from './SearchChat';
import Message from './messageschat/Message';

const HeaderChat = ({ selectedContact }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className='relative'>
        <div className='p-5 bg-gray-800 w-full border-b flex border-gray-600 '>
            <div className='flex gap-4'>
                <img src={selectedContact.img} width={70} alt="" />
                <div className='flex flex-col justify-center'>
                <span className='text-gray-300 text-xl font-bold'>{selectedContact.nome}</span>
                <span className='flex gap-2 items-center text-gray-300'>
                    <div className='w-2 h-2 rounded-full bg-emerald-400'></div>
                    Online
                </span>
                </div>
            </div>
            <div className='ml-auto flex items-center'>
                <ul className='flex gap-3'>
                <li className='
                    bg-gray-700 w-10 h-10 flex items-center justify-center rounded-md text-gray-50 cursor-pointer
                    hover:text-violet-800 hover:bg-gray-300'>
                    <BsFillTelephoneFill  />
                </li>
                <li className='
                    bg-gray-700 w-10 h-10 flex items-center justify-center rounded-md text-gray-50 cursor-pointer
                    hover:text-violet-800 hover:bg-gray-300'>
                    <BsFillCameraVideoFill />
                </li>
                <li onClick={handleSearchClick} className='
                    bg-gray-700 w-10 h-10 flex items-center justify-center rounded-md text-gray-50 cursor-pointer
                    hover:text-violet-800 hover:bg-gray-300'>
                    <BiSearch/>
                </li>
                </ul> 
            </div>
        </div>
        {isSearchVisible && <SearchChat />}
    </div>
  )
}

export default HeaderChat