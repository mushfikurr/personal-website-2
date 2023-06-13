function App() {
  return (
    <div className="w-screen h-screen bg-[#171717] py-12 px-24">
      <div className="flex flex-col h-full">
        {/* Navbar */}
        <div className="flex bg-gray-700 h-16 items-center">
          <p className="flex-grow">Currently listening to...</p>
          <div className="flex space-x-8 h-full items-center bg-red-300">
            <p>Home</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="bg-gray-600 flex-grow flex flex-col">
          <div className="bg-gray-500 h-72">
            <div className="flex h-full w-full">
              {/* Social Widget */}
              <div className="w-14 h-32 bg-red-200 rounded-2xl absolute">
                Socials
              </div>

              {/* Header */}
              <div className="bg-red-300 flex-grow">
                <div className="flex justify-center items-end bg-gray-300 h-full">
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl">Hi, I'm Mushfikur</h1>
                    <h3 className="text-xl">
                      A computer science graduate passionate about building
                      software.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="bg-gray-400 flex-grow">
            <div className="h-3/5 bg-yellow-200">
              {/* Project title */}
              <div className="flex items-end justify-center h-1/5 bg-yellow-300">
                <h2>Projects I've worked on</h2>
              </div>
              <div className="h-4/5"></div>
            </div>
            <div className="h-2/5 bg-yellow-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
