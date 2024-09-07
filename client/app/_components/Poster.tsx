import Image from 'next/image';
import { getImageSize } from '../_utils/helper';

interface PosterProps {
  src: string;
  title: string;
}

function Poster({ src, title }: PosterProps) {
  const { width, height } = getImageSize('medium');

  return (
    <Image
      src={src}
      alt={`${title} poster`}
      priority
      width={width}
      height={height}
      className="rounded-lg"
    />
  );
}

export default Poster;

