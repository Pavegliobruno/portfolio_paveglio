import React, {useState} from 'react';
import {SiGoogletranslate} from 'react-icons/si';
import {useTranslation} from 'react-i18next';
import NavbarStyle from './styled';

export const Navbar = () => {
	const [state, setState] = useState('es');
	const [t, i18n] = useTranslation('global');

	const handleChange = (lang) => {
		i18n.changeLanguage(lang);
		setState(lang);
	};

	return (
		<NavbarStyle>
			<div className='normalNav'>
				<span></span>
				<a className='item' href='#about'>
					{t('navbar.about')}
				</a>
				<a className='item' href='#projects'>
					{t('navbar.projects')}
				</a>
				<a className='homeItem' href='#home'>
					{' '}
					bp{' '}
				</a>
				<a className='item' href='#testimonial'>
					{t('navbar.testimonial')}
				</a>
				<a className='item' href='#contact'>
					{t('navbar.contact')}
				</a>
				<span className='language'>
					{state === 'es' ? (
						<button className='langBtn' onClick={() => handleChange('en')}>
							<SiGoogletranslate />
						</button>
					) : (
						<button className='langBtn' onClick={() => handleChange('es')}>
							<SiGoogletranslate />
						</button>
					)}
				</span>
			</div>
			<nav className='mobileNav' role='navigation'>
				<div id='menuToggle'>
					<input type='checkbox' />
					<span></span>
					<span></span>
					<span></span>
					<ul id='menu'>
						<a href='#about'>
							<li>{t('navbar.about')}</li>
						</a>
						<a href='#projects'>
							<li>{t('navbar.projects')}</li>
						</a>
						<a href='#testimonial'>
							<li>{t('navbar.testimonial')}</li>
						</a>
						<a href='#contact'>
							<li>{t('navbar.contact')}</li>
						</a>
						<a href='#lang' className='language'>
							{state === 'es' ? (
								<button className='langBtn' onClick={() => handleChange('en')}>
									<SiGoogletranslate />
								</button>
							) : (
								<button className='langBtn' onClick={() => handleChange('es')}>
									<SiGoogletranslate />
								</button>
							)}
						</a>
					</ul>
				</div>
			</nav>
		</NavbarStyle>
	);
};
