import { Album, ArtistObj, Track } from "../lib/Interface/DataObj";
import {Link, useMatch} from 'react-router-dom'
import { FavoriteButtton } from "./FavoriteButton";

export function ArtistDetailContainer(data:any){
    let artistObj : ArtistObj | null;
    artistObj = null
    if(data!=null && data.data!=null){
        console.log(data.data.artist.albums)
        artistObj = {
            id:data.data.artist.id,
            name: data.data.artist.name,
            img: data.data.artist.image,
            albums : data.data.artist.albums.map((albumData: any) =>{
                const album: Album = {
                    id: albumData.id? albumData.id : null,
                    name: albumData.name,
                    tracks: null
                }
                return album;
            })
        }
    }


    if(artistObj == null){
        return(
            <>
            </>
        );
    }
    
    return(
        <>
                <div className="bg-stone-900 h-full w-full text-white">
                    <img src={artistObj.img} alt="" className="w-96 p-10 rounded-full" />
                    <div className="py-12 text-left">
                        <h1 className="font-bold text-5xl">{artistObj.name}</h1>
                        <h1 className="font-bold mt-4 text-3xl">Latest Album : </h1>
                        <div className="py-4 font-semibold text-xl">
                            {artistObj.albums.slice(0,5).map((album:Album)=>{
                                return(
                                    <li>{album.name}</li>
                                )
                            })}
                        </div>
                    </div>
                </div>
        </>
    );
}

export function ArtistContainer(data :any){
    let artistObj : ArtistObj | null;
    artistObj = null
    
    const match = useMatch('/artist/:artistName')

    if(data!=null && data.data!=null){
        console.log(data.data.artist.albums)
        artistObj = {
            id:data.data.artist.id,
            name: data.data.artist.name,
            img: data.data.artist.image,
            albums : data.data.artist.albums.map((albumData: any) =>{
                const album: Album = {
                    id: albumData.id? albumData.id : null,
                    name: albumData.name,
                    tracks: null
                }
                return album;
            })
        }
    }


    if(artistObj == null){
        return(
            <>
            </>
        );
    }
    
    return(
        <>
        <div className="bg-stone-900 text-white py-10 min-h-screen">
            <Link to={`/artist/${artistObj.name}`} className={`h-full w-full mt-16 ${match ? 'pointer-events-none relative' : ''}`}>
                <div className="">
                    <div className="flex justify-center items-center">
                        <img src={artistObj.img} alt="" className="max-w-sm p-10 rounded-full"/>
                    </div>
                    <div className="px-12 md:pb-5 flex justify-center items-center flex-col">
                        <h1 className="font-bold text-5xl text-center">{artistObj.name}</h1>
                        <h1 className="font-bold mt-4 text-3xl text-center">Latest Album : </h1>
                        <div className="py-4 font-semibold text-xl text-left">
                            {artistObj.albums.slice(0,5).map((album:Album)=>{
                                return(
                                    <li>{album.name}</li>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Link>

                {match && <FavoriteButtton artistData={artistObj}/>}    
        </div>
        </>
    );
}

export function ArtistCard(data:any){
    
}