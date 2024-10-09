"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { DbAPI } from "@/constants/DsAPI";

export default function Home() {

  interface IData {
    name: string;
    ki: string;
    gender: string;
    image: string;
  }

  const [character, setCharacter] = useState<String>("");
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    DbAPI.get(`/characters`).then((res) => {
      if (character === "") {
        setData(res.data.items)
        console.log(data)
      } else {
        setData(res.data)
        console.log(data)
      }
    })
  }, [])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Batata</h1>

        {data.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.name}</h2>
              <h2>{item.gender}</h2>
              {/* <Image src={item.image} alt={item.name} width={250} height={250}></Image> */}
            </div>
          )
        }) }
      </main>

      
    </div>
  );
}
