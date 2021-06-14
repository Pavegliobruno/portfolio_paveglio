import styled from 'styled-components';

const ProjectCardStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	background-color: #fff;
	border-radius: 0.6rem;

	.projectTitle {
		font-size: 1.8rem;
		font-weight: 500;
		margin: 0.5rem;
		padding: 0 1rem;
		border-bottom: 2px solid #e1e2df;
	}

	.projectDescr {
		margin: 0.7rem 0.5rem;
		text-align: center;
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
				font-size: 1.8rem;
			}
		}
	}
`;

export default ProjectCardStyle;
