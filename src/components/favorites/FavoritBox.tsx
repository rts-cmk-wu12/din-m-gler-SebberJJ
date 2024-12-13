"use client";

import Image from "next/image";
import Link from "next/link";

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
  onRemove: (id: string) => void;
}

export default function FavoritBox({
  id,
  adress1,
  images,
  city,
  type,
  cost,
  energylabel,
  rooms,
  lotsize,
  price,
  onRemove
}: Home) {

  return (
    <article className="border p-4 flex mt-10 w-4/6 shadow-md rounded-sm">
      <figure className="w-1/4">
        <Image
          src={images[0].url}
          alt={adress1}
          className="object-cover"
          width={275}
          height={250}
        />
      </figure>
      <div className="w-3/4 flex justify-between">
        <div className="flex flex-col gap-4">
          <Link href={`house/` + id}>
            <h2 className="text-lg font-semibold">{adress1}</h2>
          </Link>
          <p className="text-gray-500">{adress1}, {city}</p>
          <p className="font-bold text-black">
            {type} <span className="text-gray-500 font-normal">· Ejerudgift: {cost.toLocaleString()} Kr.</span>
          </p>
        </div>
        <div className="flex text-center gap-4">
          <span className="bg-green-400 text-white px-2 py-1 text-sm font-medium h-fit">{energylabel}</span>
          <p className="text-gray-500 mt-1">{rooms} værelser · {lotsize}</p>
        </div>
        <div className="flex flex-col text-right items-end justify-between pr-5">
          <p className="text-xl font-semibold text-black">Kr. {price.toLocaleString()}</p>
          <button
            className="bg-blue-950 text-white py-2 px-4 h-fit hover:text-orange-400"
            onClick={() => onRemove(id)}
          >
            Fjern fra favoritter
          </button>
        </div>
      </div>
    </article>
  );
}
