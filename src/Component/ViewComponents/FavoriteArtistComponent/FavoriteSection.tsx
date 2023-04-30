import { useState } from "react"
import { GetAllSearchData } from "../../lib/FetchData";

export function FavoriteSection(){
    const [favoriteArtist, setFavoriteArtists]= useState<string[]>(JSON.parse(localStorage.getItem('favoriteArtists') || "[]"))
    console.log(favoriteArtist)
    const [data, setData] = useState<any[]>([]);
    GetAllSearchData({favArtist: favoriteArtist, setData: setData, allData: data});
    // console.log(data)

    return(
        <>
            <div className="bg-stone-800 min-h-screen">
            </div>  
        </>
    )
}