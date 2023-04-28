import {useParams, useNavigate} from 'react-router-dom'
import { ArtistContainer } from '../ViewComponents/ArtistContainer';
import { GetSearchData } from '../lib/FetchData';
import { useState } from 'react';
export function ArtistDetail(){
    let{artistName}= useParams()
    const navigate = useNavigate()
    if(artistName === null){
        navigate("/")
    }
    // let artName:string;
    // artName = artistName?.toString()
    const [data,setData] = useState(null);
    return(
        <>
            <GetSearchData artistName={artistName ? artistName:''} setData={setData}/>
            <ArtistContainer data={data} isSongs={true}/>
        </>
    );
}