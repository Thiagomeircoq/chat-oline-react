import { BiSearch } from 'react-icons/bi';

const SearchChat = () => {
  return (
    <div className='p-3 bg-gray-800 w-full absolute border-b border-gray-600'>
      <div className='relative flex px-4 items-center'>
        <div className='absolute w-10 flex items-center justify-center'>
          <BiSearch className='text-gray-400' />
        </div>
        <input 
          type="text"
          placeholder='Pesquise no chat'
          className='w-full p-2 pl-10 rounded-xl bg-gray-800 border border-gray-600 text-sm text-gray-400 
          focus:bg-gray-900 focus:outline-none focus:ring-0 focus:border-transparent'/>
      </div>
    </div>
  )
}

export default SearchChat