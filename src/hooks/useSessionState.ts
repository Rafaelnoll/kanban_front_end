import { useEffect, useState } from 'react';

export function useSessionState<Type>(key: string, initialValue: Type) {
  const [state, setState] = useState<Type>(() => {
    const storageData = sessionStorage.getItem(key);

    if (storageData) {
      return JSON.parse(storageData);
    }

    return initialValue;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState] as const;
}
