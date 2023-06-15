import { useEffect, useState } from "react";

const ClickRefreshWrapper = (props) => {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        props.action();
      }}
    >
      {props.children}
    </div>
  );
};

function CoverImage(props) {
  if (props.loaded) {
    // Loaded Status
    if (props.active) {
      // Currently listening
      return (
        <ClickRefreshWrapper action={props.reload}>
          <img
            className="shadow-inner w-16 h-16 rounded-full mr-4 outline outline-green-500 outline-2"
            width="16"
            height="16"
            src={props.imageUrl}
          />
        </ClickRefreshWrapper>
      );
    } else {
      // Not currently listening
      return (
        <ClickRefreshWrapper action={props.reload}>
          <img
            className="shadow-inner w-16 h-16 rounded-full mr-4 outline outline-lighter-gray outline-2"
            width="16"
            height="16"
            src={props.imageUrl}
          />
        </ClickRefreshWrapper>
      );
    }
  } else {
    // Loading current track
    return (
      <div
        class="inline-block mr-4 h-16 w-16 animate-spin rounded-full border-2 border-lighter-gray border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
      </div>
    );
  }
}

export default function NowListening() {
  let timer = null;
  const [currentSong, setCurrentSong] = useState({});
  const [hasLoadedSong, setHasLoadedSong] = useState(false);

  const getCurrentSong = async () => {
    timer = null;
    setHasLoadedSong(false);
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=mvshy&api_key=${process.env.REACT_APP_LASTFM_KEY}&format=json`
    )
      .then(async (res) => {
        const resJson = await res.json();
        // Add some delay to the loading to make transition less jarring
        timer = setTimeout(() => {
          setCurrentSong(resJson.recenttracks.track[0]);
          setHasLoadedSong(true);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCurrentSong();
    return () => clearTimeout(timer);
  }, []);

  if (hasLoadedSong) {
    return (
      <div className="flex items-center flex-grow">
        <CoverImage
          imageUrl={currentSong?.image[2]["#text"]}
          active={currentSong["@attr"]?.nowplaying}
          loaded={hasLoadedSong}
          reload={getCurrentSong}
        />
        <div className="block xs:hidden flex flex-col flex-grow invisible md:visible">
          <p className="text-gray-300 text-sm">
            {currentSong["@attr"]?.nowplaying
              ? "Currently listening to..."
              : "Last listened to..."}
          </p>
          <p className="-mt-[4px] text-l text-gray-400">
            {currentSong.artist["#text"]} - {currentSong.name}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center flex-grow">
        <CoverImage loaded={hasLoadedSong} />
        <div className="block xs:hidden flex flex-col flex-grow invisible md:visible">
          <p className="text-gray-300 text-sm"></p>
        </div>
      </div>
    );
  }
}
