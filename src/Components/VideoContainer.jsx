import React, { useEffect, useState } from "react";
import VideoCards from "./VideoCard";
import { UTubeApi } from "../Utils/Constant";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    const data = await fetch(UTubeApi);
    const result = await data.json();
    setVideos(result.items);
  }

  return (
    <div className="flex flex-wrap p-2 m-2 gap-5">
      {videos.map((video) => (
        <Link to={`watch?v=${video.id}`}>
          <VideoCards videoData={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
