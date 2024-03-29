import styled from 'styled-components';

const HomeStyle = styled.div`
	display: flex;
	margin-top: 10vh;
	padding: 1rem 0;

	.colorCircle {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		background-color: ${({theme}) => theme.skyblue};
		width: 700px;
		height: 700px;
		border-radius: 100%;
		position: relative;
		left: -60px;
		overflow: hidden;
		margin-bottom: 1rem;

		.profileImg {
			max-width: 90%;
			max-height: 100%;
			object-fit: content;
		}
	}

	.titleDiv {
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 2.5rem;
		font-weight: 500;

		.myName {
			color: ${({theme}) => theme.skyblue};
		}
	}

	@media (min-width: 360px) and (max-width: 719px) {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		padding: 0rem 0 2rem 0;
		width: 100vw;
		.colorCircle {
			display: flex;
			justify-content: center;
			align-items: flex-end;
			width: 80%;
			height: auto;
			border-radius: 100%;
			position: static;

			.profileImg {
				max-width: 90%;
				max-height: 100%;
				object-fit: content;
			}
		}

		.titleDiv {
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-size: 2.2rem;
			font-weight: 500;
		}
	}

	@media (min-width: 720px) and (max-width: 979px) {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		padding: 2rem 0;
		width: 100vw;
		.colorCircle {
			display: flex;
			justify-content: center;
			align-items: flex-end;
			width: 300px;
			height: 300px;
			border-radius: 100%;
			position: static;

			.profileImg {
				max-width: 90%;
				max-height: 100%;
				object-fit: content;
			}
		}

		.titleDiv {
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-size: 2rem;
			font-weight: 500;
		}
	}

	@media (min-width: 980px) and (max-width: 1199px) {
		padding: 3.5rem 0 3.5rem 0;

		.colorCircle {
			width: 500px;
			height: 500px;
		}
	}

	@media (min-width: 1200px) and (max-width: 1440px) {
		padding: 1rem 0 1rem 0;

		.colorCircle {
			width: 600px;
			height: 600px;
		}
	}

	@media (min-width: 1600px) {
		justify-content: space-evenly;
		.colorCircle {
			width: 800px;
			height: 800px;
			position: static;
		}

		.titleDiv {
			font-size: 3.5rem;
		}
	}
`;

export default HomeStyle;
