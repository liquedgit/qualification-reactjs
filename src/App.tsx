import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SearchPage from './Component/view/SearchPage';
import { ArtistDetail } from './Component/view/ArtistDetail';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8080/query',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SearchPage/>}></Route>
            <Route path='/top'></Route>
            <Route path='/artist/:artistName' element={<ArtistDetail/>}></Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
