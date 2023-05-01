import { Link } from "react-router-dom";
import { GetTopPlayList } from "../../lib/FetchData";
import { ArtistObj, ArtistTop, Playlist, Track } from "../../lib/Interface/DataObj";
import { SongContainer } from "../TopSong";

export function TopSongSection(){
    const {playListData, error}:{playListData:any, error : any} = GetTopPlayList();
    let topData:ArtistTop[]| null = null;

    if(error){
        console.log(error)
        return(
            <></>
        )
    }
    if(playListData != null){
        // console.log(playListData.images[0].url);
        // console.log(playListData)

        topData = playListData.tracks.items.map((item:any)=>{
            const artistData : ArtistTop = {
                    id: item.track.artists[0].id,
                    name: item.track.artists[0].name,
                    img: item.track.album.images[0].url,
                }
                return artistData;
            })
        
    }
    console.log(topData)
    return(
        <>
            <div className="relative flex flex-col h-full w-full bg-stone-700 text-white md:flex-row">
                <div className="w-full ">
                    <h1 className="font-medium m-10 text-6xl text-center">Top 50 Most played Artist in Indonesia</h1>
                    <div className="flex flex-col">
                        {
                            topData?.map((artist)=>{
                                return(
                                    <>
                                        <Link to={`/artist/${artist.name}`}>
                                            <div key={artist.id} className="py-5">
                                                <div className="flex justify-center items-center">
                                                    <img src={artist.img} alt="" className="max-w-sm p-10 rounded-full"/>
                                                </div>
                                                <div className="flex justify-center items-center font-bold text-2xl">
                                                    <h1>{artist.name}</h1>
                                                </div>
                                            </div>
                                        </Link>

                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}