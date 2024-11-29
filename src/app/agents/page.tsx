"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Headline from "@/components/Headline";

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

export default function HomesForSale() {
    const [agents, setAgents] = useState<Agent[]>([])

    const fetchAgents = async () => {
        try {
            const result = await fetch("https://dinmaegler.onrender.com/agents")
            const data: Agent[] = await result.json()
            console.log(data)
            setAgents(data)
        } catch (error) {
            console.error("Failed to fetch dinmaegler agents api:", error)
        }
    }

    useEffect(() => {
        fetchAgents()
    }, [])

    return (
        <div>
            <Headline title="Medarbejdere i Roskilde"/>
            <div className="flex flex-col w-full items-center justify-center">
                <section className="grid grid-cols-3 grid-rows-2 gap-4 justify-center items-center pt-24">
                    {agents.map((agent: Agent) => (
                        <article key={agent.name} className="flex flex-col bg-white w-fit pb-4 border">
                            <figure>
                                <Image
                                    src={agent.image.url}
                                    alt={agent.name + " billede"}
                                    width={350}
                                    height={350}
                                />
                            </figure>
                            <figcaption className="pt-4">
                                <h3 className="font-bold px-4 text-center">{agent.name}</h3>
                            </figcaption>
                            <div className="flex flex-col px-4 pb-3">
                                <p className="text-center text-gray-500">{agent.title}</p>
                            </div>
                            <div className="w-full flex items-center justify-center gap-4">
                                <IoMail size={18} />
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </div>
    )
}