import styled from 'styled-components';

const ProjectCardStyle = styled.div`
	width: 15rem;
	height: 10rem;
	border-radius: 0.4rem;
	margin: 1.5rem;
	overflow: hidden;
	transition: 0.3s;

	&:hover {
		transform: scale(1.02);
		transition: 0.3s;
	}

	.img {
		/* max-width: 100%; */
		max-height: 100%;
		object-fit: contain;
	}
`;

export default ProjectCardStyle;
