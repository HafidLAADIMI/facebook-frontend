"use client";
import React from "react";
import Stories from "./Stories";
import Upload from "./Upload";
import Post from "./Post";

interface Sliders {
  item: string;
}

function CenterBar() {
  const img1 = "/img_1.jpg";
  const img2 = "/img_2.jpg";
  const img3 = "/img_3.jpg";
  const img4 = "/img_4.jpg";
  const img5 = "/img_5.jpg";
  const img6 = "/img_6.jpg";
  const img7 = "/img_7.jpg";

  const slides: Sliders[] = [
    { item: img1 },
    { item: img2 },
    { item: img3 },
    { item: img4 },
    { item: img5 },
    { item: img6 },
    { item: img7 },
  ];

  return (
    <div className="lg:basis-1/2 flex flex-col items-center gap-4 px-6 bg-slate-200 h-full overflow-y-scroll">

      {/* <Stories slides={slides} /> */}
      <Upload />
      <Post />
      {/* <Post />
      <Post />
      <Post /> */}
    </div>
  );
}

export default CenterBar;
