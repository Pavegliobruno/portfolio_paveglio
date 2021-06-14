import styled from 'styled-components';

const ProjectsStyle = styled.div`
	background-color: #2fa6dd;
	width: 100vw;
	height: 98vh;
	transform: skewY(-4deg);

	.body {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 98vh;
		transform: skewY(4deg);

		.toProjects {
			position: absolute;
			left: 0px;
			top: 0px;
		}
	}
`;

export default ProjectsStyle;
