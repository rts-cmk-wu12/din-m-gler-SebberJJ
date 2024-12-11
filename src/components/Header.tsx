import { FaRegPaperPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import HeaderNav from "./HeaderNav";
import Link from "next/link";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next/server";
import Logout from "./login/Logout";

export default async function Header()  {
    const userid = await getCookie("dm_userid", { cookies })

    return (
        <header className="flex flex-col w-full">
            <div className="flex flex-col justify-center">
            <div className="bg-blue-950 h-10 flex gap-4 justify-around">
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <FaRegPaperPlane color="white"/>
                        <a className="text-white hover:text-orange-400" href="mailto:4000@dinmaegler.dk">4000@dinmaegler.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt color="white" />
                        <a className="text-white hover:text-orange-400" href="tel:70704000">+45 7070 4000</a>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <FaUser color="white" />
                    {userid ? (
                        <Logout />
                    ) : (
                        <Link className="text-white hover:text-orange-400" href="/login">Login</Link>
                    )}
                </div>
            </div>
            <HeaderNav />
            </div>
        </header>
    )
}