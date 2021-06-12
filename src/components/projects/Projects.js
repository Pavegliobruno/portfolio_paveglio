import React from 'react';
import {useTranslation} from 'react-i18next';
import ProjectsStyle from './styled';
import {projects} from './data';
import {ProjectCard} from '../presentational/projectCard/ProjectCard';

export const Projects = () => {
	const [t] = useTranslation('global');
	return (
		<ProjectsStyle>
			<div className='body'>
				<a className='toProjects' name='projects' href='/#'>
					{' '}
				</a>
				{/* <span className='title'>{t(`projects.projects`)}</span> */}
				{projects &&
					projects.map((project) => <ProjectCard project={project} />)}
			</div>
		</ProjectsStyle>
	);
};
