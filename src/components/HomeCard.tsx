import Image from "next/image";

export default function HomeCard() {
    return (
        <article className="flex flex-col bg-white w-fit pb-4">
            <figure>
                <Image src="/houseForSale.png" alt="hus til salg billede" width={450} height={400}/>
            </figure>
            <figcaption className="py-2">
                <h3 className="font-bold px-4">Klostersengen 234</h3>
            </figcaption>
            <div className="flex flex-col gap-2 px-4 py-2">
                <span>4000 Roskilde</span>
                <p><strong>Villa *</strong> Ejerudgift: 4.253 kr.</p>
            </div>
            <div className="flex items-center justify-between px-4 pt-4 border-t-2">
                <div className="flex items-center justify-center gap-4">
                    <span className="px-2 bg-yellow-300 text-white">A</span>
                    <p>5 værelser * 156 m2</p>
                </div>
                <p className="font-bold text-lg">Kr. 4.567.432</p>
            </div>
        </article>
    )
}