"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { BiBluetooth } from "react-icons/bi";
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

      const energyLabel: Record<string, string> = {
        A: "bg-green-600",
        B: "bg-yellow-300",
        C: "bg-orange-400",
        D: "bg-red-500",
      };

    return (
        <section className="grid grid-cols-2 grid-rows-4 gap-4 justify-center items-center pt-24">
            {houses.map((house: Home) => (
                <article key={house.id} className="flex flex-col bg-white w-fit pb-4 shadow-md">
                <figure>
                    <Image src={house.images[0].url} alt={house.adress1} width={450} height={267} style={{ width: "450px", maxHeight: "267px" }} />
                </figure>
                <figcaption className="py-2">
                    <h3 className="font-bold px-4">{house.adress1}</h3>
                </figcaption>
                <div className="flex flex-col gap-2 px-4 py-2">
                    <span>{house.postalcode} {house.city}</span>
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
                    <span className={`px-2 ${energyLabel[house.energylabel]} text-white`}>
                      {house.energylabel}
                    </span>
                    <p className="flex items-center">{house.rooms} værelser <LuDot /> {house.livingspace} m2</p>
                    </div>
                    <p className="font-bold text-lg">Kr. {house.price}</p>
                </div>
                </article>
            ))}
          </section>
    )
}