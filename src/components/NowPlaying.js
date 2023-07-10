import { useEffect, useState } from "react";
import { useInterval } from "../Hooks";

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
    const style = `mr-4 h-16 w-16 flex-shrink-0 rounded-full outline ${
      props.active ? "outline-green-500" : "outline-cod-gray-900"
    }`;

    return (
      <ClickRefreshWrapper action={props.reload}>
        <div className="inline flex-shrink-0 filter transition-all duration-300 hover:shadow-inner hover:brightness-125">
          <img className={style} width="16" height="16" src={props.imageUrl} />
        </div>
      </ClickRefreshWrapper>
    );
  } else {
    // Loading current track
    return (
      <div
        className="border-cod-gray-700 mr-4 inline-block h-16 w-16 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
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
        }, 600);
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
          <div className="flex max-w-md flex-grow flex-col">
            <p className="text-cod-gray-300 text-sm">
              {currentSong["@attr"]?.nowplaying
                ? "Currently listening to..."
                : "Last listened to..."}
            </p>
            <p className="text-cod-gray-100 -mt-[3px] text-sm">
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
            <p className="text-cod-gray-300 text-sm"></p>
          </div>
        </>
      );
    }
  };

  useEffect(() => {
    getCurrentSong();
    return () => clearTimeout(timer);
  }, []);

  useInterval(() => {
    getCurrentSong();
  }, 60000);

  return (
    <div className="hidden flex-grow items-center md:flex">
      {renderSongAndImage()}
    </div>
  );
}
