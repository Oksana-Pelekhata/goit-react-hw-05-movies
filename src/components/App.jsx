import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "page/Home";
import Movies from "./Movies/Movies";
import MovieDetails from "page/MovieDetails/MovieDetails";
import Cast from "./Cast/Cast";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} /> 
        <Route path="movies/:movieId" element={<MovieDetails />}>
           <Route path="cast" element={<Cast />} />
          {/*<Route path="reviews" element={<Reviews />} /> */}
        </Route>  
      </Route>
      {/* <Route path="*" element={<Home />} /> */}
   </Routes>
  );
};

export default App