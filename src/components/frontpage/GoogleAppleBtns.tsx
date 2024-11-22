import { FaApple } from "react-icons/fa";
import { PiGooglePlayLogoFill } from "react-icons/pi";

export default function GoogleAppleBtns() {
    return (
        <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-white text-gray-950 font-bold rounded-sm px-4 py-2">
            <PiGooglePlayLogoFill size={32}/>
            Google Play
        </button>
        <button className="flex items-center gap-2 border text-white font-bold rounded-sm px-4 py-2">
            <FaApple size={32} color="white"/>
            Apple Store
        </button>
    </div>
    )
}