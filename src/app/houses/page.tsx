import FilterSearch from "@/components/houses/FilterSearch";
import Headline from "@/components/houses/Headline";
import HomesForSale from "@/components/houses/HomesForSale";

export default function Houses() {
    return (
        <main className="flex flex-col justify-center items-center">
            <Headline />
            <section className="flex flex-col justify-center items-center">
                <FilterSearch />
                <HomesForSale />
            </section>
        </main>
    )
}