import { useState } from 'react';

export function useVideoFrame() {
  const [isOpenFrame, setIsOpenFrame] = useState(false);
  const openVideoFrame = () => setIsOpenFrame(true);
  const closeVideoFrame = () => setIsOpenFrame(false);

  return { isOpenFrame, openVideoFrame, closeVideoFrame };
}
