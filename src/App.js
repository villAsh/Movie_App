import Navbar from "./Components/Navbar";

import { Provider } from "react-redux";
import store from "./App/store";
import Banner from "./Components/Banner";
function App() {
  return (
    <Provider store={store} >
      <Navbar />
      <Banner />
    </Provider>

  );
}

export default App;
