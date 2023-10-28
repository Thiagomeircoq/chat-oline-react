import { BsRocketTakeoffFill } from 'react-icons/bs';
import { PiGearSixBold } from 'react-icons/pi';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { CgDarkMode } from 'react-icons/cg';
import { PiChatCenteredDotsBold } from 'react-icons/pi';
import { PiRobotDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import avatarIcon1 from '../images/avatar.svg';

const Sidebar = () => {
  return (
    <div className="h-full w-20 bg-gray-800 justify-center">
        <div className='p-4 flex flex-col h-full'>

            <Link to={"/"}>
                <div className="text-3xl text-violet-700 flex justify-center">
                    <BsRocketTakeoffFill />
                </div>
            </Link>

            <ul className='h-full flex justify-center flex-col gap-10 items-center'>
                <Link to="chat">
                    <li className='text-3xl text-gray-500 hover:bg-gray-700 hover:text-violet-500 cursor-pointer rounded-md p-2 flex justify-center items-center'>
                        <PiChatCenteredDotsBold />
                    </li>
                </Link>

                <Link to="contact">
                    <li className='text-3xl text-gray-500 hover:bg-gray-700 hover:text-violet-500 cursor-pointer rounded-md p-2 flex justify-center items-center'>
                        <AiOutlineUsergroupDelete />
                    </li>
                </Link>

                <Link to="chat">
                    <li className='text-3xl text-gray-500 hover:bg-gray-700 hover:text-violet-500 cursor-pointer rounded-md p-2 flex justify-center items-center'>
                        <PiRobotDuotone />
                    </li>
                </Link>

                <Link to="config">
                    <li className='text-3xl text-gray-500 hover:bg-gray-700 hover:text-violet-500 cursor-pointer rounded-md p-2 flex justify-center items-center'>
                        <PiGearSixBold />
                    </li>
                </Link>
            </ul>
            <ul>
                <li className='text-3xl text-gray-500 cursor-pointer p-2 flex justify-center items-center'>
                    <CgDarkMode />
                </li>
                <li className='text-3xl text-gray-500 cursor-pointer p-2 flex justify-center items-center'>
                    <img src={avatarIcon1} alt="" srcSet="" width={30}/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar;
