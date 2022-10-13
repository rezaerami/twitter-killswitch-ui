import { useEffect, useState } from 'react';

interface UseIsOnlineInterface {
  isOnline: boolean;
}

const useIsOnline = (): UseIsOnlineInterface => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener('online', handleSetIsOnline);
    window.addEventListener('offline', handleSetIsOnline);

    return () => {
      window.removeEventListener('online', handleSetIsOnline);
      window.removeEventListener('offline', handleSetIsOnline);
    };
  }, []);

  const handleSetIsOnline = (): void => setIsOnline(navigator.onLine);

  return {
    isOnline,
  };
};

export default useIsOnline;
