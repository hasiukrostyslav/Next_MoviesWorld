'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { SearchBaseData } from '../_utils/types';

export function useSearchForm() {
  const [items, setItems] = useState<SearchBaseData | []>([]);
  const [isFocus, setIsFocus] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    formRef.current?.reset();
    setIsFocus(false);
    setItems([]);
  }, [pathname]);

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
