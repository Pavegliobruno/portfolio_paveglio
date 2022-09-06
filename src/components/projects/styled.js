import styled from 'styled-components';

const ProjectsStyle = styled.div`
	background-color: ${({theme}) => theme.skyblue};
	/* width: 100vw; */
	transform: skewY(-4deg);

	.body {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		position: relative;
		padding: 5rem 0;
		transform: skewY(4deg);

		.toProjects {
			position: absolute;
			left: 0px;
			top: 0px;
		}
	}

	@media (min-width: 360px) and (max-width: 719px) {
	}

	@media (min-width: 720px) and (max-width: 1126px) {
		.body {
			padding: 6rem 0;
		}
	}

	@media (min-width: 1127px) and (max-width: 1440px) {
		.body {
			padding: 6rem 0;
		}
	}

	@media (min-width: 1441px) {
		.body {
			padding: 8rem 0;
		}
	}
`;

export default ProjectsStyle;
