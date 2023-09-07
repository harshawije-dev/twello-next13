"use client";

import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="absolute top-0 right-0 left-0 w-full h-96 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 blur-xl filter opacity-50 -z-10" />
      <div className="bg-slate-500/10 md:flex">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            alt="Logo"
            src={"https://i.ibb.co/pZ7pncP/Finance-App-Logo.jpg"}
            width={150}
            height={150}
            className="pb-10 md:pb-0 w-28 h-28 object-contain"
          />
          <h2>To-Do AI Clone </h2>
        </div>
        <div className="flex md:flex-1 md:items-center md:justify-end">
          <form className="flex flex-row md:flex-initial rounded-md bg-white py-2 px-4 mx-2 shadow-md space-x-3 items-center">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              name="search"
              id="search"
              className="flex-1 outline-none"
              placeholder="search"
            />
            <Avatar
              name="Harshana Wijesinghe"
              size="45"
              color="#016cb3"
              round
            />
          </form>
        </div>
      </div>
      <div className="flex justify-center w-full px-4 py-8">
        <div className="flex flex-row w-fit justify-center items-center p-3 space-x-2 bg-white shadow-md rounded-md">
          <Image
            alt="chat-gpt"
            src={"https://i.ibb.co/dtyNWxF/chatgpt-96.png"}
            width={20}
            height={20}
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <p className="text-center text-xs md:text-base">
            GPT 4 is analyzing & summarizing the tasks
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
