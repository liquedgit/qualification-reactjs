import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./Component/view/SearchPage";
import { ArtistDetail } from "./Component/view/ArtistDetail";
import { TopPage } from "./Component/view/TopPage";
import { FavoritePage } from "./Component/view/FavoritePage";

const client = new ApolloClient({
  uri: "http://178.128.22.186:8080/query",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchPage />}></Route>
            <Route path="/top" element={<TopPage />}></Route>
            <Route
              path="/artist/:artistName"
              element={<ArtistDetail />}
            ></Route>
            <Route path="/favorite" element={<FavoritePage />}></Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
