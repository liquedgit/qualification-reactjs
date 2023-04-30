import {useParams, useNavigate} from 'react-router-dom'
import { ArtistContainer } from '../ViewComponents/ArtistContainer';
import { GetSearchData } from '../lib/FetchData';
import { useState } from 'react';
import { Header } from '../ViewComponents/Header';

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
            <Header/>
            <GetSearchData artistName={artistName ? artistName:''} setData={setData}/>
            <ArtistContainer data={data}/>
              
        </>
    );
}