import "./App.css";
import Row from "./components/Row/Row";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import requests from "./services/requests";
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        isLargeRow
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
