import { RefObject, useState, useEffect } from 'react';

export default function useTaskDetails(
  containerRef: RefObject<HTMLDivElement>,
  onCancel: () => void,
) {
  const [isOnScreen, setIsOnScreen] = useState(true);

  useEffect(() => {
    const container = containerRef.current;

    function handleClickOutside(event: MouseEvent) {
      if (container && !container?.contains(event.target as Node)) {
        setIsOnScreen(false);
        console.log('safds');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    function handleAnimationEnd() {
      if (!isOnScreen) {
        onCancel();
      }
    }

    container?.addEventListener('animationend', handleAnimationEnd);

    return () => {
      container?.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [isOnScreen]);

  const handleCloseTaskDetails = () => setIsOnScreen(false);

  return {
    isOnScreen,
    handleCloseTaskDetails,
  };
}
