"use server"
import { cookies } from "next/headers"
import { z } from "zod"

interface FormState {
    success?: boolean;
    identifier?: {
      _errors: string[];
    };
    password?: {
      _errors: string[];
    };
  }
  

export default async function login(
    state: FormState,
    formData: FormData
  ): Promise<FormState | { success: boolean }> {
    const { identifier, password } = Object.fromEntries(formData.entries()) as {
      identifier: string;
      password: string;
    };

	const cookieStore = await cookies()
	
	const schema = z.object({
		identifier: z.string().min(1, { message: "Feltet er påkrævet" }).email({ message: "Ugyldig email" }),
		password: z.string().min(1, { message: "Feltet er påkrævet" })
	})

	const result = schema.safeParse({ identifier, password })

	if (!result.success) return result.error.format()

	const response = await fetch("https://dinmaegler.onrender.com/auth/local", {
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify({
			identifier,
			password
		})
	})

	const data = await response.json()

	console.log(data)
	
	cookieStore.set("dm_token", data.jwt)
	cookieStore.set("dm_userid", data.user.id)

	return { success: true }

}