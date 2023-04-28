export interface Track{
    id:string | null;
    name:string;
    preview_url:string;
}

export interface Album{
    id:string|null;
    name:string;
    tracks : Track[];
}

export interface ArtistObj{
    id:string;
    name: string;
    img : string;
    albums : Album[];
}