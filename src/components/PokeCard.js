import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { Heart, HeartFill } from 'react-bootstrap-icons';

const PokeCard = ({ name, image, pokemonName, fav, favClick }) => {
	return (
		<Card bg="dark" text="light" key={name} style={{ width: '14rem' }}>
			<Card.Header className="d-flex justify-content-between">
				{name}
				{fav ? (
					<HeartFill onClick={favClick} size="30" color="red" />
				) : (
					<Heart onClick={favClick} size="30" />
				)}
			</Card.Header>

			<Card.Body>
				<Card.Img variant="top" src={image} className="poke_image" />
				<LinkContainer to={`${pokemonName}`}>
					<Button variant="outline-light" size="sm">
						Details
					</Button>
				</LinkContainer>
			</Card.Body>
		</Card>
	);
};

export default PokeCard;
