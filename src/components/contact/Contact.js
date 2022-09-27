import React from 'react';
import {useTranslation} from 'react-i18next';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {RiPagesLine} from 'react-icons/ri';
import {FiMail} from 'react-icons/fi';
import cv from '../../utils/PaveglioBrunoCv.pdf';
import ContactStyle from './styled';

export const Contact = () => {
	const [t, i18n] = useTranslation('global');
	let aboutMe = {
		email:
			'https://mail.google.com/mail/u/0/?fs=1&to=pavegliobruno@gmail.com&tf=cm',
		linkedin: 'https://www.linkedin.com/in/pavegliobruno/',
		github: 'https://github.com/Pavegliobruno',
		cv: {
			es: 'https://drive.google.com/file/d/11qDxenYfjUlorWzTBWqJTCqOrEuB3q1i/view?usp=sharing',
			en: 'https://drive.google.com/file/d/1psgngp6vS0POc8rwKYJUzGEEE1GOSLc8/view?usp=sharing',
		},
	};
	return (
		<ContactStyle>
			<div className='body'>
				<a className='toContact' name='contact' href='/#'>
					{' '}
				</a>
				<span className='contactText'>{t(`contact.contact`)}</span>
				<div className='contacts'>
					<a
						className='icon'
						target='_blank'
						href={aboutMe.linkedin}
						rel='noopener noreferrer'
						key={aboutMe + 'a'}
					>
						<AiFillLinkedin className='icon' key={aboutMe + 'icon'} />
					</a>
					<a
						className='icon'
						target='_blank'
						href={aboutMe.github}
						rel='noopener noreferrer'
						key={aboutMe + 'a'}
					>
						<AiFillGithub className='icon' key={aboutMe + 'icon'} />
					</a>
					{i18n.language === 'es' ? (
						<a
							className='icon'
							href={aboutMe.cv.es}
							download='/src/utils/PaveglioBrunoCv'
							target='_blank'
							rel='noopener noreferrer'
						>
							<RiPagesLine className='icon' key={'cv es'} /> {cv.es}
						</a>
					) : (
						<a
							className='icon'
							href={aboutMe.cv.en}
							download='/src/utils/PaveglioBrunoCv'
							target='_blank'
							rel='noopener noreferrer'
						>
							<RiPagesLine className='icon' key={'cv en'} />
						</a>
					)}

					<a
						className='icon'
						target='_blank'
						href={aboutMe.email}
						rel='noopener noreferrer'
						key={aboutMe + 'a'}
					>
						<FiMail className='icon' key={aboutMe + 'icon'} />
					</a>
				</div>
			</div>
		</ContactStyle>
	);
};
