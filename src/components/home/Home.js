import React from 'react';
import {useTranslation} from 'react-i18next';
import HomeStyle from './styled';

export const Home = () => {
	const [t] = useTranslation('global');
	return (
		<HomeStyle>
			<a name='home' href='/#'>
				{' '}
			</a>
			<div className='colorCircle'>
				<img
					className='profileImg'
					src={
						'https://res.cloudinary.com/dlexbrcrv/image/upload/v1624035478/Proyects/Portfolio/Prueba3_vje7cc.png'
					}
					alt='profileImg'
				/>
			</div>
			<div className='titleDiv'>
				<span>{t('home.greeting')}</span>
				<span className='myName'>Bruno Paveglio</span>
				<span>{t('home.role')}</span>
			</div>
		</HomeStyle>
	);
};
