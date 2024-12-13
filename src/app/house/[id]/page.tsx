"use client"

import HouseDetail1 from "@/components/houseDetails/HouseDetail1";
import HouseDetail2 from "@/components/houseDetails/HouseDetail2";
import HouseDetail3 from "@/components/houseDetails/HouseDetail3";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Agent {
    name: string;
    title: string;
    phone: string;
    email: string;
    image: {
        url: string;
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

interface ImageSource {
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
    images: ImageSource[];
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

export default function House({ params }: { params: { id: string }; home: Home; }) {
    const [house, setHouse] = useState<Home | null>(null)

    const fetchHouse = async () => {
        try {
            const result = await fetch(`https://dinmaegler.onrender.com/homes/${params.id}`)
            const data: Home = await result.json()
            setHouse(data)
        } catch(error) {
            console.error("Failed to fetch dinmaegler api:", error)
        }
    }

    useEffect(() => {
        fetchHouse()
    }, [])

    return (
        <section className="flex flex-col w-full">
            {house ? (
                <>
                    <div className="flex">
                        <Image className="w-screen h-[30rem] object-cover object-bottom" src={house.images[0].url} alt={house.adress1} width={house.images[0].width} height={house.images[0].height} />
                    </div>
                    <HouseDetail1
                        address={house.adress1}
                        by={house.city + ` ${house.postalcode}`}
                        price={house.price}
                        images={house.images}
                        id={house.id} />
                    <HouseDetail2
                        id={house.id}
                        livingspace={house.livingspace}
                        lotsize={house.lotsize}
                        rooms={house.rooms}
                        basementsize={house.basementsize}
                        built={house.built}
                        remodel={house.remodel}
                        energylabel={house.energylabel}
                        payment={house.payment}
                        gross={house.gross}
                        netto={house.netto}
                        cost={house.cost}
                    />
                    <HouseDetail3
                        description={house.description}
                        agent={house.agent}
                    />
                </>
            ) : (
                <p>Indlæser husdata...</p>
            )}
        </section>
    )
}