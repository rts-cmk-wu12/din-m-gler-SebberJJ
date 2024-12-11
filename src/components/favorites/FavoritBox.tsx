import Image from "next/image";

export default function FavoritBox() {
    return (
        <article className="border p-4 flex items-center mt-10 w-4/6">
        <figure className="w-1/4">
          <Image
            src="/frontpageimage.png" // Udskift med det korrekte billede.
            alt="House"
            className="object-cover"
            width={275}
            height={250}
          />
        </figure>
        <div className="w-3/4 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Klosterengen 234</h2>
            <p className="text-gray-500">4000 Roskilde</p>
            <p className="font-bold text-black">
              Villa <span className="text-gray-500 font-normal">· Ejerudgift: 4.567 kr.</span>
            </p>
          </div>
          <div className="text-center">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">A</span>
            <p className="text-gray-500 mt-1">4 værelser · 156 m²</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-black">Kr. 4.567.890</p>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md mt-2">Fjern fra favoritter</button>
          </div>
        </div>
      </article>
    )
}