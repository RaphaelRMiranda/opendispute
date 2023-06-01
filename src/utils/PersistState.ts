import { useEffect, useState } from 'react';

const isBrowser = typeof window !== 'undefined';

const usePersistState = <T>(
  initialValue: T,
  storageKey: string
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [isLoading, setLoading] = useState(true);
  const [state, setState] = useState<T>(initialValue);

  useEffect(() => {
    const loadData = async () => {
      if (isBrowser) {
        try {
          const savedState = localStorage.getItem(storageKey);
          if (savedState) {
            const decodedState = JSON.parse(Buffer.from(savedState, 'base64').toString('utf-8'));
            setState(decodedState);
          }
        } catch (error) {
          console.error('Error while loading state from localStorage:', error);
        }
      }
      setLoading(false);
    };

    loadData();
  }, [storageKey]);

  useEffect(() => {
    if (isBrowser) {
      const saveData = async () => {
        try {
          const encodedState = Buffer.from(JSON.stringify(state)).toString('base64');
          localStorage.setItem(storageKey, encodedState);
        } catch (error) {
          console.error('Error while saving state to localStorage:', error);
        }
      };

      if (!isLoading) {
        saveData();
      }
    }
  }, [storageKey, state, isLoading]);

  return [state, setState];
};

export default usePersistState;
