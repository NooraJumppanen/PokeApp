import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { Heart, HeartFill } from 'react-bootstrap-icons';

const PokeCard = ({ name, image, pokemonName, fav, favClick }) => {
	return (
		<Card
			bg="dark"
			text="light"
			key={name}
			className="p-1"
			style={{ height: '20rem' }}
		>
			<Card.Header as="h4" className="d-flex justify-content-between">
				{name}
				{fav ? (
					<HeartFill onClick={favClick} size="30" color="red" />
				) : (
					<Heart onClick={favClick} size="30" />
				)}
			</Card.Header>

			<Card.Body>
				<Card.Img
					src={image}
					className="mt-3 mb-4"
					style={{ height: '150px' }}
				/>
				<LinkContainer to={`/${pokemonName}`} className="d-grid gap-2">
					<Button variant="secondary" size="sm">
						Details
					</Button>
				</LinkContainer>
			</Card.Body>
		</Card>
	);
};

export default PokeCard;
