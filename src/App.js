import React from 'react';
import {Route} from 'react-router-dom';
import {Navbar} from './components/navbar/Navbar';

export const App = () => {
	return (
		<div>
			<Route exact path='/' component={Navbar} />
		</div>
	);
};
