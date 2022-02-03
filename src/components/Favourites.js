import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PokeCard from './PokeCard';
import Button from 'react-bootstrap/Button';

const Favourites = ({ favHandler, favourites, removeFavs }) => {
	console.log(favourites);
	return (
		<Container className="mt-5">
			{favourites.length === 0 && <h4>The favourites list is empty</h4>}
			<Row
				xs={1}
				md={4}
				lg={5}
				className="justify-content-between my-5 d-flex gap-3"
			>
				{favourites.map((pokemon) => (
					<PokeCard
						key={pokemon.name}
						name={pokemon.name}
						image={pokemon.sprites.other.dream_world.front_default}
						pokemonName={pokemon.name}
						fav={favourites.some((item) => item.name === pokemon.name)}
						favClick={() => favHandler(pokemon)}
					/>
				))}
			</Row>
			{favourites.length !== 0 && (
				<div className="d-grid">
					<Button variant="outline-secondary" onClick={removeFavs}>
						Remove all from favourites
					</Button>
				</div>
			)}
		</Container>
	);
};

export default Favourites;
