import React from 'react';
import { BsFillTelephoneFill, BsFillCameraVideoFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';

const ChatContent = ({ selectedContact }) => {
  if (!selectedContact) {
    return <div>Please select a contact to view messages.</div>;
  }

  return (
    <div className='p-5 bg-gray-800 w-full border-b flex border-gray-600 '>
      <div className='flex gap-4'>
        <img src={selectedContact.img} width={70} alt="" />
        <div className='flex flex-col justify-center'>
          <span className='text-gray-300 text-xl font-bold'>{selectedContact.name}</span>
          <span className='flex gap-2 items-center text-gray-300'>
            <div className='w-2 h-2 rounded-full bg-emerald-400'></div>
            Online
          </span>
        </div>
      </div>
      <div className='ml-auto flex items-center'>
        <ul className='flex gap-3'>
          <li className='
            bg-gray-700 p-3 rounded-md text-gray-50 cursor-pointer
            hover:text-violet-800 hover:bg-gray-300'>
            <BsFillTelephoneFill />
          </li>
          <li className='
            bg-gray-700 p-3 rounded-md text-gray-50 cursor-pointer
            hover:text-violet-800 hover:bg-gray-300'>
            <BsFillCameraVideoFill />
          </li>
          <li className='
            bg-gray-700 p-3 rounded-md text-gray-50 cursor-pointer
            hover:text-violet-800 hover:bg-gray-300'>
            <BiSearch />
          </li>
        </ul> 
      </div>
    </div>
  );
};
export default ChatContent