import { Track } from "../lib/Interface/DataObj";

type SongContainerProps = {
    track:Track
}

export function SongContainer(props:SongContainerProps){
    
    const {track} = props;
    console.log(track);

    return(
        <>
            <div className="m-10 w-2/3">
                <h1 className="font-medium text-3xl">{track.name}</h1>
                <h3 className="font-medium text-lg">{track.artistName}</h3>
                <audio className="w-full" src={track.preview_url} controls/>
            </div>
        </>
    );
}