"use client"
import FavoritBox from "@/components/favorites/FavoritBox";
import Headline from "@/components/Headline";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

interface Agent {
  name: string;
  title: string;
  phone: string;
  email: string;
  image: {
      url: string;
  };
}

interface FloorPlan {
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

interface ImageSource {
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

interface Home {
  id: string;
  adress1: string;
  agent: Agent;
  basementsize: number;
  built: number;
  city: string;
  cost: number;
  description: string;
  energylabel: string;
  floorplan: FloorPlan;
  gross: number;
  images: ImageSource[];
  lat: number;
  livingspace: number;
  long: number;
  lotsize: number;
  netto: number;
  payment: number;
  postalcode: number;
  price: number;
  remodel: number;
  rooms: string;
  type: string;
}

export default function Favorites() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [homesDetails, setHomesDetails] = useState<Home[]>([])
  const token = getCookie("dm_token")

  useEffect(() => {
    if (!token) return

    async function fetchFavorites() {
      try {
        const response = await fetch("https://dinmaegler.onrender.com/users/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        const data: any = await response.json()
        setFavorites(data.homes)
        fetchHomesData(data.homes)
      } catch (error) {
        console.error("Fail with fetching your favorites:", error)
      }
    }

    async function fetchHomesData(favoritesList: string[]) {
      try {
        const homesPromises = favoritesList.map((homeId) =>
          fetch(`https://dinmaegler.onrender.com/homes/${homeId}`, {
            method: "GET",
          }).then((response) => response.json())
        )
        const homesData: Home[] = await Promise.all(homesPromises)
        setHomesDetails(homesData)
      } catch (error) {
        console.error("Fail with fetching house data:", error)
      }
    }

    fetchFavorites()
  }, [token])

  function removeFavorite(id: string) {
    setFavorites((prevFavorites) => prevFavorites.filter((favId) => favId !== id))
    setHomesDetails((prevHomes) => prevHomes.filter((home) => home.id !== id))
  }

  return (
    <>
      <Headline title="Mine favoritboliger" />
      <section className="flex flex-col items-center bg-gray-50 min-h-screen w-full">
        {homesDetails.length > 0 ? (
          <>
            {homesDetails.map((home, index) => (
              <FavoritBox
                key={home.id || index}
                {...home}
                onRemove={removeFavorite}
              />
            ))}
          </>
        ) : (
          <p>Ingen favoritter fundet.</p>
        )}
      </section>
    </>
  )
}