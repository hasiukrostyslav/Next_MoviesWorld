import { IoSearch, IoStar } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { LuSun, LuMoon } from 'react-icons/lu';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  FaPlay,
  FaHeart,
  FaArrowLeft,
  FaArrowRight,
  FaSquareFacebook,
  FaSquareInstagram,
  FaYoutube,
  FaSquareXTwitter,
} from 'react-icons/fa6';

interface IconProps {
  className?: string;
  name:
    | 'play'
    | 'favorite'
    | 'previous'
    | 'next'
    | 'search'
    | 'arrowLeft'
    | 'arrowRight'
    | 'facebook'
    | 'instagram'
    | 'youtube'
    | 'x'
    | 'sun'
    | 'moon'
    | 'star'
    | 'close';
}

function Icon({ name, className }: IconProps) {
  switch (name) {
    case 'play':
      return <FaPlay />;
    case 'close':
      return <AiOutlineClose />;
    case 'favorite':
      return <FaHeart />;
    case 'previous':
      return <IoIosArrowBack />;
    case 'next':
      return <IoIosArrowForward />;
    case 'search':
      return <IoSearch className={className} />;
    case 'arrowLeft':
      return <FaArrowLeft />;
    case 'arrowRight':
      return <FaArrowRight />;
    case 'facebook':
      return <FaSquareFacebook />;
    case 'instagram':
      return <FaSquareInstagram />;
    case 'youtube':
      return <FaYoutube />;
    case 'x':
      return <FaSquareXTwitter />;
    case 'sun':
      return <LuSun />;
    case 'moon':
      return <LuMoon />;
    case 'star':
      return <IoStar className="text-yellow-500" />;

    default:
      return null;
  }
}

export default Icon;
