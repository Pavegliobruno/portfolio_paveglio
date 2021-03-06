import styled from 'styled-components';

const ProjectCardStyle = styled.div`
	width: 100%;
	.proyectCard {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 3%;
		background-color: ${({theme}) => theme.body};
		border-radius: 0.6rem;

		.projectTitle {
			font-size: 1.5rem;
			font-weight: 500;
			margin: 0.5rem;
			padding: 0 1rem;
			border-bottom: 2px solid #e1e2df;
			color: ${({theme}) => theme.text};
		}

		.projectDescr {
			margin: 0.7rem 0.5rem;
			text-align: center;
			color: ${({theme}) => theme.text};
		}
		.imgDiv {
			width: 100%;
			display: flex;
			align-items: center;
			padding: 0 0.2rem;
			.img {
				max-width: 100%;
				max-height: 100%;
				object-fit: contain;
			}
		}

		.sites {
			padding: 0.7rem;
			display: flex;
			align-items: center;
			.iconRef {
				display: flex;
				align-items: center;
				.icon {
					font-size: 1.6rem;
					color: ${({theme}) => theme.text};
				}
			}
		}
	}
`;

export default ProjectCardStyle;
