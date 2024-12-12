export default function Search() {
    return (
        <div className="flex flex-col justify-center w-2/5 bg-white h-40 rounded-sm">
        <h2 className="text-blue-950 text-lg font-bold px-10 pb-1">Søg blandt 158 boliger til salg i 74 butikker</h2>
            <form className="flex flex-col w-full">
                <label className="text-black px-10 pb-2">Hvad skal din næste bolig indeholde</label>
                <div className="flex items-center justify-center w-full gap-2">
                    <input className="h-10 w-3/4 px-3 border" type="search" placeholder="Søg på fx glaskeramisk komfur, brygges, kælder eller lignende"/>
                    <button className="bg-blue-950 h-10 px-10 text-white hover:text-orange-400">Søg</button>
                </div>
            </form>
        </div>
    )
}