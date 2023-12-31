import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appslice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChatComponent from './LiveChatComponent';


const WatchVideo = () => {
    const [searchParam] = useSearchParams();
    console.log(searchParam.get('v'));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    },[])
  return (
    <div className="flex flex-col w-full">
      <div className="py-5 m-3 flex ">
        <div>
          <iframe
            width="800"
            height="400"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullscreen
          ></iframe>
        </div>
        <div className='w-full'>
          <LiveChatComponent />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
}

export default WatchVideo