"use client"

import { PiImageLight } from "react-icons/pi";
import { IoLayersOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import Modal from "./Modal";
import { getCookie } from "cookies-next";

export interface ImageSource {
    name: string;
    size: number;
    url: string;
    formats: {
        thumbnail?: {
            url: string;
            width: number;
            height: number;
        };
    };
    width: number;
    height: number;
}

interface HouseDetailProps {
    id: string;
    address: string;
    by: string;
    price: number;
    images: ImageSource[];
}


export default function HouseDetail1(props: HouseDetailProps) {
    const [isModalOpen, setModalOpen] = useState(false)
    const [imageSrc, setImageSrc] = useState<ImageSource[] | null>(null)
    const token = getCookie("dm_token")
    const userid = getCookie("dm_userid")
    
    const handleOpenModal = () => {
      setImageSrc(props.images)
      setModalOpen(true)
    }
    
    const handleCloseModal = () => {
      setModalOpen(false)
    }

    async function addFavorit() {
            try {
                await fetch(
                    `https://dinmaegler.onrender.com/users/${userid}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            homes: [props.id],
                        }),
                    }
                )

            } catch (error) {
                console.error("Fail with adding house to your favorites:", error)
            }
            }

    return (
        <div className="flex justify-center items-center w-full py-2 gap-[19rem]">
            <Modal isOpen={isModalOpen} imageSrc={imageSrc} onClose={handleCloseModal} />
            <div className="flex flex-col">
                <p className="text-lg text-blue-950 font-bold">{props.address}</p>
                <p className="text-lg text-blue-950 font-bold">{props.by}</p>
            </div>
            <div className="flex gap-6">
                <button onClick={handleOpenModal}>
                    <PiImageLight size={36} />
                </button>
                <IoLayersOutline size={36} />
                <CiLocationOn size={36} />
                <button onClick={addFavorit} className="focus:text-red-400">
                    <CiHeart size={36} />
                </button>
            </div>
            <div>
                <p className="text-2xl text-blue-950 font-bold">Kr. {props.price.toLocaleString()}</p>
            </div>
        </div>
    )
}