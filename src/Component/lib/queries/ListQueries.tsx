import {gql} from "@apollo/client"
export const GET_ARTIST_DATA = gql`
    query getArtist($artistName:String!){
	artist(name:$artistName){
    name
    id
    image
    albums{
      name
    	tracks{
        name
        preview_url
      }
    }
  }
}
`;