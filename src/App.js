import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './App/store';
import Navbar from './Components/Navbar';

const SingleContent = lazy(() => import('./Components/SingleContent'));
const WatchList = lazy(() => import('./Components/WatchList'));
const Movies = lazy(() => import('./Components/Movies'));
const Shows = lazy(() => import('./Components/Shows'));
const Find = lazy(() => import('./Components/Find'));

function App() {
	return (
		<Provider store={store}>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<h1>Loading....</h1>}>
							<Shows />
						</Suspense>
					}
				/>
				<Route
					path="details/:id"
					element={
						<Suspense  fallback={<h1>Loading....</h1>}>
							<SingleContent type="tv" />
						</Suspense>
					}
				/>
				<Route
					path="movies/details/:id"
					element={
						<Suspense  fallback={<h1>Loading....</h1>}>
							<SingleContent type="movie" />
						</Suspense>
					}
				/>
				<Route
					path="watchlist"
					element={
						<Suspense  fallback={<h1>Loading....</h1>}>
							<WatchList />
						</Suspense>
					}
				/>
				<Route
					path="movies"
					element={
						<Suspense  fallback={<h1>Loading....</h1>}>
							<Movies />
						</Suspense>
					}
				/>
				<Route
					path="find"
					element={
						<Suspense  fallback={<h1>Loading....</h1>}>
							<Find />
						</Suspense>
					}
				/>
			</Routes>
		</Provider>
	);
}

export default App;
