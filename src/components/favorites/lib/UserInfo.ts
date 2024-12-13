"use server"

import { getCookie } from "cookies-next/server";
import { cookies } from "next/headers";

export default async function UserInfo() {
    const token = getCookie("dm_token", { cookies })
    console.log(token)
    async function fetchUser() {
        try {
            const response = await fetch("https://dinmaegler.onrender.com/users/me", {
                "method": "GET",
                "headers": {
                    "Authorization": "Bearer" + token
                }
            })
            const data = await response.json()
            console.log(data)
        } catch(error) {
            console.error("fail with fetching user information API:", error)
        }
    }
    return fetchUser()
}