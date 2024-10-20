'use client';

import { useSearchTabs } from '../_hooks/useSearchTabs';
import Tab from './Tab';

function Tabs() {
  const { params, type, leftPosition } = useSearchTabs();

  return (
    <div
      className={`relative my-6 flex w-96 before:absolute ${leftPosition} before:-bottom-2 before:h-0.5 before:w-1/4 before:bg-blue-600 before:transition-all before:duration-500 before:content-[''] before:hover:bg-blue-400`}
    >
      <Tab
        tabType=""
        searchParamType={type || ''}
        href={`?${params}`}
      >
        All
      </Tab>
      <Tab
        tabType="movies"
        searchParamType={type}
        href={`?${params}&type=movies`}
      >
        Movies
      </Tab>
      <Tab
        tabType="shows"
        searchParamType={type}
        href={`?${params}&type=shows`}
      >
        Shows
      </Tab>
      <Tab
        tabType="actors"
        searchParamType={type}
        href={`?${params}&type=actors`}
      >
        Actors
      </Tab>
    </div>
  );
}
export default Tabs;
