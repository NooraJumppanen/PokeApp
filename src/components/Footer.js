import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Footer = () => {
	return (
		<Navbar bg="dark" variant="dark" relative="bottom" expand="lg">
			<Container>
				<Navbar.Collapse className="justify-content-center">
					<Navbar.Text>
						<p>&copy; 2022 Noora Jumppanen</p>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Footer;
