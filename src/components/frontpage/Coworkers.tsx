import Image from "next/image";
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Coworkers() {
    return (
        <>
            <article className="flex flex-col bg-white w-fit pb-4 border">
                <figure>
                    <Image src="/coworker.png" alt="medarbejder billede" width={250} height={250}/>
                </figure>
                <figcaption className="pt-4">
                    <h3 className="font-bold px-4 text-center">Grant Marshall</h3>
                </figcaption>
                <div className="flex flex-col px-4 pb-3">
                    <p className="text-center text-gray-500">Ejendomsmægler, MDMS</p>
                </div>
                    <div className="w-full flex items-center justify-center gap-4">
                        <IoMail size={18} />
                        <FaLinkedinIn size={18} />
                    </div>
            </article>
        </>
    )
}