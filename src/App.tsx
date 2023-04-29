import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SearchPage from './Component/view/SearchPage';
import { ArtistDetail } from './Component/view/ArtistDetail';
import { TopPage } from './Component/view/TopPage';

const client = new ApolloClient({
  uri: 'https://graphql-spotify-mbee.up.railway.app/query',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SearchPage/>}></Route>
            <Route path='/top' element={<TopPage/>}></Route>
            <Route path='/artist/:artistName' element={<ArtistDetail/>}></Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
