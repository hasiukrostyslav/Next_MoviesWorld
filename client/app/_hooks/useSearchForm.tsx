'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export function useSearchForm() {
  const [isFocus, setIsFocus] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsFocus(false);
  }, [pathname]);

  const resetForm = () => {
    formRef.current?.reset();
    inputRef.current?.blur();
    setIsFocus(false);
  };

  const clearInput = () => {
    formRef.current?.reset();
    inputRef.current?.focus();
    setIsFocus(true);
  };

  return { formRef, inputRef, isFocus, resetForm, setIsFocus, clearInput };
}
