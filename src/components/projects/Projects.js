import React from 'react';
import ProjectsStyle from './styled';
import {projects} from './data';
import {ProjectCard} from '../presentational/projectCard/ProjectCard';

export const Projects = () => {
	return (
		<ProjectsStyle>
			<div className='body'>
				<a className='toProjects' name='projects' href='/#'>
					{' '}
				</a>
				{projects &&
					projects.map((project) => <ProjectCard project={project} />)}
			</div>
		</ProjectsStyle>
	);
};
