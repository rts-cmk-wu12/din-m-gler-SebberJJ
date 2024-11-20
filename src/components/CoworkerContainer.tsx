import Coworkers from "./Coworkers";

export default function CoworkerContainer() {
    return (
        <div className="flex flex-col justify-center items-center gap-8 mb-10">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-blue-950 text-2xl font-bold pb-4">Mød vores engagerede medarbejdere</h2>
                <p className="w-3/5 text-center">Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.</p>
            </div>
            <div className="flex gap-10">
                <Coworkers />
                <Coworkers />
                <Coworkers />
            </div>
        </div>
    )
}