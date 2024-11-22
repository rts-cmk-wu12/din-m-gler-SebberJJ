"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { LuDot } from "react-icons/lu";

interface Agent {
    name: string;
    title: string;
    phone: string;
    email: string;
    image: {
      url: string;
      alt: string;
    };
  }
  
  interface FloorPlan {
    name: string;
    size: number;
    url: string;
    formats: {
      thumbnail?: {
        url: string;
        width: number;
        height: number;
      };
    };
    width: number;
    height: number;
  }
  
  interface Image {
    name: string;
    size: number;
    url: string;
    formats: {
      thumbnail?: {
        url: string;
        width: number;
        height: number;
      };
    };
    width: number;
    height: number;
  }
  
  interface Home {
    id: string;
    adress1: string;
    agent: Agent;
    basementsize: number;
    built: number;
    city: string;
    cost: number;
    description: string;
    energylabel: string;
    floorplan: FloorPlan;
    gross: number;
    images: Image[];
    lat: number;
    livingspace: number;
    long: number;
    lotsize: number;
    netto: number;
    payment: number;
    postalcode: number;
    price: number;
    remodel: number;
    rooms: string;
    type: string;
  }  

export default function HomesForSale() {
    const [houses, setHouses] = useState<Home[]>([])
    const fetchCategories = async () => {
        try {
          const result = await fetch("https://dinmaegler.onrender.com/homes")
          const data: Home[] = await result.json()
          setHouses(data)
          console.log(data)
        } catch (error) {
          console.error('Failed to fetch dinmaegler api:', error)
        }
      }

      useEffect(() => {
        fetchCategories()
      }, [])

    return (
        <section className="grid grid-cols-2 grid-rows-4 gap-4 justify-center items-center pt-24">
            {houses.map((house: Home) => (
                <article key={house.id} className="flex flex-col bg-white w-fit pb-4 shadow-md">
                <figure>
                    <Image src={house.images[0].url} alt={house.adress1} width={400} height={267} style={{ width: "400px", maxHeight: "267px" }} />
                </figure>
                <figcaption className="py-2">
                    <h3 className="font-bold px-4">{house.adress1}</h3>
                </figcaption>
                <div className="flex flex-col gap-2 px-4 py-2">
                    <span>4000 Roskilde</span>
                    <div className="flex flex-row w-full">
                            <strong className="flex items-center">
                                {house.type} <LuDot /> 
                            </strong>
                            <p>
                                Ejerudgift: {house.cost} kr.
                            </p>
                    </div>
                </div>
                <div className="flex items-center justify-between px-4 pt-4 border-t-2">
                    <div className="flex items-center justify-center gap-4">
                    <span className="px-2 bg-yellow-300 text-white">A</span>
                    <p>5 værelser * 156 m2</p>
                    </div>
                    <p className="font-bold text-lg">Kr. 4.567.432</p>
                </div>
                </article>
            ))}
          </section>
          
    )
}