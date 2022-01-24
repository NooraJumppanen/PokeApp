import React from 'react';
import Card from 'react-bootstrap/Card';

const PokeCard = ({ name, image }) => {
	return (
		<Card bg="dark" text="light" key={name} style={{ width: '14rem' }}>
			<Card.Header>{name}</Card.Header>
			<Card.Body>
				<Card.Img variant="top" src={image} className="poke_image" />
			</Card.Body>
		</Card>
	);
};

export default PokeCard;
