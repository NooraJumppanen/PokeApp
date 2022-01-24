import React, { useState, useEffect } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import PokeCard from '../components/PokeCard';
import Loader from '../components/Loader';
import Button from 'react-bootstrap/Button';

const PokeList = () => {
	const [pokemons, setPokemons] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [showNext, setShowNext] = useState(
		'https://pokeapi.co/api/v2/pokemon/'
	);

	useEffect(() => {
		getPokemons();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getPokemons = () => {
		axios
			.get(showNext)
			.catch((err) => {
				console.log(err);
			})
			.then((response) => {
				const fetches = response.data.results.map((p) =>
					axios.get(p.url).then((response) => response.data)
				);

				setShowNext(response.data.next);

				Promise.all(fetches).then((data) => {
					setPokemons((prevState) => [...prevState, ...data]);
				});
				setIsLoading(false);
			});
	};

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
			<div className="btn_wrapper">
				<Button variant="outline-secondary" size="sm" onClick={getPokemons}>
					Next 20 &gt;
				</Button>
			</div>
		</div>
	);
};

export default PokeList;
