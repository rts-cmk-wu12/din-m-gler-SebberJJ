import Image from "next/image";

export default function ArticleDetails() {
    return (
        <div className="flex items-center gap-28 mt-5">
            <div className="flex gap-5">
                <Image src="/house1.svg" alt="house Sold SVG" height={32} width={32} />
                <div>
                    <p className="text-blue-950 font-bold">4829</p>
                    <p>Boliger solgt</p>
                </div>
            </div>
            <div className="flex gap-5">
                <Image src="/house2.svg" alt="house Sold SVG" height={32} width={32} />
                <div>
                    <p className="text-blue-950 font-bold">158</p>
                    <p>Boliger til salg</p>
                </div>
            </div>
        </div>
    )
}