'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { SearchBaseData } from '../_utils/types';

export function useSearchForm() {
  const [items, setItems] = useState<SearchBaseData | []>([]);
  const [isFocus, setIsFocus] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    formRef.current?.reset();
    setIsFocus(false);
    setItems([]);
  }, [pathname, searchParams]);

  const resetForm = () => {
    formRef.current?.reset();
    inputRef.current?.blur();
    setIsFocus(false);
    setItems([]);
  };

  const clearInput = () => {
    formRef.current?.reset();
    inputRef.current?.focus();
    setIsFocus(true);
    setItems([]);
  };

  return {
    items,
    setItems,
    formRef,
    inputRef,
    isFocus,
    resetForm,
    setIsFocus,
    clearInput,
  };
}
