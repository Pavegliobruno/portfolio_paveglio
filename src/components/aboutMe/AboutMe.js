import React from 'react';
import {useTranslation} from 'react-i18next';
import AboutStyle from './styled';
import {front} from './data';
import {back} from './data';

export const AboutMe = () => {
	const [t] = useTranslation('global');
	return (
		<AboutStyle>
			<div className='body'>
				<a className='toAbout' name='about' href='/#'>
					{' '}
				</a>
				<span className='title'>{t(`about.aboutMe`)}</span>
				<span className='aboutMe'>{t(`about.first`)}</span>
				<span className='aboutMore'>{t(`about.second`)}</span>
				<div className='iconsDiv'>
					<div className='icons'>
						<div className='nose'>
							{front &&
								front.map((el) => (
									<div className='icon'>
										<a
											className='name'
											href={el.web}
											target='_blank'
											rel='noreferrer'
										>
											<div className='imgDiv'>
												<img className='img' src={el.img} alt={'img'} />
											</div>
											{el.name}
										</a>
									</div>
								))}
						</div>
						<div className='separator' />
						<span className='iconsTitle'>Front-end</span>
					</div>
					<div className='icons'>
						<div className='nose'>
							{back &&
								back.map((el) => (
									<div className='icon'>
										<a
											className='name'
											href={el.web}
											target='_blank'
											rel='noreferrer'
										>
											<div className='imgDiv'>
												<img className='img' src={el.img} alt={'img'} />
											</div>
											{el.name}
										</a>
									</div>
								))}
						</div>
						<div className='separator' />
						<span className='iconsTitle'>Back-end</span>
					</div>
				</div>
			</div>
		</AboutStyle>
	);
};
