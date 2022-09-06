import React from 'react';
import {useTranslation} from 'react-i18next';
import ProjectCardStyle from './styled';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {VscGithubAlt, VscGlobe} from 'react-icons/vsc';

export const ProjectCard = ({project}) => {
	const [t] = useTranslation('global');
	return (
		<ProjectCardStyle>
			<div className='proyectCard'>
				<span className='projectTitle'>{project.name}</span>
				<span className='projectDescr'>
					{t(`projects.${project.description}`)}
				</span>
				<div className='imgDiv'>
					<Carousel
						showThumbs={false}
						autoPlay={true}
						showStatus={false}
						infiniteLoop={true}
					>
						{project &&
							project.img.map((img) => (
								<div>
									<img className='img' src={img} alt='' />
								</div>
							))}
					</Carousel>
				</div>
				<div className='sites'>
					{project.github ? (
						<a
							className='iconRef'
							target='_blank'
							href={project.github}
							rel='noopener noreferrer'
							key={project + 'a'}
						>
							<VscGithubAlt className='icon' key={project + 'icon'} />
						</a>
					) : null}

					{project.web ? (
						<a
							className='iconRef'
							target='_blank'
							href={project.web}
							rel='noopener noreferrer'
							key={project + 'a'}
						>
							<VscGlobe className='icon' key={project + 'icon'} />
						</a>
					) : null}
				</div>
			</div>
		</ProjectCardStyle>
	);
};
