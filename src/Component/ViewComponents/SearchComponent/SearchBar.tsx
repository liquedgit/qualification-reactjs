import SearchIcon from '../../../assets/search-icon.png'
import { GetSearchData } from '../../lib/FetchData';
import { useState } from 'react'


export function SearchBar({setSearchData} : {setSearchData:Function}){
    
    const[searchText, setSearchText] = useState("");    

    let handleOnChange = (e :React.ChangeEvent<HTMLInputElement>)=>{
        setSearchText(e.target.value);
    }

    
    return(
        <>
            <div className='flex relative px-4 py-3 bg-white rounded-full ring-2 ring-black items-center'>
                    <img src={SearchIcon} alt="Search Icon" className="w-6 absolute top-1/2 transform -translate-y-1/2"/>
                    <input type="text" className="px-10 w-full rounded-full text-black outline-none" placeholder="Find Your Favorite Artist..." value={searchText} onChange={handleOnChange}/>
            </div>

            <div>
                <GetSearchData artistName={searchText} setData={setSearchData}/>
            </div>
        </>

    );
}