import Image from 'next/image';
import Link from 'next/link';
import type { EpisodeBaseData } from '../_utils/types';

interface EpisodeCardProps {
  episode: EpisodeBaseData;
  backupPoster: string;
}

function EpisodeCard({ episode, backupPoster }: EpisodeCardProps) {
  const { seasonNumber, title, posterPath, number: episodeNum } = episode;

  return (
    <li className="">
      <Link
        href={`${seasonNumber}/episode/${episodeNum}`}
        className="outline-round flex flex-col p-1 font-semibold hover:text-slate-400 hover:dark:text-slate-400"
      >
        <Image
          className="rounded-md transition-all duration-500 hover:opacity-70"
          src={`${process.env.NEXT_PUBLIC_IMG_URL_LARGE}${
            posterPath || backupPoster
          }`}
          alt="Episode Image"
          priority
          quality={80}
          width={240}
          height={240}
        />
        <span className="font-light my-1 ml-1 text-sm">
          {seasonNumber}x{episodeNum < 10 ? `0${episodeNum}` : episodeNum}
        </span>
        {title}
      </Link>
    </li>
  );
}

export default EpisodeCard;
