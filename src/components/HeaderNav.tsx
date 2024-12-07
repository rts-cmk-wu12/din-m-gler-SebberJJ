import Image from "next/image";
import Link from "next/link";

export default function HeaderNav() {
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
                <li className="hover:text-orange-400">
                    <Link href="/favorit">Mine favoritter</Link>
                </li>
                <li className="hover:text-orange-400">
                    <Link href="/contact">Kontakt os</Link>
                </li>
            </ul>
        </nav>
    )
}