import React from 'react';
import {useTranslation} from 'react-i18next';
import NavbarStyle from './styled';

export const Navbar = () => {
	const [t, i18n] = useTranslation('global');
	return (
		<NavbarStyle>
			<span> Bruno </span>
			<span>{t('navbar.about')}</span>
			<span>{t('navbar.projects')}</span>
			<span>{t('navbar.contact')}</span>
			<span>
				<button onClick={() => i18n.changeLanguage('es')}>ES</button>
				<button onClick={() => i18n.changeLanguage('en')}>EN</button>
			</span>
		</NavbarStyle>
	);
};
