import React from 'react';
import ProjectsStyle from './styled';
import {projects} from './data';
import SliderCards from '../presentational/sliderProjects/sliderProjects';

export const Projects = () => {
	return (
		<ProjectsStyle>
			<div className='body'>
				<a className='toProjects' name='projects' href='/#'>
					{' '}
				</a>
				<SliderCards data={projects} />
			</div>
		</ProjectsStyle>
	);
};
