"use client";

import { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import { LuDot } from "react-icons/lu";
import Link from "next/link";
import { useHouse } from "@/context/fetchHouseProvider";

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
    const houses = useHouse()
    const [priceRange, setPriceRange] = useState<number>(12000000) // Max pris er sat til 12 millioner ligesom figmaen er.

    const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPriceRange(Number(event.target.value))
    }

    const filteredHouses = houses.filter((house) => house.price <= priceRange)

    const energyLabel: Record<string, string> = {
        A: "bg-green-600",
        B: "bg-yellow-300",
        C: "bg-orange-400",
        D: "bg-red-500",
    }

    return (
        <div>
            <div className="flex flex-col w-full items-center justify-center pt-20">
            <h2 className="text-blue-950 text-lg font-bold pr-[43.8rem] pb-3">Søg efter dit drømmehus</h2>
            <div className="flex gap-x-10 w-full justify-center items-center">
                <div className="w-1/3 flex flex-col pb-1">
                    <label className="mb-2">Ejendomstype</label>
                    <select className="w-full border border-gray-300 rounded-md p-2">
                        <option value="">Ejendomstype</option>
                        <option value="sommerhus">Byhus</option>
                        <option value="sommerhus">Villa</option>
                        <option value="lejlighed">Lejlighed</option>
                        <option value="sommerhus">Ejerlejlighed</option>
                    </select>
                </div>
                <div className="flex flex-col w-2/3">
                    <p>Pris-interval</p>
                    <input onChange={handlePriceChange} type="range" value={priceRange} min="0" max="12000000" className="" />
                    <div className="flex justify-between items-center">
                        <p>0kr.</p>
                        <p>{priceRange.toLocaleString()} kr.</p>
                    </div>
                </div>
            </div>
            </div>
            <section className="grid grid-cols-2 gap-4 justify-center items-center pt-24">
                {filteredHouses.map((house) => (
                    <article key={house.id} className="flex flex-col bg-white w-fit pb-4 shadow-md">
                      <Link href={`/house/${house.id}`}>
                        <figure>
                            <Image
                                src={house.images[0]?.url || ""}
                                alt={house.adress1}
                                width={450}
                                height={267}
                                style={{ width: "450px", maxHeight: "267px" }}
                                />
                        </figure>
                        <figcaption className="py-2">
                            <h3 className="font-bold px-4">{house.adress1}</h3>
                        </figcaption>
                                </Link>
                        <div className="flex flex-col gap-2 px-4 py-2">
                            <span>
                                {house.postalcode} {house.city}
                            </span>
                            <div className="flex flex-row w-full">
                                <strong className="flex items-center">
                                    {house.type} <LuDot />
                                </strong>
                                <p>Ejerudgift: {house.cost} kr.</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-4 pt-4 border-t-2">
                            <div className="flex items-center justify-center gap-4">
                                <span
                                    className={`px-2 ${energyLabel[house.energylabel]} text-white`}
                                >
                                    {house.energylabel}
                                </span>
                                <p className="flex items-center">
                                    {house.rooms} værelser <LuDot /> {house.livingspace} m2
                                </p>
                            </div>
                            <p className="font-bold text-lg">
                                Kr. {house.price.toLocaleString()}
                            </p>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    )
}