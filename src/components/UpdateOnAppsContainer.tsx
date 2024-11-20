import Image from "next/image";
import GoogleAppleBtns from "./GoogleAppleBtns";

export default function UpdateOnAppsContainer() {
    return (
        <>
            <div className="flex flex-col gap-4 w-2/6 pb-16">
                <h2 className="text-white font-bold text-2xl w-2/4">Hold dig opdateret på salgsprocessen</h2>
                <p className="text-white w-3/4">Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.</p>
                <GoogleAppleBtns />
            </div>
            <Image src="/phone.png" alt="Telefon billede" width={300} height={300}/>
        </>
    )
}