import avatarIcon1 from '../images/avatar.svg';
import avatarIcon2 from '../images/avatar (1).svg';
import avatarIcon3 from '../images/avatar (2).svg';
import avatarIcon4 from '../images/avatar (3).svg';
import avatarIcon5 from '../images/avatar (4).svg';

const ContactList = ({ onSelectContact }) => {
  return (
    <ul className='overflow-auto custom-scrollbar'>
        <li 
            className='flex p-3 gap-5 cursor-pointer hover:bg-gray-900'
            onClick={() => onSelectContact({ name: 'Thiago Meira', img: avatarIcon1 })}
            >
            <img className='w-12' src={avatarIcon1} alt="" />
            <div className='flex flex-col justify-center'>
                <span className='text-gray-300 text-lg font-bold'>Thiago Meira</span>
                <span className='text-gray-400 text-sm'>Hello my friend!</span>
            </div>
        </li>
        <li 
            className='flex p-3 gap-5 cursor-pointer hover:bg-gray-900'
            onClick={() => onSelectContact({ name: 'Caio Miguel', img: avatarIcon2 })}
            >
            <img className='w-12' src={avatarIcon2} alt="" />
            <div className='flex flex-col justify-center'>
                <span className='text-gray-300 text-lg font-bold'>Caio Miguel</span>
                <span className='text-gray-400 text-sm'>Hi man, beleza meu patrão?</span>
            </div>
        </li>
        <li 
            className='flex p-3 gap-5 cursor-pointer hover:bg-gray-900'
            onClick={() => onSelectContact({ name: 'Pablita Serpone', img: avatarIcon3 })}
            >
            <img className='w-12' src={avatarIcon3} alt="" />
            <div className='flex flex-col justify-center'>
                <span className='text-gray-300 text-lg font-bold'>Pablita Serpone</span>
                <span className='text-gray-400 text-sm'>Olá, beleuza?</span>
            </div>
        </li>
        <li 
            className='flex p-3 gap-5 cursor-pointer hover:bg-gray-900'
            onClick={() => onSelectContact({ name: 'Lula', img: avatarIcon4 })}
            >
            <img className='w-12' src={avatarIcon4} alt="" />
            <div className='flex flex-col justify-center'>
                <span className='text-gray-300 text-lg font-bold'>Lula</span>
                <span className='text-gray-400 text-sm'>Salve, salve meu parçeiro</span>
            </div>
        </li>
        <li 
            className='flex p-3 gap-5 cursor-pointer hover:bg-gray-900'
            onClick={() => onSelectContact({ name: 'Bolsonaro', img: avatarIcon5 })}
            >
            <img className='w-12' src={avatarIcon5} alt="" />
            <div className='flex flex-col justify-center'>
                <span className='text-gray-300 text-lg font-bold'>Bolsonaro</span>
                <span className='text-gray-400 text-sm'>Salve, salve meu parçeiro</span>
            </div>
        </li>
    </ul>
  )
}

export default ContactList