'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export function useSearchTabs() {
  const searchParams = useSearchParams();
  const [leftPosition, setLeftPosition] = useState<string>();

  const params = {
    query: searchParams.get('query') || '',
    type: searchParams.get('type') || '',
  };

  useEffect(() => {
    if (!params.type) setLeftPosition('before:left-0');
    if (params.type === 'movies') setLeftPosition('before:left-1/4');
    if (params.type === 'shows') setLeftPosition('before:left-2/4');
    if (params.type === 'actors') setLeftPosition('before:left-3/4');
  }, [params.type]);

  return { params, leftPosition };
}
