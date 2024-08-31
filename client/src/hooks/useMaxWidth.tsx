import { useEffect, useState } from 'react';

export function useMaxWidth(
  divRef: React.RefObject<HTMLDivElement>,
  headingRef: React.RefObject<HTMLHeadingElement>,
) {
  const [divWidth, setDivWidth] = useState<null | string>(null);
  const [headingWidth, setHeadingWidth] = useState<null | string>(null);
  const [containerWidth, setContainerWidth] = useState<null | string>(null);
  const [maxWidth, setMaxWidth] = useState<null | string>(null);
  const buttonWidth = '2rem';
  const margin = '0.5rem';
  const pxInRem = 16;

  useEffect(() => {
    if (!divRef?.current) return;

    const styles = getComputedStyle(divRef.current);
    setDivWidth(styles.width);
  }, [divRef]);

  useEffect(() => {
    if (!headingRef?.current) return;

    const styles = getComputedStyle(headingRef.current);
    setHeadingWidth(styles.width);
  }, [headingRef]);

  useEffect(() => {
    if (!divWidth || !headingWidth) return;

    const width =
      parseFloat(divWidth) -
      parseFloat(headingWidth) -
      parseInt(buttonWidth) * 2 * pxInRem -
      parseFloat(margin) * 2 * pxInRem;

    setMaxWidth(width + 'px');
    setContainerWidth(parseFloat(divWidth) - parseFloat(headingWidth) + 'px');
  }, [divWidth, headingWidth]);

  return { maxWidth, containerWidth };
}
