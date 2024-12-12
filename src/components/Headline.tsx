interface HeadlineProps {
    title: string;
}

export default function Headline(props:HeadlineProps) {
    return (
        <div className="w-full py-8 flex justify-center items-center bg-[url('/headlineBG.png')]">
            <h1 className="text-white font-bold text-3xl">{props.title}</h1>
        </div>
    )
}