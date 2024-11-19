import Image from "next/image";

export default function HeaderNav() {
    return (
        <nav className="flex w-full justify-around items-center h-16 border px-32">
            <Image src="/logo.png" alt="DinMægler Logo" width={200} height={200} />
            <ul className="flex items-center gap-10">
                <li>
                    <a>Boliger til salg</a>
                </li>
                <li>
                    <a>Mæglere</a>
                </li>
                <li>
                    <a>Mine favoritter</a>
                </li>
                <li>
                    <a>Kontakt os</a>
                </li>
            </ul>
        </nav>
    )
}