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
    description: string;
    agent: Agent;
}

export default function HouseDetail3(props: HouseDetailProps) {
    return (
        <div className="flex w-full pt-12 pb-20 justify-center pl-[4.8rem]">
        <article className="w-[30%] pr-12">
            <h2 className="text-2xl font-semibold pb-4">Beskrivelse</h2>
            <p className="text-base leading-7">{props.description}</p>
        </article>
        <section className="w-[38.5%]">
            <h3 className="text-2xl font-semibold pb-4">Ansvarlig mægler</h3>
            <div className="flex border py-6 pl-6">
                <Image className="w-[16rem] h-[18rem] object-cover mr-2" src={props.agent.image.url} alt="tetst" width={200} height={200}/>
                <div className="flex flex-col p-4 gap-4">
                    <span className = "text-2xl font-semibold">{props.agent.name}</span>
                    <span className="text-gray-400">{props.agent.title}</span>
                    <span className="border-b-2 border-gray-300 w-16"></span>
                    <div className="flex items-center gap-2">
                        <FaPaperPlane size={24}/>
                        <a className="hover:text-orange-400 text-base"
                            href={`tel:${props.agent.phone}`}>
                            {props.agent.phone}
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhone size={24}/>
                        <a className="hover:text-orange-400 text-base"
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