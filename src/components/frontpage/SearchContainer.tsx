import Search from "./Search";

export default function SearchContainer() {
    return (
        <div className="w-full h-[65vh] flex flex-col justify-center items-center gap-6 bg-no-repeat bg-[url('/frontpageImage.png')] bg-cover bg-center">
            <h2 className="text-white font-bold text-3xl">Søg efter drømmebolig</h2>
            <Search />
        </div>
    )
}