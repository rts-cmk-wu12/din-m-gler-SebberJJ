import Headline from "@/components/houses/Headline";
import HomesForSale from "@/components/houses/HomesForSale";

export default function Houses() {
    return (
        <main className="flex flex-col justify-center items-center">
            <Headline />
                <HomesForSale />
        </main>
    )
}