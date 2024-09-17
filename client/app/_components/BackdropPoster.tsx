import Image from 'next/image';

interface BackdropPoster {
  src: string;
  title: string;
  className?: string;
}

function BackdropPoster({ src, title, className }: BackdropPoster) {
  return (
    <div className="absolute top-0 right-0 h-screen w-full">
      <Image
        src={`${process.env.NEXT_PUBLIC_IMG_URL_LARGE}${src}`}
        alt={`${title} backdrop poster`}
        fill
        priority
        className={`-z-10 brightness-35 object-fil ${className}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
      />
    </div>
  );
}

export default BackdropPoster;
