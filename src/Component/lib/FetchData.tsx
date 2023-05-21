import {useQuery} from "@apollo/client"
import { GET_ARTIST_DATA } from "./queries/ListQueries"
import { useEffect, useState } from "react";


export function GetSearchData({artistName, setData}:{artistName:string, setData : Function}){
    // console.log(artistName);
    const {loading,error,data}= useQuery(GET_ARTIST_DATA, {
        variables:{
            artistName:artistName
        }
    })


    useEffect(()=>{
        if(!loading && !error){
            setData(data)
        }
    }, [data])
    

    if(loading){
        return(
            <>
                Loading...
            </>
        );
    }

    if(error){
        if(artistName.length > 0){
            return(
                <>
                    <h1>Please try again</h1>
                </>
            )
        }
    }

    // console.log(data);
    // setData(data);
    return(
        <>
        </>
    )
}
  


const  CLIENT_ID = "20838970af904b19b803f7bf9934043a"
const SECRET_ID = "cbf9a48ce1bd49ae98f355e84c3c0a67"
// const REDIRECT_URI = 'http://localhost:3000/callback'
const SPOTIFY_ACCOUNTS_API = 'https://accounts.spotify.com/api/token'
const ENDPOINT_PLAYLIST = 'https://api.spotify.com/v1/playlists/'
let cachedToken:string | null = null
let tokenExp : number = 0
const TOP_PLAYLIST_ID = '37i9dQZEVXbObFQZ3JLcXt'

async function getBearerToken(): Promise<any>{
    const currTime = Math.floor(Date.now()/1000);
    if(cachedToken != null && currTime < tokenExp){
        return cachedToken;
    }

    const response =await fetch(`${SPOTIFY_ACCOUNTS_API}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: CLIENT_ID,
            client_secret: SECRET_ID
        }).toString()
    })

    if(!response.ok){
        throw new Error(`Failed to get Spotify token : ${response.status}`)
    }

    const data = await response.json();
    cachedToken = data.access_token
    tokenExp = currTime + data.expires_in
    return data.access_token;
}

async function fetchPlayList(token:string, playlistID:string): Promise<any>{
    const response = await fetch(`${ENDPOINT_PLAYLIST}${playlistID}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });

    if(!response.ok){
        throw new Error(`Failed to fetch artist data : ${response.status}`)
    }

    const data = await response.json();
    return data;
}

export function GetTopPlayList(){
    const [playListData, setPlaylistData] = useState(null)
    const [error, setError] = useState(null)
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const token = await getBearerToken()
                const data = await fetchPlayList(token,TOP_PLAYLIST_ID)
                setPlaylistData(data);
            }catch(err: any){
                setError(err.message)
            }
        }
        fetchData()
    }, [])

    return {playListData, error};
}