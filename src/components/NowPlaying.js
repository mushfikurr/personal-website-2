import { useEffect, useState } from "react";

const ENDPOINT = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=mvshy&api_key=${process.env.REACT_APP_LASTFM_KEY}&format=json`;

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
          <div className="inline flex-shrink-0 filter transition-all duration-300 hover:shadow-inner  hover:brightness-75">
            <img
              className="mr-4 h-16 w-16 flex-shrink-0 rounded-full outline outline-green-500"
              width="16"
              height="16"
              src={props.imageUrl}
            />
          </div>
        </ClickRefreshWrapper>
      );
    } else {
      // Not currently listening
      return (
        <ClickRefreshWrapper action={props.reload}>
          <div className="inline flex-shrink-0 filter transition-all duration-300 hover:shadow-inner hover:brightness-75">
            <img
              className="outline-lighter-gray mr-4 h-16 w-16 flex-shrink-0 rounded-full outline"
              width="16"
              height="16"
              src={props.imageUrl}
            />
          </div>
        </ClickRefreshWrapper>
      );
    }
  } else {
    // Loading current track
    return (
      <div
        className="border-lighter-gray mr-4 inline-block h-16 w-16 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
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
    fetch(ENDPOINT)
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

  const renderSongAndImage = () => {
    if (hasLoadedSong) {
      return (
        <>
          <CoverImage
            imageUrl={currentSong?.image[2]["#text"]}
            active={currentSong["@attr"]?.nowplaying}
            loaded={hasLoadedSong}
            reload={getCurrentSong}
          />
          <div className="flex flex-grow flex-col">
            <p className="max-w-sm truncate text-sm text-gray-300">
              {currentSong["@attr"]?.nowplaying
                ? "Currently listening to..."
                : "Last listened to..."}
            </p>
            <p className="text-l -mt-[4px] text-gray-400">
              {currentSong?.artist["#text"]} - {currentSong?.name}
            </p>
          </div>
        </>
      );
    } else {
      // Fallback if no songs are pulled from API
      return (
        <>
          <CoverImage loaded={hasLoadedSong} />
          <div className="flex flex-grow flex-col">
            <p className="text-sm text-gray-300"></p>
          </div>
        </>
      );
    }
  };

  useEffect(() => {
    getCurrentSong();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="group">
      <div className="hidden flex-grow items-center sm:block">
        {renderSongAndImage()}
      </div>
    </div>
  );
}
