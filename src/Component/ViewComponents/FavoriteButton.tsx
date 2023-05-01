import {  useState } from "react";
import { ArtistObj } from "../lib/Interface/DataObj";

export function FavoriteButtton({artistData}: {artistData:ArtistObj}){
    

    const [favoriteArtists, setFavoriteArtists] = useState<ArtistObj[]>(
        JSON.parse(localStorage.getItem("favoriteArtists") || "[]")
      );
    // console.log(artistData)
    console.log(favoriteArtists);

    let isFavorite = favoriteArtists.find((artist:ArtistObj)=>artist.name === artistData.name)
    let handleOnSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!favoriteArtists.includes(artistData)){
            const updatedState = [...favoriteArtists, artistData];
            localStorage.setItem("favoriteArtists", JSON.stringify(updatedState));
            setFavoriteArtists(updatedState);
        }else{
            const updatedFavoriteArtists = favoriteArtists.filter(artist => artist.name !== artistData.name);
            localStorage.setItem('favoriteArtists', JSON.stringify(updatedFavoriteArtists));
            setFavoriteArtists(updatedFavoriteArtists);
        }
        
    }


    return(
        <>
            <form onSubmit={handleOnSubmit} className="flex justify-center items-center">
                <div className="flex rounded-full border-solid border-2 w-40 p-2 m-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill={`${(isFavorite) ? 'red' : 'white'} `} viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path className="py-5 px-5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <input className="pl-2" type="submit" value="Add to favorites"/>
                </div>
            </form>
        </>
    );
}