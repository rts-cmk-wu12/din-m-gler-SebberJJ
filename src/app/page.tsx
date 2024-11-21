import Article from "@/components/frontpage/Article";
import CoworkerContainer from "@/components/frontpage/CoworkerContainer";
import InfoCard from "@/components/frontpage/InfoCards";
import Newsletter from "@/components/frontpage/Newsletter";
import SearchContainer from "@/components/frontpage/SearchContainer";
import SelectedHomesContainer from "@/components/frontpage/SelectedHomesContainer";
import UpdateOnAppsContainer from "@/components/frontpage/UpdateOnAppsContainer";

export default function Home() {
  return (
    <>
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
      <section className="flex pt-16">
        <CoworkerContainer />
      </section>
      <section className="flex justify-center items-center bg-gray-800 w-full pt-16 mb-20">
        <UpdateOnAppsContainer />
      </section>
    </main>
    </>
  )
}