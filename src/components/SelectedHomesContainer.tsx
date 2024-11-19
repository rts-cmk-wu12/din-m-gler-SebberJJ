import HomeCard from "./HomeCard";

export default function SelectedHomesContainer() {
    return (
        <div className="flex flex-col justify-center items-center gap-12">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-blue-950 text-2xl font-bold pb-4">Udvalgte Boliger</h2>
                <p className="w-3/5 text-center">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
            </div>
            <div className="w-full grid grid-cols-2 grid-rows-2 gap-4">
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
            </div>
            <a href="#" className="bg-blue-950 text-white py-2 px-4">Se alle boliger</a>
        </div>
    )
}