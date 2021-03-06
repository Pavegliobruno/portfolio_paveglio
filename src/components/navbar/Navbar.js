import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {RiMoonLine, RiSunLine} from 'react-icons/ri';
import NavbarStyle from './styled';

export const Navbar = ({themeToggler, theme}) => {
	const [t, i18n] = useTranslation('global');
	const [state, setState] = useState(i18n.language);

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
				<div className='lang-theme'>
					<span className='language'>
						{state === 'es' ? (
							<button className='langBtn' onClick={() => handleChange('en')}>
								EN
							</button>
						) : (
							<button className='langBtn' onClick={() => handleChange('es')}>
								ES
							</button>
						)}
					</span>
					{theme === 'dark' ? (
						<button className='themeBtn' onClick={themeToggler}>
							<RiSunLine />
						</button>
					) : (
						<button className='themeBtn' onClick={themeToggler}>
							<RiMoonLine />
						</button>
					)}
				</div>
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
									EN
								</button>
							) : (
								<button className='langBtn' onClick={() => handleChange('es')}>
									ES
								</button>
							)}
						</a>
						<a href='#theme' className='darkMode'>
							{theme === 'dark' ? (
								<button className='themeBtn' onClick={themeToggler}>
									<RiSunLine />
								</button>
							) : (
								<button className='themeBtn' onClick={themeToggler}>
									<RiMoonLine />
								</button>
							)}
						</a>
					</ul>
				</div>
			</nav>
		</NavbarStyle>
	);
};
