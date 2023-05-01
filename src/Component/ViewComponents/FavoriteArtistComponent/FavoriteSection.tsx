import { useState } from "react"
import { Album, ArtistObj } from "../../lib/Interface/DataObj";
import { FavoriteButtton } from "../FavoriteButton";
// import { GetAllSearchData } from "../../lib/FetchData";

export function FavoriteSection(){
    const [favoriteArtist, setFavoriteArtists]= useState<ArtistObj[]>(JSON.parse(localStorage.getItem('favoriteArtists') || "[]"))


    return(
        <>
            <div className="bg-stone-800 min-h-screen">
                <h1 className="text-4xl font-bold text-white text-center">Favorite Artist</h1>
                {
                    favoriteArtist.map((artist:ArtistObj)=>{
                        return(
                            <div className="text-white">
                                <div className="py-8 px-5 flex flex-col items-center justify-center">
                                    <div className="w-40">
                                        <img src={artist.img} alt="" className="rounded-full h-40 w-40 object-cover"/>
                                    </div>
                                    <div className="text-4xl px-7 py-2 h-28">
                                        <h1 className="font-bold">{artist.name}</h1>
                                        <div className="overflow-y-auto h-full mt-2">
                                            {
                                                artist.albums.map((album:Album)=>{
                                                    return(
                                                        <li className="text-sm p-0.5">{album.name}</li>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                    
                                </div>
                                <FavoriteButtton artistData={artist}/>
                            </div>
                        );
                    })
                }
            </div>  
        </>
    )
}