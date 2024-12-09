import { FaPaperPlane, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactBox() {
  return (
    <div className="flex flex-col gap-10 border h-fit p-10 w-2/6">
      <div className="flex flex-col items-center justify-center gap-2 border-b-2 pb-5">
        <div className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full bg-blue-950 rotate-90">
          <FaPhone size={20} color="white" />
        </div>
        <h2 className="text-sm font-medium">Ring til os</h2>
        <p className="text-gray-600">+45 7070 4000</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 border-b-2 pb-5">
        <div className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full bg-blue-950">
          <FaPaperPlane size={20} color="white" />
        </div>
        <h2 className="text-sm font-medium">Send en mail</h2>
        <p className="text-gray-600">4000@dinmaegler.dk</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full bg-blue-950">
          <FaLocationDot size={20} color="white" />
        </div>
        <h2 className="text-sm font-medium">Besøg butikken</h2>
        <p className="text-gray-600">Stændertorvet 78,</p>
        <p className="text-gray-600">4000 Roskilde</p>
      </div>
    </div>
  )
}