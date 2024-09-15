import Image from 'next/image';
import type { EpisodeData } from '../_utils/types';
import EpisodeItemInfo from './EpisodeItemInfo';

function EpisodeItem({ episode }: { episode: EpisodeData }) {
  return (
    <>
      <li className="flex h-44">
        <div className="relative w-max">
          <Image
            className="h-full w-96 rounded-md"
            src={`${process.env.NEXT_PUBLIC_IMG_URL_LARGE}${episode.posterPath}`}
            alt="Episode Image"
            width={240}
            height={240}
            priority
          />
        </div>
        <EpisodeItemInfo episode={episode} />
      </li>
    </>
  );
}

export default EpisodeItem;

