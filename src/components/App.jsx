import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "page/Home";
import Movies from "./Movies/Movies";


const App = () => {
  return (
  //   <Routes>
  //     <Route path="/" element={<Layout/>}>
  //       <Route index element={<Home />} />
  //       {/* <Route path="movies" element={<Movies />} />
  //       <Route path="movies/:movieId" element={<MovieDetails />}>
  //         <Route path="cast" element={<Cast />} />
  //         <Route path="reviews" element={<Reviews />} />
  //       </Route>  */}
  //     </Route>
  //  </Routes>
    <>
      <Layout />
      <Home />
      <Movies />
   
    </>
  );
};

export default App