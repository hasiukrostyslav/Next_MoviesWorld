import Image from 'next/image';

interface BackdropPoster {
  src: string;
  title: string;
  className?: string;
}

function BackdropPoster({ src, title, className }: BackdropPoster) {
  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_IMG_URL_LARGE}${src}`}
      alt={`${title} backdrop poster`}
      fill
      className={`-z-10 brightness-35 object-cover ${className}`}
    />
  );
}

export default BackdropPoster;

