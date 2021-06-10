import React from 'react';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {RiPagesLine} from 'react-icons/ri';
import ContactStyle from './styled';

export const Contact = () => {
	let aboutMe = {
		fullName: 'Bruno Paveglio',
		image:
			'https://res.cloudinary.com/dlexbrcrv/image/upload/v1622386784/Proyects/pic_profile_lktftw.png',
		linkedin: 'https://www.linkedin.com/in/pavegliobruno/',
		github: 'https://github.com/Pavegliobruno',
		cv: 'https://drive.google.com/drive/folders/1ltpZjk-YCHUSK4JWtLGcPSjjm98nLtOa?usp=sharing',
	};
	return (
		<ContactStyle>
			<div className='body'>
				<a className='toTestimonials' name='contact' />

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
			</div>
		</ContactStyle>
	);
};
