"use client"

import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { z } from "zod";

const emailSchema = z.string().email("Ugyldig emailadresse")

export default function Newsletter() {
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const emailValidation = emailSchema.safeParse(email)
    if (!emailValidation.success) {
        setMessage(emailValidation.error.issues[0].message)
        return
    }

    try {
      const response = await fetch("https://dinmaegler.onrender.com/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setMessage("Du er nu tilmeldt nyhedsbrevet!")
        setEmail("")
      } else {
        setMessage(`Denne mail er allerede tilmeldt nyhedsbrevet!`)
      }
    } catch (error) {
      console.error("Error when subscribing to newsletter:", error)
    }
  }
    return (
        <div className="flex justify-center items-center gap-20 w-full bg-cover bg-center py-16">
            <h2 className="text-white font-bold text-xl w-3/12">Tilmeld dig vores nyhedsbrev og 
            hold dig opdateret på boligmarkedet</h2>
            <div className="flex flex-col justify-center items-center">

            <form className="flex item-center" onSubmit={handleSubmit} noValidate>
                <input
                    className="py-4 pl-2 pr-2 w-[17rem] rounded-l-md text-lg"
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Indtast din email adresse"
                    onChange={(e) => setEmail(e.target.value)} />
                <button className="bg-white py-2 pr-4 rounded-r-md">
                    <FaArrowRight size={32} color="black"/>
                </button>
            </form>
            {message && (
                <p className="mt-4 text-sm text-red-500">{message}</p>
            )}
            </div>
        </div>
    )
}