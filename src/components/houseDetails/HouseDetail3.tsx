import Image from "next/image";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

interface Agent {
    name: string;
    title: string;
    phone: string;
    email: string;
    image: {
        url: string;
    };
}

interface HouseDetailProps {
    id: string;
    adress1: string;
    basementsize: number;
    built: number;
    city: string;
    cost: number | string;
    description: string;
    energylabel: string;
    gross: number | string;
    lat: number;
    livingspace: number;
    long: number;
    lotsize: number;
    netto: number | string;
    payment: number | string;
    postalcode: number;
    price: number | string;
    remodel: number;
    rooms: string;
    type: string;
    agent: Agent;
}

export default function HouseDetail3(props: HouseDetailProps) {
    return (
        <div className="flex w-full pt-12 pb-20 justify-center pl-[4.8rem]">
        <article className="w-1/3 pr-12">
            <h2 className="text-2xl font-semibold pb-4">Beskrivelse</h2>
            <p className="text-base leading-7">{props.description}</p>
        </article>
        <section className="w-2/6">
            <h3 className="text-2xl font-semibold pb-4">Ansvarlig mægler</h3>
            <div className="flex border p-8">
                <Image className="w-[16rem] h-[18rem] object-cover mr-2" src={props.agent.image.url} alt="tetst" width={200} height={200}/>
                <div className="flex flex-col p-4 gap-4">
                    <span className = "text-2xl font-semibold">{props.agent.name}</span>
                    <span className="text-gray-400">{props.agent.title}</span>
                    <div className="border-b-[0.18rem] border-gray-300 w-16"></div>
                    <div className="flex items-center gap-2">
                        <FaPaperPlane size={24}/>
                        <a className="hover:text-orange-400 text-lg"
                            href={`tel:${props.agent.phone}`}>
                            {props.agent.phone}
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhone size={24}/>
                        <a className="hover:text-orange-400 text-lg"
                            href={`mailto:${props.agent.email}`}>
                            {props.agent.email}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}