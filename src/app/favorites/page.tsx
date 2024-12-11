import FavoritBox from "@/components/favorites/FavoritBox";
import Headline from "@/components/Headline";

export default function favorites() {
    return (
        <>
            <Headline title="Mine favoritboliger"/>
            <section className="flex flex-col items-center bg-gray-50 h-screen w-full">
                <FavoritBox />
            </section>
        </>
    )
}