import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideToggle } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [playVideo] = useSearchParams();
  const dispatch = useDispatch();
  // jaise hi hum video page m ayenge hum chahte hai ki sidebar hide ho jae.
  useEffect(() => {
    dispatch(hideToggle());
  }, []);
  return (
    <div className="m-2 p-2 h-screen ">
      <iframe
        width="1100"
        height="600"
        src={`https://www.youtube.com/embed/${playVideo.get("v")}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
