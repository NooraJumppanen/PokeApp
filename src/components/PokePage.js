import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loader from './Loader';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

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
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="single_poke_page_wrapper">
			{isLoading && <Loader />}
			{!isLoading && (
				<Stack gap={2} className="col-md-5 mx-auto mt-5">
					<Card bg="dark" text="light">
						<div>
							<Card.Header as="h2">{pokemonName}</Card.Header>
							<Card.Body>
								<Stack direction="horizontal">
									<div>
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
									</div>

									<Card.Img
										src={singlePoke.sprites.other.dream_world.front_default}
										alt="pokemon_image"
										style={{ width: '50%' }}
									/>
								</Stack>
							</Card.Body>
						</div>
					</Card>

					<Button onClick={() => navigate(-1)} variant="secondary">
						Back to Pokemons
					</Button>
				</Stack>
			)}
		</div>
	);
};

export default PokePage;
