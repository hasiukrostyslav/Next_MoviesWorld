'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useSearchTabs() {
  const searchParams = useSearchParams();
  const [leftPosition, setLeftPosition] = useState<string>();
  const type = searchParams.get('type');

  const params = searchParams
    .toString()
    .split('&')
    .map((param) => (param.includes('page') ? 'page=1' : param))
    .filter((param) => !param.includes('type'))
    .join('&');

  useEffect(() => {
    if (!type) setLeftPosition('before:left-0');
    if (type === 'movies') setLeftPosition('before:left-1/4');
    if (type === 'shows') setLeftPosition('before:left-2/4');
    if (type === 'actors') setLeftPosition('before:left-3/4');
  }, [type]);

  return { params, type, leftPosition };
}
