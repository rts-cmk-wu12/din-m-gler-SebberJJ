import Image from "next/image";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";


export default async function HeaderNav() {
    const userid = await getCookie("dm_userid", { cookies })
    console.log(userid)

    return (
        <nav className="flex w-full justify-around items-center h-16 border px-32">
            <Link href="/">
                <Image src="/logo.png" alt="DinMægler Logo" width={200} height={200} />
            </Link>
            <ul className="flex items-center gap-10">
                <li className="hover:text-orange-400">
                    <Link href="/houses">Boliger til salg</Link>
                </li>
                <li className="hover:text-orange-400">
                    <Link href="/agents">Mæglere</Link>
                </li>
                {userid ? (
                    <li className="hover:text-orange-400">
                        <Link href="/favorites">Mine favoritter</Link>
                    </li>
                ) : (
                    <></>
                )}
                <li className="hover:text-orange-400">
                    <Link href="/contact">Kontakt os</Link>
                </li>
            </ul>
        </nav>
    )
}