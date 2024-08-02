"use client";
import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";
import { MdOutlineWhatsapp } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

function Post() {
  const image = "/rahimi.jpg";
  const midan = "/midan.jpg";

  const table = [
    { label: "Like", icon: <AiOutlineLike className="text-2xl" /> },
    { label: "Comment", icon: <FaRegComment className="text-2xl" /> },
    { label: "Send", icon: <MdOutlineWhatsapp className="text-2xl" /> },
    { label: "Share", icon: <PiShareFat className="text-2xl" /> },
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchingPost = async () => {
      console.log("calling fetchdata function");
      try {
        const response = await axios.get("http://localhost:8080/post/all");
        console.log(response.data);

        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingPost();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <div
          key={post.post_id}
          className="flex flex-col font-bold w-full py-3 px-2 items-center gap-4 bg-white shadow-md rounded-md "
        >
          <div className="flex flex-row w-full items-center justify-between">
            <div className="flex flex-row gap-2  items-center">
              <Image
                src={midan}
                height={30}
                width={30}
                alt="noavatar"
                className="object-cover cursor-pointer h-8 w-8 text-gray-600 rounded-full"
              />
              <p>Midan</p>
              <p className="text-blue-500 underline cursor-pointer">Follow</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <HiOutlineDotsHorizontal />
              <IoMdClose />
            </div>
          </div>
          <p className="items-start">{post.text}</p>
          {post.fileType.startsWith("video/") ? (
            <video
              controls
              autoPlay={true}
              width={600}
              height={500}
              src={`data:${post.fileType};base64,${post.file}`}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={`data:image/${post.fileType};base64,${post.file}`}
              height={500}
              width={600}
              alt="image"
              className="object-cover"
            />
          )}
          <hr className="text-slate-400 h-2 w-full" />
          <div className="flex flex-row w-full items-center justify-between px-2">
            {table.map((item, i) => (
              <div
                key={i}
                className="flex flex-row items-center gap-2  cursor-pointer"
              >
                {item.icon}
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Post;
