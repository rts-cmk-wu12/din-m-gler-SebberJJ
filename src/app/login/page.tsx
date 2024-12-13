"use client"

import Link from "next/link";
import login from "@/components/login/lib/login";
import { redirect } from "next/navigation"
import { useActionState, useEffect } from "react"

interface FormState {
    success?: boolean;
    identifier?: {
      _errors: string[];
    };
    password?: {
      _errors: string[];
    };
  }
  

export default function Login() {
	const [formState, formAction] = useActionState<FormState>(login, null)

	useEffect(() => {
		if (!formState) return

		if (formState?.success !== true ) return

		redirect("/")
	}, [formState])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-2/6 bg-white shadow-md rounded-md p-24">
          <h1 className="text-2xl font-bold text-center pb-6">Log ind på din konto</h1>
          <form action={formAction} noValidate>
            <div className="pb-4">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="identifier"
                id="email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
                autoComplete="email"
              />
              <span>{formState?.identifier?._errors.map(error => error)}</span>
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password"
                autoComplete="current-password"
              />
              <span>{formState?.password?._errors.map(error => error)}</span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-950 text-white py-2 px-4 rounded-sm hover:text-orange-400"
            >
              Log ind
            </button>
          </form>

          <p className="pt-5">Log ind med</p>
  
          <div className="flex justify-around pt-5 gap-4">
            <button
              type="button"
              className="flex items-center justify-center w-1/3 bg-orange-700 text-white py-2 px-4 rounded-sm hover:bg-red-700 transition"
            >
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-1/3 bg-blue-600 text-white py-2 px-4 rounded-sm hover:bg-blue-700 transition"
            >
              Facebook
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-1/3 bg-gray-800 text-white py-2 px-4 rounded-sm hover:bg-gray-900 transition"
            >
              Twitter
            </button>
          </div>
  
          <p className="text-center mt-6 text-sm text-gray-600">
            Har du ikke en konto?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Opret bruger.
            </Link>
          </p>
        </div>
      </div>
    )
}