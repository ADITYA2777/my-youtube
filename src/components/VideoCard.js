import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  if (!info) {
    return <div>Loading...</div>;
  }
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-3 m-5  w-64 shadow-2xl ">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics && statistics.veiwCount}veiw</li>
      </ul>
    </div>
  );
};
export default VideoCard;

