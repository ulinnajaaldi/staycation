import React, { useState, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from './components/loading/Loading';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const NavigationBar = lazy(() => import('./components/navbar/NavigationBar'));
const EmptyPage = lazy(() => import('./pages/EmptyPage'));

import LandingPage from './pages/LandingPage';
import NavigationBar from './components/navbar/NavigationBar';
import EmptyPage from './pages/EmptyPage';

function App() {
	const routes = [
		{ path: '/', element: <LandingPage /> },
		{ path: '*', element: <EmptyPage /> },
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
