import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import PokeList from './pages/PokeList';
import Layout from './pages/Layout';
import PokePage from './components/PokePage';
import Favourites from './components/Favourites';

const App = () => {
	const [favourites, setFavourites] = useState([]);

	const getArray = JSON.parse(localStorage.getItem('favourites') || '0');

	useEffect(() => {
		if (getArray != 0) {
			setFavourites(getArray);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		localStorage.setItem('favourites', JSON.stringify(favourites));
	}, [favourites]);

	const favHandler = (pokemon) => {
		let item = favourites.some((item) => item.name === pokemon.name);
		if (!item) {
			setFavourites((prevState) => [...prevState, pokemon]);
		} else {
			const newFavourites = [...favourites];
			newFavourites.splice(
				newFavourites.findIndex((item) => item.name === pokemon.name),
				1
			);
			setFavourites(newFavourites);
		}
	};

	const removeFavs = () => {
		localStorage.removeItem('favourites');
		setFavourites([]);
	};

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route
							path="pokemons"
							element={
								<PokeList favHandler={favHandler} favourites={favourites} />
							}
						/>
						<Route
							path="favourites"
							element={
								<Favourites
									favHandler={favHandler}
									favourites={favourites}
									removeFavs={removeFavs}
								/>
							}
						/>
						<Route path="/:pokemonName" element={<PokePage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
