import Headline from "@/components/Headline";
import HomesForSale from "@/components/houses/HomesForSale";

export default function Houses() {
    return (
        <main className="flex flex-col justify-center items-center">
            <Headline title="Boliger til salg" />
            <section className="flex flex-col justify-center items-center">
                <HomesForSale />
            </section>
        </main>
    )
}