"use client";
import Image from "next/image";
import React, { useState, useRef, FormEvent } from "react";
import axios from "axios";

function Upload() {
  const noavatar = "/noavatar.jpg";
  const video = "/video.jpg";
  const mood = "/mood.jpg";
  const gallery = "/gallery.png";
  const fileInput = useRef<HTMLInputElement>(null);
  const handleFileInputClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("");
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", text);
    formData.append("userId", "6");
    if (file) {
      formData.append("file", file);
    }
    console.log(formData);
    const token = localStorage.getItem("token");
    axios
      .post("http://localhost:8080/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
        }
       
      })
      .then((repsonse) => {
        console.log("post added successfuly" + repsonse.data);
        alert("you have create a new post ");
      })
      .catch((error) => {
        console.log("error in adding a new post" + error);
        alert("there was an error in adding a new post");
      });
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col w-full py-3 px-2 items-center gap-4 bg-white  shadow-md rounded-md "
    >
      <div className="flex w-full justify-center flex-row items-center gap-3 ">
        <Image
          src={noavatar}
          height={35}
          width={35}
          alt="img"
          className="rounded-full object-cover h-8 w-8"
        />
        <input
          className="h-10 rounded-full px-3 w-[80%] bg-slate-200 outline-none  "
          placeholder="What is up ?"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <hr className="text-slate-400 h-2 w-full" />
      <div className="flex flex-row justify-between w-full px-2 items-center">
        <div className="flex flex-row gap-2 items-center cursor-pointer">
          <Image
            src={video}
            height={25}
            width={25}
            alt="img"
            className="rounded-full object-cover h-7 w-7 cursor-pointer"
          />
          <p>Live video</p>
        </div>
        <div
          className="flex flex-row gap-2 items-center cursor-pointer"
          onClick={handleFileInputClick}
        >
          <Image
            src={gallery}
            height={25}
            width={25}
            alt="img"
            className="rounded-full object-cover h-7 w-7 cursor-pointer"
          />
          <p>Photo/video</p>
          <input
            type="file"
            className="hidden"
            ref={fileInput}
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </div>
        <div className="flex flex-row gap-2 items-center cursor-pointer">
          <Image
            src={mood}
            height={25}
            width={25}
            alt="img"
            className="rounded-full object-cover h-7 w-7 cursor-pointer"
          />
          <p>Mood</p>
        </div>
      </div>
    </form>
  );
}

export default Upload;
