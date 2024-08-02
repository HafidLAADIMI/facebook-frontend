import Image from "next/image";
import React from "react";

function LeftBar() {
  const profile = "/noavatar.jpg";
  const friend = "/friend.png";
  const group = "/group.png";
  const video = "/videos.webp";
  const memories = "/memories.webp";
  const saved = "/saved.png";
  const climat = "/climat.webp";
  const donnation = "/donnation.png";
  const marketplace = "/marketplace.png";
  const pages = "/pages.png";
  const event = "/event.png";
  const messenger = "/messenger.webp";
  const games = "/games.webp";
  const payment = "/payment.png";
  const items = [
    { label: "Hafid LAADIMI", icon: profile },
    { label: "Find Friends", icon: friend },
    { label: "Groups", icon: group },
    { label: "Videos", icon: video },
    { label: "Memories", icon: memories },
    { label: "Saved", icon: saved },
    { label: "Climatology", icon: climat },
    { label: "Donation Collections", icon: donnation },
    { label: "Orders and payment ", icon: payment },
    { label: "Marketplace ", icon: marketplace },
    { label: "Messenger ", icon: messenger },
    { label: "Events ", icon: event },
    { label: "Pages ", icon: pages },
    { label: "Games ", icon: games },
  ];
  return (
    <div className="hidden lg:flex flex-col items-start gap-4 left-0 basis-1/3 h-screen overflow-y-scroll sticky pt-3 top-0">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex flex-row items-center gap-4 hover:bg-slate-300 transition ease-in py-2 px-1 rounded-xl duration-200 w-full mt-3 cursor-pointer"
        >
          <Image
            src={item.icon}
            height={35}
            width={35}
            alt="img"
            className="rounded-full object-cover h-8 w-8"
          />
          <p className="font-bold">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default LeftBar;
