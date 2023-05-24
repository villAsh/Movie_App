import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./App/store";
import Navbar from "./Components/Navbar";

const SingleContent = lazy(() => import("./Components/pages/SingleContent"));
const WatchList = lazy(() => import("./Components/pages/WatchList"));
const Movies = lazy(() => import("./Components/pages/Movies"));
const Shows = lazy(() => import("./Components/pages/Shows"));
const Find = lazy(() => import("./Components/pages/Find"));

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-2xl">
      <div>
        <h1 className="text-5xl text-red font-bold">Loading....</h1>
      </div>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Shows />
            </Suspense>
          }
        />
        <Route
          path="show/:id"
          element={
            <Suspense fallback={<Loading />}>
              <SingleContent type="tv" />
            </Suspense>
          }
        />
        <Route
          path="movies/movie/:id"
          element={
            <Suspense fallback={<Loading />}>
              <SingleContent type="movie" />
            </Suspense>
          }
        />
        <Route
          path="watchlist/tv/:id"
          element={
            <Suspense fallback={<Loading />}>
              <SingleContent type="tv" />
            </Suspense>
          }
        />{" "}
        <Route
          path="watchlist/movie/:id"
          element={
            <Suspense fallback={<Loading />}>
              <SingleContent type="movie" />
            </Suspense>
          }
        />
        <Route
          path={`find/tv/:id`}
          element={
            <Suspense fallback={<Loading />}>
              <SingleContent type="tv" />
            </Suspense>
          }
        />
        <Route
          path={`find/movie/:id`}
          element={
            <Suspense fallback={<Loading />}>
              <SingleContent type="movie" />
            </Suspense>
          }
        />
        <Route
          path="watchlist"
          element={
            <Suspense fallback={<Loading />}>
              <WatchList />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense fallback={<Loading />}>
              <Movies />
            </Suspense>
          }
        />
        <Route
          path="find"
          element={
            <Suspense fallback={<Loading />}>
              <Find />
            </Suspense>
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;
