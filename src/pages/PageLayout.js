import { forwardRef, useEffect } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";

const Page = forwardRef((props, ref) => {
  const [scrollRef, scrollEntry] = useIntersectionObserver({
    threshold: 0.5,
    root: null,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (scrollEntry?.isIntersecting) props.setActivePage(props.title);
  }, [scrollEntry?.isIntersecting]);

  return (
    <div
      className={props.classNames}
      ref={(el) => {
        if (ref) ref.current = el;
        if (scrollRef) scrollRef.current = el;
      }}
    >
      {props.children}
    </div>
  );
});

export default Page;
