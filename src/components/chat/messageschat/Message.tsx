import React from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';

const Message = ({ text, img, color, direction }) => {

  return (
    <div className="w-full">
      <div className={`flex gap-5 items-center ${direction}`}>
        {img && <img src={img} width={40} alt=""/>}
        <span className={`p-2 px-5 rounded-xl text-gray-300 ${color}`}>{text}</span>
        <div className="flex items-center h-full justify-center">
            <div className='w-8 h-8 rounded-full hover:bg-gray-300 flex justify-center 
                cursor-pointer items-center font-bold text-gray-300 text-lg hover:text-violet-800'>
                <AiOutlineEllipsis size={20}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
