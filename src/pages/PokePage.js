import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loader from '../components/Loader';
import Button from 'react-bootstrap/Button';

const PokePage = () => {
	let { pokemonName } = useParams();
	let navigate = useNavigate();
	const [singlePoke, setSinglePoke] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
			.catch((err) => {
				console.log(err);
			})
			.then((response) => {
				setSinglePoke(response.data);
				setIsLoading(false);
				console.log(response.data);
				console.log(singlePoke);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			{isLoading && <Loader />}
			{!isLoading && (
				<div>
					<h2>{pokemonName}</h2>
					<p>base experience: {singlePoke.base_experience}</p>
					<p>height: {singlePoke.height * 10} cm</p>
					<p>weight: {singlePoke.weight / 10} kg</p>
					<div>
						types:
						<ul>
							{singlePoke.types.map((item) => (
								<li key={item.type.name}>{item.type.name}</li>
							))}
						</ul>
					</div>
					<div>
						abilities:
						<ul>
							{singlePoke.abilities.map((item) => (
								<li key={item.ability.name}>{item.ability.name}</li>
							))}
						</ul>
					</div>
					<div>
						<img
							src={singlePoke.sprites.other.dream_world.front_default}
							alt="pokemon_image"
						/>
					</div>
					<div>
						<Button onClick={() => navigate(-1)}>Back to Pokemons</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default PokePage;
