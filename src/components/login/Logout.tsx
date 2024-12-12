"use client"

import Link from "next/link";
import { deleteCookie } from 'cookies-next/client';

export default function Logout() {
    function HandleLogout() {
        deleteCookie("dm_userid")
        deleteCookie("dm_token")

        window.location.reload()
    }

    return (
        <Link className="text-white hover:text-orange-400" href="/" onClick={HandleLogout}>Log ud</Link>
    )
}