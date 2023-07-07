import { useEffect, useState, useRef } from "react";

/**
 * Hook from José Miguel Álvarez Vañó on StackOverflow
 * https://dev.to/jmalvarez/check-if-an-element-is-visible-with-react-hooks-27h8
 */
export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
