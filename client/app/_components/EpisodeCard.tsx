import Image from 'next/image';
import Link from 'next/link';
import type { EpisodeBaseData } from '../_utils/types';

function EpisodeCard({ episode }: { episode: EpisodeBaseData }) {
  const { seasonNumber, title, posterPath, number: episodeNum } = episode;

  return (
    <li className="flex flex-col">
      <Image
        className="rounded-md"
        src={`${process.env.NEXT_PUBLIC_IMG_URL_LARGE}${posterPath}`}
        alt="Episode Image"
        priority
        quality={80}
        width={240}
        height={240}
      />
      <span className="font-lights my-1 ml-1 text-sm">
        {seasonNumber}x{episodeNum < 10 ? `0${episodeNum}` : episodeNum}
      </span>
      <Link
        href={`${seasonNumber}/episode/${episodeNum}`}
        className="rounded-lg p-1 font-semibold outline-0 ring-blue-500 transition-all duration-500 hover:text-slate-400 focus-visible:ring-4 hover:dark:text-slate-400"
      >
        {title}
      </Link>
    </li>
  );
}

export default EpisodeCard;
