import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { lazy } from "react";


const Home = lazy(() => import('../pages/Home'))
const Movies = lazy(() => import('../pages/Movies'))
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'))
const Cast = lazy(() => import('../components/Cast/Cast'))
const Reviews = lazy(() => import('../components/Reviews/Reviews'))

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} /> 
        <Route path="movies/:movieId" element={<MovieDetails />}>
           <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>  
      </Route>
      <Route path="*" element={<Home />} />
   </Routes>
  );
};

export default App