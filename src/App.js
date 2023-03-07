import Navbar from "./Components/Navbar";

import { Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./App/store";
import SingleContent from "./Components/SingleContent";
import WatchList from "./Components/WatchList";
import Movies from "./Components/Movies";
import Shows from "./Components/Shows";
import Find from "./Components/Find";


function App() {
  return (
    <Provider store={store} >
      <Navbar />
        <Routes>
          <Route path="/" element={<Shows />} />
          <Route path="details/:id" element={<SingleContent type="tv"/>} />
          <Route path="movies/details/:id" element={<SingleContent type="movie"/>} />
          <Route path="watchlist" element={<WatchList />}/>
          <Route path="movies" element={<Movies />} />
          <Route path="find" element={ <Find /> } />
        </Routes>
  
    </Provider>

  );
}

export default App;
