import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import PokeList from './pages/PokeList';
import Layout from './pages/Layout';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="pokemons" element={<PokeList />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
