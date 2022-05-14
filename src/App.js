import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import MovieDetails from "./component/MovieDetails/MovieDetails";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import "./App.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="contain">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:movID" element={<MovieDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
