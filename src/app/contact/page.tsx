import Headline from "@/components/Headline";
import ContactBox from "@/components/contactUs/ContactBox";
import Image from "next/image";

export default function contact() {
  return (
    <>
      <Headline title="Kontakt os" />
      <div className="flex justify-center items-center w-full px-4 py-12">
        <div className="flex gap-8 pb-6 items-center justify-center">
          <section>
            <div className="flex flex-col w-4/6">
              <h2 className="text-2xl font-semibold mb-2">
                Vi sidder klar til at besvare dine spørgsmål
              </h2>
              <p className="text-gray-600 mb-8">
                Der kan opstå tvivl om mange ting og man gerne vil eller er i
                gang med at sælge sin bolig. Vores medarbejdere står klar alle
                ugens dage til at svare på dine spørgsmål.
              </p>
            </div>
            <div className="flex gap-8">
              <form className="space-y-6 border p-8 w-2/4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="text-sm">
                      Navn
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Indtast dit navn"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Indtast din email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm">
                    Emne
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Indtast emne"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm">
                    Besked
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
                    placeholder="Indtast din besked..."
                    required
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="terms" className="mt-1" required />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbreve
                  </label>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-950 text-white rounded hover:bg-[#0f1935] transition-colors"
                >
                  Send besked
                </button>
              </form>
              <ContactBox />
            </div>
          </section>
        </div>
      </div>
      <Image
        src="/map.png"
        width={1920}
        height={1080}
        alt="test"
        className="w-full h-[30rem]"
      />
    </>
  )
}