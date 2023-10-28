import { BiFilter, BiSearch  } from 'react-icons/bi';
import ContactList from '../components/ContactList';

const Chat = () => {
  return (
    <div className="bg-gray-800 h-screen w-80 border-r border-gray-600 flex flex-col gap-4">
      <ul className="flex justify-between px-4 pt-4 items-center">
        <li className="text-white font-bold text-2xl flex items-center">Chats</li>
        <li 
          className="text-gray-400 font-bold text-sm flex items-center gap-2 cursor-pointer 
          hover:text-violet-700">
          <BiFilter size={20} /> 
          Filter</li>
      </ul>
      <div className='relative flex px-4 items-center'>
        <div className='absolute w-10 flex items-center justify-center'>
          <BiSearch className='text-gray-400' />
        </div>
        <input 
          type="text"
          placeholder='Procure pelo contato'
          className='w-full p-2 pl-10 rounded-2xl bg-gray-800 border border-gray-600 text-sm text-gray-400 
          focus:bg-gray-900 focus:outline-none focus:ring-0 focus:border-transparent'/>
      </div>
      <ContactList />
    </div>
  )
}

export default Chat