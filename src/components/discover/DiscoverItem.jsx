import React from "react";

function DiscoverItem({ item }) {
  const { title, desc, icon, color, tags } = item;
  return (
    <div
      className={`${color} w-full my-4 items-center justify-center flex flex-col border border-black rounded-lg py-2 px-3 `}
    >
      <div className="items-start space-y-4 justify-start flex flex-col w-full py-4 px-2">
        <img
          src={icon}
          alt={desc}
          className="w-24 object-cover object-center"
        />
        <h1 className="text-3xl w-full text-start px-4"> {title} </h1>
      </div>
    </div>
  );
}

export default DiscoverItem;
