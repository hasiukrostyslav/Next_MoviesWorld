import { imgSize, imgURL } from '../utils/constants';

interface BackdropPoster {
  src: string;
  title: string;
  className?: string;
}

function BackdropPoster({ src, title, className }: BackdropPoster) {
  return (
    <img
      src={`${imgURL}${imgSize.large}${src}`}
      alt={`${title} backdrop poster`}
      className={`absolute left-0 top-0 -z-10 h-screen w-full brightness-35 ${className}`}
    />
  );
}

export default BackdropPoster;
