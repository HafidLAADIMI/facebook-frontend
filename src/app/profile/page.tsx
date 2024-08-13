"use client"
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

function page() {
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
        const token = localStorage.getItem("token");
        console.log(token);
        const response = await axios.get("http://localhost:8080/post/all", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
          },
        });
        console.log(response.data);

        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingPost();
  }, []);
  const deletePost = async (id) => {
    try {
      const token = localStorage.getItem("token");
      console.log("delete   " + token);
      const response = await axios.delete(`http://localhost:8080/userPost/${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Post deleted successfully:", response.data);
      window.location.reload();
    } catch (error) {
      console.error(
        "Error deleting post:",
        error.response?.data || error.message
      );
    }
  };
  return (
    <div className="lg:basis-1/2 flex flex-col items-center gap-4 px-6 bg-slate-200 h-full overflow-y-scroll">
      {posts.map((post) => (
        <div
          key={post.post_id}
          className="flex flex-col  font-bold  py-3 px-2 items-center gap-4 bg-white shadow-md rounded-md "
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
              <IoMdClose
                className="hover:cursor-pointer"
                onClick={() => deletePost(6)}
              />
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
    </div>
  );
}

export default page;
