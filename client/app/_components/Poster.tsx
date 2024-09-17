import Image from 'next/image';

interface PosterProps {
  src: string;
  title: string;
}

function Poster({ src, title }: PosterProps) {
  return (
    <Image
      src={src}
      alt={`${title} poster`}
      priority
      width={256}
      height={384}
      quality={80}
      className="rounded-lg object-contain"
    />
  );
}

export default Poster;
