import { IoSearch, IoStar } from 'react-icons/io5';
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
    | 'twitter'
    | 'sun'
    | 'moon'
    | 'star';
}

function Icon({ name }: IconProps) {
  switch (name) {
    case 'play':
      return <FaPlay />;
    case 'favorite':
      return <FaHeart />;
    case 'previous':
      return <IoIosArrowBack />;
    case 'next':
      return <IoIosArrowForward />;
    case 'search':
      return <IoSearch />;
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
    case 'twitter':
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
