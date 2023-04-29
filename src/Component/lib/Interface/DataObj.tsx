export interface Track{
    id:string | null;
    name:string;
    preview_url:string;
    artistName : string | null;
}

export interface Album{
    id:string|null;
    name:string;
    tracks : Track[] | null;
}

export interface ArtistObj{
    id:string;
    name: string;
    img : string;
    albums : Album[];
}

export interface Playlist{
    image: string;
    tracks : Track[]
}