import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Landing from "./pages/Landing";
import { useIsVisible } from "./Hooks";

const pages = ["Home", "About", "Contact"];

function App() {
  const [activePage, setActivePage] = useState("Home");
  const projectsRef = useRef();
  const isVisible = useIsVisible(projectsRef);

  useEffect(() => {
    setActivePage("About");
  }, [isVisible]);

  return (
    <>
      <Navbar
        pages={pages}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <Socials />

      <Landing setActivePage={setActivePage} projectsRef={projectsRef} />
      <div
        ref={projectsRef}
        className="bg-darker-gray font-iAMono h-screen px-4 py-2 sm:px-24 sm:py-12"
      ></div>
    </>
  );
}

export default App;
