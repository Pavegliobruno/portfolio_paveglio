import React from 'react';
import {useTranslation} from 'react-i18next';
import HomeStyle from './styled';
import profileImg from '../../utils/images/klipartz.com.png';

export const Home = () => {
	const [t] = useTranslation('global');
	return (
		<HomeStyle>
			<a name='home'></a>
			<div className='colorCircle'>
				<img className='profileImg' src={profileImg} alt='profileImg' />
			</div>
			<div className='titleDiv'>
				<span>{t('home.greeting')}</span>
				<span className='myName'>Bruno Paveglio</span>
				<span>{t('home.role')}</span>
			</div>
		</HomeStyle>
	);
};
