import React from 'react'
import { useSelector } from 'react-redux';
import store from '../utils/store';

const Slidebar = () => {

  const isMenuopen = useSelector((store) => store.app.isMenuopen);

  // this method is knows as earley return pattern
  if (!isMenuopen) return null;
  return (
    <div className=" p-5 shadow-lg w-48">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>History</li>
      </ul>
      <h1 className=" font-bold pt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className=" font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Live</li>
        <li>Learning</li>
        <li>News</li>
      </ul>
    </div>
  );
}

export default Slidebar