import { useState } from "react";
import { ArtistContainer } from "../ArtistContainer";
import { ButtonComponent } from "./Button";
import { SearchBar } from "./SearchBar";

export default function SearchSection(){

    const [data, setSearchData] = useState(null)

    return(
        <>
            <div className="bg-blue-500 relative">
                <div className="px-14 py-10 text-white">
                    <h1 className= "font-bold text-5xl">Listen without limits</h1>
                    <p className="my-10 text-2xl te">Premium lets you listen to music everywhere, even offline. No restrictions. Ad-free music listening.</p>
                    <div>
                        <ButtonComponent text="Get Started" color="text-white" backgroundColor="bg-gray-950"/>
                    </div>
                </div>
            </div>
            <div className="bg-white mt-10 flex flex-col items-center text-center">
                <div className="font-bold text-3xl w-full">
                    <h1>Find Your Favorite Artist...</h1>
                </div>
                <div className="mt-10 w-2/6">
                    <SearchBar setSearchData={setSearchData}/>
                </div>
                    <ArtistContainer data={data} isSongs={false}/>
            </div>
        </>
    );
}