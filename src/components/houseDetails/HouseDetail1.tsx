import { PiImageLight } from "react-icons/pi";
import { IoLayersOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

interface HouseDetailProps {
    address: string;
    by: string;
    price: string; //Jeg har sta det til en string fordi jeg laver prisen om så den ser pæn ud med toLocalString() og det er ikke et number, men en string
}

export default function HouseDetail1(props: HouseDetailProps) {
    return (
        <div className="flex justify-around px-60 items-center py-2">
            <div className="flex flex-col">
                <p className="text-lg text-blue-950 font-bold">{props.address}</p>
                <p className="text-lg text-blue-950 font-bold">{props.by}</p>
            </div>
            <div className="flex gap-6">
                <PiImageLight size={36}/>
                <IoLayersOutline size={36}/>
                <CiLocationOn size={36}/>
                <CiHeart size={36}/>
            </div>
            <div>
                <p className="text-2xl text-blue-950 font-bold">{props.price}</p>
            </div>
        </div>
    )
}