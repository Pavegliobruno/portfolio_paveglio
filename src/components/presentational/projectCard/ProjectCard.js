import React, {useState} from 'react';
import ProjectCardStyle from './styled';

export const ProjectCard = ({project}) => {
	const [state, setState] = useState(true);
	return (
		<ProjectCardStyle
			onMouseOver={() => setState(false)}
			onMouseOut={() => setState(true)}
		>
			{state ? <img className='img' src={project.img[0]} alt='' /> : 'holis'}
		</ProjectCardStyle>
	);
};
