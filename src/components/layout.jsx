import React from 'react';
import NavigationBar from './navbar/NavigationBar';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
	return (
		<>
			<NavigationBar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
