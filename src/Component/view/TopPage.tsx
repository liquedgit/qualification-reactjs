import { Header } from "../ViewComponents/Header";
import { TopSongSection } from "../ViewComponents/TopsongComponent/TopSongSection";
import { GetTopPlayList } from "../lib/FetchData";

export function TopPage(){

    

    return(
        <>
            <Header/>
            <TopSongSection/>
        </>
    );
}