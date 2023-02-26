import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";

import { Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./App/store";
import SingleContent from "./Components/SingleContent";
import WatchList from "./Components/WatchList";


function App() {
  return (
    <Provider store={store} >
      <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="media/:id" element={<SingleContent />} />
          <Route path="watchlist" element={<WatchList />}/>
        </Routes>
  
    </Provider>

  );
}

export default App;
