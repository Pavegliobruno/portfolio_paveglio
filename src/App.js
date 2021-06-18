import React, {useState} from 'react';
import {Navbar} from './components/navbar/Navbar';
import {Home} from './components/home/Home';
import {AboutMe} from './components/aboutMe/AboutMe';
import {Projects} from './components/projects/Projects';
import {Testimonials} from './components/testimonials/Testimonials';
import {Contact} from './components/contact/Contact';
import {Footer} from './components/presentational/footer/Footer';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './theme';
import {GlobalStyles} from './global';

export const App = () => {
	const [theme, setTheme] = useState('light');
	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<Navbar themeToggler={themeToggler} theme={theme} />
			<Home />
			<AboutMe />
			<Projects />
			<Testimonials />
			<Contact />
			<Footer />
		</ThemeProvider>
	);
};
