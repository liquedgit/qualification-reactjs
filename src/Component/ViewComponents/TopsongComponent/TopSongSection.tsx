import { GetTopPlayList } from "../../lib/FetchData";
import { Playlist, Track } from "../../lib/Interface/DataObj";
import { SongContainer } from "../TopSong";

export function TopSongSection(){
    const {playListData, error}:{playListData:any, error : any} = GetTopPlayList();
    let topData:Playlist | null = null;

    if(error){
        console.log(error)
        return(
            <></>
        )
    }
    if(playListData != null){
        // console.log(playListData.images[0].url);
        console.log(playListData.tracks.items)
        topData={
            image:playListData.images[0].url,
            tracks : playListData.tracks.items.map((curr:any)=>{
                const mTrack :Track= {
                    id:(curr.track.id ? curr.track.id : null),
                    name:curr.track.artists[0].name,
                    preview_url:curr.track.preview_url,
                    artistName:curr.track.artists[0].name? curr.track.artists[0].name : null
                }
                return mTrack;
            })
        }
    }
    // console.log(topData)
    return(
        <>
            <div className="relative flex h-full w-full bg-stone-700 text-white">
                <div className="m-10">
                    <img src={topData?.image} alt=""  className="max-w-xs rounded-3xl"/>
                </div>
                <div className="w-full">
                    <h1 className="font-medium m-5 text-8xl">Top 50 Tracks in Indonesia</h1>
                    <div className="flex flex-col">
                        {
                            topData?.tracks.map((currtrack:Track)=>{
                                return(
                                    <SongContainer track={currtrack}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}