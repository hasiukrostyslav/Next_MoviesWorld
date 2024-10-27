import Image from 'next/image';
import Link from 'next/link';
import type { ActorBaseData } from '../_utils/types';
import { formatTextLength, getImageSize } from '../_utils/helper';

interface ActorCardProps {
  actor: ActorBaseData;
  cast?: boolean;
  className?: string;
}

function ActorCard({ actor, cast, className }: ActorCardProps) {
  const { width, height } = getImageSize('small');
  const character = actor.character
    ? actor.character.replace('(uncredited)', '')
    : '';

  return (
    <li className={`relative flex flex-col ${className || 'w-44'}`}>
      <Link
        href={`/view/actor/${actor.id}`}
        className="outline-round flex w-full flex-col p-2 font-semibold hover:text-slate-400"
      >
        <Image
          className="mb-3 rounded-md transition-all duration-500 hover:opacity-70"
          src={
            actor.posterImg
              ? `${process.env.NEXT_PUBLIC_IMG_URL_SMALL}${actor.posterImg}`
              : `/imgActorAlt.jpg`
          }
          width={width}
          height={height}
          priority
          quality={80}
          alt={`${actor.name} photo`}
        />
        {formatTextLength(actor.name, 18, 16)}
      </Link>
      {cast && (
        <span className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {formatTextLength(character, 22, 20)}
        </span>
      )}
    </li>
  );
}

export default ActorCard;
