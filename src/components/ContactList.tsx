import avatarIcon1 from '../images/avatar.svg';
import avatarIcon2 from '../images/avatar (1).svg';
import avatarIcon3 from '../images/avatar (2).svg';
import avatarIcon4 from '../images/avatar (3).svg';

const ContactList = () => {
  return (
    <ul className='overflow-auto custom-scrollbar'>
        <li className='flex p-3 gap-5 cursor-pointer hover:bg-gray-900'>
            <img className='w-12' src={avatarIcon1} alt="" />
            <div className='flex flex-col justify-center'>
                <span className='text-gray-300 text-lg font-bold'>Thiago Meira</span>
                <span className='text-gray-400 text-sm'>Hello my friend!</span>
            </div>
        </li>
        <li className='flex p-3 gap-5 cursor-pointer hover:bg-gray-900'>
            <img className='w-12' src={avatarIcon2} alt="" />
            <div className='flex flex-col justify-center'>
                <span className='text-gray-300 text-lg font-bold'>Caio Miguel</span>
                <span className='text-gray-400 text-sm'>Hi man, beleza meu patrão?</span>
            </div>
        </li>
        <li className='flex p-3 gap-5 cursor-pointer hover:bg-gray-900'>
            <img className='w-12' src={avatarIcon3} alt="" />
            <div className='flex flex-col justify-center'>
                <span className='text-gray-300 text-lg font-bold'>Pablita Serpone</span>
                <span className='text-gray-400 text-sm'>Olá, beleuza?</span>
            </div>
        </li>
        <li className='flex p-3 gap-5 cursor-pointer hover:bg-gray-900'>
            <img className='w-12' src={avatarIcon4} alt="" />
            <div className='flex flex-col justify-center'>
                <span className='text-gray-300 text-lg font-bold'>Padro Serpone</span>
                <span className='text-gray-400 text-sm'>Salve, salve meu parçeiro</span>
            </div>
        </li>
    </ul>
  )
}

export default ContactList