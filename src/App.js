import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import MovieDetails from "./component/MovieDetails/MovieDetails";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import "./App.scss";
import { Provider } from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
