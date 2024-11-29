interface HeadlineProps {
    title: string;
}

export default function Headline(props:HeadlineProps) {
    return (
        <div className="w-full py-8 bg-blue-950 flex justify-center items-center">
            <h1 className="text-white font-bold text-3xl">{props.title}</h1>
        </div>
    )
}