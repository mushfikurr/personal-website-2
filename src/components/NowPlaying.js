import { createRef, forwardRef, useEffect, useRef, useState } from "react";
import { useInterval } from "../Hooks";
import { ChevronRight, XMark } from "./Icons";
import { motion } from "framer-motion";

/**
 * TODO:
 * - Add bounce effect on page load and maybe every 2 minutes for the now playing. []
 * - When expanding the widget, allow a 'grace period' for when another poll can take place (prevents jarring change on expanding) []
 * - Fix collapse/expand animation (?) []
 */

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

const CoverImage = forwardRef((props, ref) => {
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
      <div className="border-deepblue-500 mr-4 inline-block h-16 w-16 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
      </div>
    );
  }
});

export default function NowListening() {
  let timer = null;
  const [currentSong, setCurrentSong] = useState({});
  const [hasLoadedSong, setHasLoadedSong] = useState(false);
  let pollingRate = 60000;

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

  const [isOpen, setIsOpen] = useState(false);
  const trackDescRef = createRef();
  const MotionCoverImage = motion(CoverImage);

  const renderSongAndImage = () => {
    const toggleClassNames = `h-4 w-4 text-cod-gray-200 group-hover:text-deepblue-500 ${
      isOpen ? "group-hover:translate-x-0" : "group-hover:translate-x-1"
    } group-hover:cursor-pointer transition-all duration-300 ease-in-out`;
    const buttonClassNames = `group cursor-pointer ${
      isOpen ? "p-4" : "pl-0 pr-4 py-4"
    }`;

    const imageUrl = `${
      currentSong?.image?.[2]?.["#text"]
        ? `${currentSong?.image[2]["#text"]}`
        : `assets/LastFMIcon.png`
    }`;

    if (hasLoadedSong) {
      return (
        <div className="flex items-center">
          <MotionCoverImage
            imageUrl={imageUrl}
            active={currentSong["@attr"]?.nowplaying}
            loaded={hasLoadedSong}
            reload={getCurrentSong}
          />
          <div className="flex flex-grow flex-col overflow-hidden ">
            {/* This div is to calculate the width of the track descriptions for collapse animation */}
            <div
              ref={trackDescRef}
              className="transition-all duration-500 ease-in-out"
              style={{
                maxWidth: isOpen ? trackDescRef.current?.offsetWidth : 0,
              }}
            >
              <p className="text-cod-gray-300 select-none text-sm">
                {currentSong["@attr"]?.nowplaying
                  ? "Currently listening to..."
                  : "Last listened to..."}
              </p>
              <p className="text-cod-gray-100 -mt-[3px] text-sm">
                {currentSong?.artist["#text"]} - {currentSong?.name}
              </p>
            </div>
          </div>

          <span
            className={buttonClassNames}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <XMark classNames={toggleClassNames} />
            ) : (
              <ChevronRight classNames={toggleClassNames} />
            )}
          </span>
        </div>
      );
    } else {
      // Fallback if no songs are pulled from API
      return (
        <>
          <CoverImage loaded={hasLoadedSong} />
          <div className="flex flex-grow cursor-wait flex-col">
            <p className="text-cod-gray-300 text-sm">Loading...</p>
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
