import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Newsletter() {
    return (
        <div className="flex justify-center items-center gap-6 w-full bg-cover bg-center py-16">
            <h2 className="text-white font-bold text-xl w-3/12">Tilmeld dig vores nyhedsbrev og 
            hold dig opdateret på boligmarkedet</h2>
            <div className="flex item-center">
                <input className="py-4 pl-2 pr-2 w-[17rem] rounded-l-md outline-none text-lg" type="email" placeholder="Indtast din email adresse"/>
                <button className="bg-white py-2 pr-4 rounded-r-md">
                    <FaArrowRight size={32} color="black"/>
                </button>
            </div>
        </div>
    )
}