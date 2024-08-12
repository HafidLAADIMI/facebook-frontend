"use client";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
function Page() {
  const router=useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [message, setMessage] = useState<string>("");
  const User = {
    username: email,
    password: password,
  };
  const hanldeFormLogin = async (e: FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:8080/register",
        User,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMessage(response.data);
      router.push("/login");
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        setMessage(error.response.data || "the user has not been added");
        console.log(error.response.data);
      } else {
        setMessage("Something went wrong. Please try again");
      }
    }
  };

  const logo = "/facebook.png";

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen w-screen bg-gray-100 overflow-hidden">
      <div className="flex flex-col items-center md:items-end justify-center h-full p-4">
        <Image height={300} width={300} src={logo} alt="facebook" />
        <p className="text-2xl text-center md:text-left md:w-[80%] mt-4">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center h-full p-4">
        <form
          onSubmit={hanldeFormLogin}
          className="flex flex-col h-auto w-[90vw] md:w-[30vw] items-center gap-3 px-6 py-6 shadow-lg rounded-md bg-white"
        >
          {message && <p className="text-blue-600">{message}</p>}
          <input
            placeholder="Email address or phone number"
            className="w-full rounded-lg outline-none h-14 px-4 border border-gray-300"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg outline-none h-14 px-4 border border-gray-300"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full h-14 bg-blue-600 text-white rounded-lg"
          >
            Sign up
          </button>
        </form>
        <p className="text-center mt-4 text-sm">Welcome to Facebook</p>
      </div>
    </div>
  );
}

export default Page;
