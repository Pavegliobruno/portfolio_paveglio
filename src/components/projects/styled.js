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

	@media (min-width: 360px) and (max-width: 719px) {
		height: 70vh;
		.body {
			height: 70vh;
		}
	}

	@media (min-width: 720px) and (max-width: 1126px) {
		height: 70vh;
		.body {
			height: 70vh;
		}
	}

	@media (min-width: 1127px) and (max-width: 1440px) {
		height: 80vh;
		.body {
			height: 80vh;
		}
	}

	@media (min-width: 1441px) {
	}
`;

export default ProjectsStyle;
