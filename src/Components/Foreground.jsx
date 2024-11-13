import React, { useState } from "react";
import Card from "./Card";

function Foreground() {
  const data = [
    
      {
        desc: "Coding like poetry should be short and concise. ... ",
        filesize: ".9mb",
        close: false,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
      {
        desc: "Coding like poetry should be short and concise. ... ",
        filesize: ".9mb",
        close: false,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
      {
        desc: "Coding like poetry should be short and concise. ... ",
        filesize: ".9mb",
        close: false,
        tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
      },
  ];
  // useState()
  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full flex item-center  gap-5 flex-wrape p-5" >
    {data.map((item,index)=>(

        <Card data={item}/>
    ))}
    </div>
  );
}

export default Foreground;
