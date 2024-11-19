import Image from "next/image";
import ArticleDetails from "./ArticleDetails";

export default function Article() {
    return (
        <div className="flex flex-col justify-center items-center w-2/4 mt-20 pb-16">
            <article className="flex w-full gap-16">
                <figure>
                    <Image src="/articleImage.png" alt="Article billede" width={550} height={550}/>
                </figure>
                <div className="flex flex-col">
                    <h2 className="text-blue-950 font-bold text-2xl w-80 pb-6">Vi har fulgt danskerne hjem i snart 4 årtier</h2>
                    <h3 className="text-blue-950 font-semibold text-lg pb-4">Det synes vi siger noget om os!</h3>
                    <p className="pb-4 w-2/3 text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
                    <p className="w-2/3 text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <ArticleDetails />
                </div>
            </article>
        </div>
    )
}