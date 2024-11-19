import Article from "@/components/Article";
import InfoCard from "@/components/InfoCards";
import Newsletter from "@/components/Newsletter";
import SearchContainer from "@/components/SearchContainer";
import SelectedHomesContainer from "@/components/SelectedHomesContainer";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <SearchContainer />
      <section className="flex flex-col items-center">
        <Article />
        <InfoCard />
      </section>
      <section className="bg-gray-100 w-full flex justify-center items-center pt-20 mt-16 pb-20">
        <SelectedHomesContainer />
      </section>
      <section className="bg-gray-800 w-full">
        <Newsletter />
      </section>
    </main>
  )
}