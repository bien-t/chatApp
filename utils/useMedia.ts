import { useEffect, useState } from 'react';

export const useMedia = () => {
  const [media, setMedia] = useState({
    matches: typeof window !== 'undefined' ? window.innerWidth < 800 : false
  });
  useEffect(() => {
    let mediaQuery = window.matchMedia('(max-width:800px)');
    mediaQuery.addEventListener('change', setMedia);

    return () => mediaQuery.removeEventListener('change', setMedia);
  }, []);
  if (typeof window !== 'undefined') {
    return media.matches;
  }
  return false;
};
