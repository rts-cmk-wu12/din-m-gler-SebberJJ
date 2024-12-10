import Image from "next/image";
import { CiHeart, CiLocationOn } from "react-icons/ci";
import { IoLayersOutline } from "react-icons/io5";
import { PiImageLight } from "react-icons/pi";
import { ImageSource } from "./HouseDetail1";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

interface ModalProps {
  isOpen: boolean;
  imageSrc: ImageSource[] | null;
  onClose: () => void;
}

export default function Modal({ isOpen, imageSrc, onClose }: ModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    if (!isOpen || !imageSrc) return null;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrc.length);
      };
    
      const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? imageSrc.length - 1 : prevIndex - 1
        );
      };

  return (
    <div
      className="flex flex-col items-center justify-center fixed inset-0 bg-black bg-opacity-90 z-50"
      onClick={onClose}
    >
    <div
        className="relative shadow-lg max-w-2/3"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={imageSrc[currentIndex].url}
          alt={`Preview billede ${currentIndex + 1}`}
          width={1080}
          height={720}
          className="rounded-md"
        />
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer">
          <button onClick={handlePrevious} className="text-white text-2xl">
            <FaArrowLeft color="black" size={36} />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
          <button onClick={handleNext} className="text-white text-2xl">
            <FaArrowRight color="black" size={36} />
          </button>
        </div>
      </div>
      <div className="flex gap-6 pt-6">
        <PiImageLight size={40} color="lightgray" />
        <IoLayersOutline size={40} color="lightgray" />
        <CiLocationOn size={40} color="lightgray" />
        <CiHeart size={40} color="lightgray" />
      </div>
    </div>
  )
}