import { useState } from "react";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Landing from "./pages/Landing";

const pages = ["Home", "Projects", "Contact"];

function App() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <>
      <Navbar
        pages={pages}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <Socials />

      <Landing />
      <div className="bg-darker-gray font-iAMono h-screen px-4 py-2 sm:px-24 sm:py-12"></div>
    </>
  );
}

export default App;
