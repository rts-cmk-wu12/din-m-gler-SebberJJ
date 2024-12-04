import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import LayoutBy from "./LayoutBy";
import QuickLinks from "./QuickLinks";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="container mx-auto px-4 py-12 pl-56">
        <div className="flex flex-col gap-12">
          <div className="space-y-4">
          <Image src="/logo.png" alt="DinMægler Logo" width={200} height={200} />
            <p className="w-3/5 text-gray-600">
              There are many variations of passages of Lorem ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words.
            </p>
          </div>
          <div className="flex flex-wrap gap-12 lg:gap-32">
            <div className="space-y-6 rounded p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-950 text-white">
                    <FaPhoneAlt size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Ring til os</div>
                  <a href="tel:+4570704000" className="hover:text-orange-400 hover:underline">
                    +45 7070 4000
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-950 text-white">
                <FaPaperPlane size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Send en mail</div>
                  <a href="mailto:4000@dinmaegler.com" className="hover:text-orange-400 hover:underline">
                    4000@dinmaegler.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-950 text-white">
                <FaLocationDot size={24}/>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Besøg butikken</div>
                  <address className="not-italic">
                    Stændertorvet 78, 4000 Roskilde
                  </address>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-600">
                Din Mægler Roskilde er din boligbutik i lokalområdet.
              </p>
            </div>
            <QuickLinks />
          </div>
        </div>
      </div>
      <LayoutBy />
    </footer>
  )
}