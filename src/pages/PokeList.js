import React, { useState, useEffect } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import PokeCard from '../components/PokeCard';
import Loader from '../components/Loader';

const PokeList = () => {
	const [pokemons, setPokemons] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios.get('https://pokeapi.co/api/v2/pokemon/').then((response) => {
			const fetches = response.data.results.map((p) =>
				axios.get(p.url).then((response) => response.data)
			);

			Promise.all(fetches).then((data) => {
				setPokemons(data);
				setIsLoading(false);
			});
		});
	}, []);

	return (
		<div>
			<Container>
				<Row
					xs={2}
					md={4}
					lg={5}
					className="justify-content-between my-5 d-flex gap-3"
				>
					{isLoading && <Loader />}

					{!isLoading &&
						pokemons.map((pokemon) => (
							<PokeCard
								key={pokemon.name}
								name={pokemon.name}
								image={pokemon.sprites.other.dream_world.front_default}
							/>
						))}
				</Row>
			</Container>
		</div>
	);
};

export default PokeList;
