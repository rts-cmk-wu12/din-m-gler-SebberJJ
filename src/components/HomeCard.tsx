"use client"

import { useHouse } from "@/context/fetchHouseProvider";
import Image from "next/image";
import Link from "next/link";

export default function HomeCard() {
    const houseForSale = useHouse()

    const energyLabel: Record<string, string> = {
        A: "bg-green-600",
        B: "bg-yellow-300",
        C: "bg-orange-400",
        D: "bg-red-500",
      }

    return (
        <>
            {houseForSale.slice(0, 4).map((home: any) => (
                <article key={home.id} className="flex flex-col bg-white w-fit pb-4 shadow-md">
                    <Link href={`/house/` + home.id}>
                        <figure>
                            <Image src={home.images[0].url} alt="hus til salg billede" width={425} height={200} className="max-h-[200px]" />
                        </figure>
                        <figcaption className="py-1">
                            <h3 className="font-bold px-4">{home.adress1}</h3>
                        </figcaption>
                    </Link>
                    <div className="flex flex-col gap-4 px-4 py-2">
                        <span>{home.postalcode} {home.city}</span>
                        <p>
                            <strong>{home.type} •</strong> Ejerudgift: {home.cost.toLocaleString()} kr.
                        </p>
                    </div>
                    <div className="flex items-center justify-between px-4 pt-4 border-t-2">
                        <div className="flex items-center justify-center gap-4">
                        <span
                            className={`px-2 ${
                                energyLabel[home.energylabel]
                            } text-white`}
                            >
                            {home.energylabel}
                        </span>
                            <p>
                                {home.rooms} værelser • {home.livingspace} m²
                            </p>
                        </div>
                        <p className="font-bold text-lg">Kr. {home.price.toLocaleString()}</p>
                    </div>
                </article>
            ))}
        </>
    )
}