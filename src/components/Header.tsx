import { FaRegPaperPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import HeaderNav from "./HeaderNav";

export default function Header()  {
    return (
        <header className="flex flex-col w-full">
            <div className="flex flex-col justify-center">

            <div className="bg-blue-950 h-10 flex gap-4 justify-around">
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <FaRegPaperPlane color="white"/>
                        <p className="text-white">4000@dinmaegler.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt color="white" />
                        <p className="text-white">+45 7070 4000</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <FaUser color="white" />
                    <p className="text-white">Login</p>
                </div>
            </div>
            <HeaderNav />
            </div>
        </header>
    )
}