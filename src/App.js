import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";

const pages = ["Home", "Projects", "Contact"];

function App() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <div className="w-screen h-screen bg-darker-gray py-12 px-24 font-iAMono">
      <div className="flex flex-col h-full">
        {/* Navbar */}
        <Navbar pages={pages} />

        <div className="flex-grow flex flex-col">
          <div className="h-72">
            <div className="flex h-full w-full">
              {/* Social Widget */}
              <Socials />

              {/* Header */}
              <Header />
            </div>
          </div>

          {/* Projects */}
          <div className="flex-grow">
            <div className="h-3/5">
              {/* Project title */}
              <div className="flex items-end justify-center h-1/5">
                <h2 className="text-gray-100">Projects I've worked on</h2>
              </div>
              <div className="h-4/5"></div>
            </div>
            <div className="h-2/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
