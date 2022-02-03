import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
	return (
		<div>
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
