import React, { useEffect, useState, useRef } from 'react';

interface useAnimatedUnmountProps {
  visible: boolean;
}

export default function useAnimatedUnmount({
  visible,
}: useAnimatedUnmountProps) {
  const [shouldRender, setShouldRender] = useState(visible);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const animatedElementRef = useRef<any | null>(null);

  useEffect(() => {
    function animationEnd() {
      setShouldRender(false);
    }

    if (visible) {
      setShouldRender(true);
    }

    const elementRef = animatedElementRef.current;

    if (!visible && elementRef) {
      elementRef.addEventListener('animationend', animationEnd);
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener('animationend', animationEnd);
      }
    };
  }, [visible]);

  return {
    shouldRender,
    animatedElementRef,
  };
}
