import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appslice";
import { YouTube_SEARCH_API } from "../utils/constant";
import { json } from "react-router-dom";

const Head = () => {
  const [searchQuery, SetsearchQuery] = useState("");
  const [suggestuin, Setsuggestion] = useState([]);
  const [showSuggestion ,setShowsuggestion] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggustion();
    },200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggustion = async () => {
    console.log(searchQuery);
    const data = await fetch(YouTube_SEARCH_API + searchQuery);
    const json = await data.json();
    Setsuggestion(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className=" grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className=" h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC"
        />
        <a href="/">
          <img
            className=" h-9  mx-2 "
            alt="YouTube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgDC5KbVCgEGLQgwB22LXxPNb4jBvyHwLmw&usqp=CAU"
          />
        </a>
      </div>

      <div className="col-span-10 px-10 text-center ">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => SetsearchQuery(e.target.value)}
            onFocus={() => setShowsuggestion(true)}
            onBlur={() => setShowsuggestion(false)}
            placeholder="Search"
            className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
          />
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        { showSuggestion && ( <div
          className="absolute top-16 left-64 bg-slate-50 py-2  pr-96 ml-56 w-[29rem] border border-gray-100 
        shadow-lg rounded-lg overflow-y-auto max-h-70" >
          <ul>
            {suggestuin.map((s) => (
              <li
                key={s}
                className=" py-2  shadow-sm hover:bg-gray-100 text-left w-96"
              >
                🔍{s}
              </li>
            ))}
          </ul>
        </div>
        )}
      </div>
      <div className=" col-span-1">
        <img
          className=" h-8"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Head;
