import styled from 'styled-components';

const HomeStyle = styled.div`
	display: flex;
	width: 100vw;
	padding-top: 10vh;	

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
		top: 10px;
		overflow: hidden;

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
			color: ${({theme}) => theme.skyblue};;
		}
	}

	@media (min-width: 360px) and (max-width: 719px) {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		height: 60vh;
		width: 100vw;
padding-top: 0vh;
		.colorCircle {
			display: flex;
			justify-content: center;
			align-items: flex-end;
			width: 250px;
			height: 250px;
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

	@media (min-width: 720px) and (max-width: 979px) {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		height: 60vh;
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
		height: 70vh;

		.colorCircle {
			width: 500px;
			height: 500px;
			top: 80px;

			
		}
	}

	@media (min-width: 1200px) and (max-width: 1440px) {
		height: 75vh;

		.colorCircle {
			width: 600px;
			height: 600px;
			top: 70px;

			
		}
	}

	@media (min-width: 1441px) {
	}
`;

export default HomeStyle;
