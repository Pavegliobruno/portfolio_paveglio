import React from 'react';
import {Route} from 'react-router-dom';
import AppStyle from './AppStyled';
import {Navbar} from './components/navbar/Navbar';
import {Home} from './components/home/Home';
import {AboutMe} from './components/aboutMe/AboutMe';
import {Projects} from './components/projects/Projects';
import {Testimonials} from './components/testimonials/Testimonials';
import {Contact} from './components/contact/Contact';
import {Footer} from './components/presentational/footer/Footer';

export const App = () => {
	return (
		<AppStyle>
			<Route exact path='/' component={Navbar} />
			<Route exact path='/' component={Home} />
			<Route exact path='/' component={AboutMe} />
			<Route exact path='/' component={Projects} />
			<Route exact path='/' component={Testimonials} />
			<Route exact path='/' component={Contact} />
			<Route exact path='/' component={Footer} />
		</AppStyle>
	);
};
