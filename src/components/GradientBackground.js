import React, { useRef, useEffect } from "react";

const GradientBackground = (props) => {
  const bodyRef = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const bodyElement = bodyRef.current;

    const xPercentage = (clientX / window.innerWidth) * 100;
    const yPercentage = (clientY / window.innerHeight) * 100;

    bodyElement.style.setProperty("--tw-cursor-x", `${xPercentage}%`);
    bodyElement.style.setProperty("--tw-cursor-y", `${yPercentage}%`);
  };

  useEffect(() => {
    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={bodyRef}
      className="bg-custom-gradient bg-gradient-gradient bg-cursor-gradient bg-repeat"
    >
      {props.children}
    </div>
  );
};

export default GradientBackground;
