import { Track } from "../lib/Interface/DataObj";

type SongContainerProps = {
    track:Track
}

export function SongContainer(props:SongContainerProps){
    
    const {track} = props;
    // console.log(track);

    return(
        <>
            <div className="mx-10 my-5 w-2/3">
                <h1 className="my-2font-medium text-3xl">{track.name}</h1>
                <h3 className="my-2 font-medium text-lg">{track.artistName}</h3>
                <audio className="my-2 w-full" src={track.preview_url} controls/>
            </div>
        </>
    );
}