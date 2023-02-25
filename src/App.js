import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./App/store";
import SingleContent from "./Components/SingleContent";


function App() {
  return (
    <Provider store={store} >
      <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="media/:id" element={<SingleContent />} />
        </Routes>
  
    </Provider>

  );
}

export default App;
