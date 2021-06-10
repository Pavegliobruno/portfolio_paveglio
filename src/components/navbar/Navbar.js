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
		</NavbarStyle>
	);
};
