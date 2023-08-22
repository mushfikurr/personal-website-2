import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const pages = [
    { title: "Home", ref: useRef() },
    { title: "About", ref: useRef() },
    { title: "Contact", ref: useRef() },
  ];

  return (
    <div className="bg-cod-gray-950 -z-10">
      <Navbar
        pages={pages}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <Socials />

      {/* Passing down ref of next section for the scroll into view button. */}
      <Landing
        ref={pages[0].ref}
        setActivePage={setActivePage}
        aboutRef={pages[1].ref}
      />
      <About ref={pages[1].ref} setActivePage={setActivePage} />
      <Contact ref={pages[2].ref} setActivePage={setActivePage} />
    </div>
  );
}

export default App;
