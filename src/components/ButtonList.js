import React from "react";
import Button from "./button";

const ButtonName = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "javascript",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {ButtonName.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
