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
    <li className={`relative flex w-44 flex-col ${className}`}>
      <Image
        className="mb-3 rounded-md"
        src={
          actor.imgPath
            ? `${process.env.NEXT_PUBLIC_IMG_URL_SMALL}${actor.imgPath}`
            : `/imgActorAlt.jpg`
        }
        width={width}
        height={height}
        priority
        quality={80}
        alt={`${actor.name} photo`}
      />
      <Link
        href={`/view/actor/${actor.id}`}
        className="rounded-lg p-1 font-semibold outline-0 ring-blue-500 transition-all duration-500 hover:text-slate-800 focus-visible:ring-4  hover:dark:text-slate-400"
      >
        {formatTextLength(actor.name, 18, 16)}
      </Link>
      {cast && (
        <span className="ml-1 mt-1 text-xs">
          {formatTextLength(character, 18, 22)}
        </span>
      )}
    </li>
  );
}

export default ActorCard;

