import { useEffect, useState } from 'react';

export function useLocalState<Type>(key: string, initialValue: Type) {
  const [state, setState] = useState<Type>(() => {
    const storageData = localStorage.getItem(key);

    if (storageData) {
      return JSON.parse(storageData);
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState] as const;
}
