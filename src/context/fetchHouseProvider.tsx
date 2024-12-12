"use client";

import { createContext, useContext, useState, useEffect } from "react";

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

const HouseContext = createContext<Home[]>([])

export const HouseProvider = ({ children }: { children: React.ReactNode }) => {
    const [houses, setHouses] = useState<Home[]>([])

    const fetchHouses = async () => {
        try {
            const result = await fetch(`https://dinmaegler.onrender.com/homes`)
            const data: Home[] = await result.json()
            console.log(data)
            setHouses(data)
        } catch (error) {
            console.error("Failed to fetch houses:", error)
        }
    }

    useEffect(() => {
        fetchHouses()
    }, [])

    return <HouseContext.Provider value={houses}>{children}</HouseContext.Provider>;
}

export const useHouse = () => useContext(HouseContext)