import React from "react";
import { discoverDB } from "./../../utils/discoverDB/discoverDB";
import DiscoverItem from "./DiscoverItem";

function Discover() {
  return (
    <main className="h-full lg:px-12 w-full my-12 items-start justify-start py-3 px-2">
      <div className="grid grid-cols-1 px-12 xl:grid-cols-3 gap-4 place-items-start w-full">
        {discoverDB.map((item) => (
          <DiscoverItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

export default Discover;
