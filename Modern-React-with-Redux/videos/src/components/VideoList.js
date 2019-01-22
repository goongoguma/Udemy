import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  return videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video} />;
  });
};

export default VideoList;
