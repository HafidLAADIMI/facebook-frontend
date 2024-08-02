import Image from "next/image";
import React from "react";

function RightBar() {
  const noavatar = "/noavatar.jpg";
  const contacts = [
    { name: "Hafid LAADIMI", image: noavatar },
    { name: "Hafid LAADIMI", image: noavatar },
    // Add more contacts as needed
  ];
  return (
    <div className="hidden md:flex flex-col items-start gap-4 px-2 right-0 basis-1/2 lg:basis-1/3 h-screen overflow-y-scroll sticky top-0">
      <p>Contact</p>
      <hr />
      {contacts.map((item, i) => (
        <div
          key={i}
          className="flex flex-row gap-3 w-full items-start rounded-lg py-2 hover:bg-slate-300 transition ease-in duration-200 cursor-pointer"
        >
          <div className="relative">
            <Image
              src={item.image}
              height={35}
              width={35}
              alt="img"
              className="rounded-full object-cover h-8 w-8"
            />
            <div className="h-2 w-2 rounded-full bg-green-600 absolute right-0 bottom-0 z-50"></div>
          </div>
          <p className="font-bold">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default RightBar;
