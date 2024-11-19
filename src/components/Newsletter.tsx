import { FaArrowRight } from "react-icons/fa6";

export default function Newsletter() {
    return (
        <div className="flex justify-center items-center gap-6 w-full bg-cover bg-center py-16">
            <h2 className="text-white font-bold text-2xl w-2/6">Tilmeld dig vores nyhedsbrev og 
            hold dig opdateret på boligmarkedet</h2>
            <div className="flex item-center">
                <input className="py-4 pl-2 pr-36 rounded-l-md outline-none text-lg" type="email" placeholder="Indtast din email adresse"/>
                <button className="bg-white py-2 pr-4 rounded-r-md">
                    <FaArrowRight size={32} color="black"/>
                </button>
            </div>
        </div>
    )
}