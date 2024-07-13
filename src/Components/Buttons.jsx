import React from "react";

const Buttons = ({ name }) => {
  // console.log(name);
  return (
    <div>
      <button className="bg-gray-200 p-2 m-2 rounded-lg">{name}</button>
    </div>
  );
};

export default Buttons;
