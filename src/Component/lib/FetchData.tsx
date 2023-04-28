import {useQuery} from "@apollo/client"
import { GET_ARTIST_DATA } from "./queries/ListQueries"
export function GetSearchData({artistName, setData}:{artistName:string, setData : Function}){
    const {loading,error,data}= useQuery(GET_ARTIST_DATA, {
        variables:{
            artistName:artistName
        }
    })

    console.log(artistName)
    if(loading){
        return(
            <>
                Loading...
            </>
        );
    }

    if(error){
        console.log(error.message)
        if(artistName.length > 0){
            return(
                <>
                    <h1>Please try again</h1>
                </>
            )
        }
    }

    console.log(data);
    setData(data);
    return(
        <>
        </>
    )
}