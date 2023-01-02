import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import NavigationBar from './components/navbar/NavigationBar';
import EmptyPage from './pages/EmptyPage';
import Detail from './pages/detail';

function App() {
	const routes = [
		{ path: '/', element: <LandingPage /> },
		{ path: '*', element: <EmptyPage /> },
		{
			path: '/detail/:id',
			element: <Detail />,
		},
	];

	return (
		<div>
			<NavigationBar />
			<Routes>
				{routes.map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Routes>
		</div>
	);
}

export default App;
