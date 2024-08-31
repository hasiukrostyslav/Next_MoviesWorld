import { imgSize, imgURL } from '../utils/constants';
import { formatDate } from '../utils/helper';
import type { Actor } from '../utils/types';
import Poster from './Poster';

interface ActorHeroProps {
  actor: Actor;
}

function ActorHero({ actor }: ActorHeroProps) {
  const { name, birthday, deathday, biography, age, birthplace, imgPath } =
    actor;

  const info = [
    [...Object.keys({ age }), age],
    [...Object.keys({ birthday }), formatDate(birthday)],
    [...Object.keys({ birthplace }), birthplace],
    [...Object.keys({ deathday }), formatDate(deathday)],
  ];

  return (
    <div className="my-14">
      <div className="flex h-full gap-10">
        <div className="basis-1/4">
          <Poster src={`${imgURL}${imgSize.large}${imgPath}`} title={name} />
        </div>

        <div className="flex basis-2/3 flex-col">
          <div className="flex flex-col gap-2">
            <h2 className="mb-4 flex items-end gap-2 text-3xl font-bold">
              {name}
            </h2>

            <ul className="flex gap-4">
              {info.map((item) => {
                const title = item.at(0);
                if (!item.at(-1) || !title || typeof title === 'number')
                  return null;

                return (
                  <li key={item.at(0)}>
                    {`${title[0].toUpperCase()}${title.slice(1)} `}
                    <span className="text-sm italic text-slate-500 dark:text-slate-400">
                      {item.at(-1)}
                    </span>
                  </li>
                );
              })}
            </ul>

            <p className="my-4 text-sm">{biography}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActorHero;
