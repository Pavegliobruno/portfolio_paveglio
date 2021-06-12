import React from 'react';
import {useTranslation} from 'react-i18next';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {RiPagesLine} from 'react-icons/ri';
import {FiMail} from 'react-icons/fi';
import ContactStyle from './styled';

export const Contact = () => {
	const [t] = useTranslation('global');
	let aboutMe = {
		email:
			'https://mail.google.com/mail/u/0/?fs=1&to=pavegliobruno@gmail.com&tf=cm',
		linkedin: 'https://www.linkedin.com/in/pavegliobruno/',
		github: 'https://github.com/Pavegliobruno',
		cv: 'https://drive.google.com/drive/folders/1ltpZjk-YCHUSK4JWtLGcPSjjm98nLtOa?usp=sharing',
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
					<a
						className='icon'
						target='_blank'
						href={aboutMe.cv}
						rel='noopener noreferrer'
						key={aboutMe + 'a'}
					>
						<RiPagesLine className='icon' key={aboutMe + 'icon'} />
					</a>
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
