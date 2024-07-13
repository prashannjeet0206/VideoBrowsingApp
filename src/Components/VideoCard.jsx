import React from "react";

const VideoCards = ({ videoData }) => {
  // console.log(videoData);
  const { snippet, statistics } = videoData;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-60 shadow-xl p-2 m-2">
      <img
        alt="thumbnails"
        src={thumbnails.medium.url}
        className="rounded-lg"
      />
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCards;
