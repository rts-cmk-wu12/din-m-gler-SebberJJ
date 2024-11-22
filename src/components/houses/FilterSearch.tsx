export default function FilterSearch() {
    return (
        <div className="flex flex-col w-full items-center justify-center pt-20">
            <h2 className="text-blue-950 text-lg font-bold pr-[43.8rem] pb-3">Søg efter dit drømmehus</h2>
            <div className="flex gap-x-10 w-full justify-center items-center">
                <div className="w-1/3 flex flex-col pb-1">
                    <label className="mb-2">Ejendomstype</label>
                    <select className="w-full border border-gray-300 rounded-md p-2">
                        <option value="">Ejendomstype</option>
                        <option value="sommerhus">Byhus</option>
                        <option value="sommerhus">Villa</option>
                        <option value="lejlighed">Lejlighed</option>
                        <option value="sommerhus">Ejerlejlighed</option>
                    </select>
                </div>
                <div className="flex flex-col w-2/3">
                    <p>Pris-interval</p>
                    <input type="range" min="0" max="12000000" className="" />
                    <div className="flex justify-between items-center">
                        <p>0kr.</p>
                        <p>12.000.000 kr.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}