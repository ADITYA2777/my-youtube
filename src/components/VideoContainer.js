import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

const [video ,setvideo]= useState([]) 
  useEffect(() => {
    getVideo()
  }, [])
  
  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
    setvideo(json.items)
  };

  return (
    <div className="flex flex-wrap">
      {video.map((video) => (
        <Link to={"/watch?v="+ video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer