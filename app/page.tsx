"use client";


import { useState } from "react";




export default function Home() {
  const [url, setUrl] = useState("")

  return (
    <main className="min-h-screen flex items-center justify-center text-zinc-400">
      <div className="flex flex-col items-center justify-center gap-4 w-xl">
        <h1 className="text-zinc-200"><span className="font-bold italic ">shawty</span> - url shawtner</h1>
        <input type="text"
          placeholder="enter your url"
          className="border border-zinc-400 w-full outline-0 p-3 rounded-lg"
          value={url}
          onChange={(e)=> setUrl(e.target.value)}
        />
        <button className="px-4 py-3 rounded-lg text-zinc-400 bg-zinc-900 w-full hover:bg-zinc-800 cursor-pointer hover:text-zinc-200">shawten</button>



      </div>
    </main>

  );
}
