import styled from 'styled-components';

const AboutStyle = styled.div`
	.body {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		height: 98vh;
		width: 100vw;
		font-size: 1.3rem;
		margin-top: 3rem;
		padding-top: 6rem;

		.toAbout {
			position: absolute;
			left: 0px;
			top: 3rem;
		}

		.title {
			color: gray;
			font-size: 5rem;
			position: absolute;
			top: 5rem;
			left: 5rem;
			opacity: 0.1;
			font-weight: 600;
			font-style: italic;
		}

		.aboutMe {
			width: 60vw;
			margin-bottom: 1rem;
			text-align: justify;
		}

		.aboutMore {
			width: 60vw;
			text-align: justify;
		}

		.iconsDiv {
			display: flex;
			margin-top: 1rem;
			.icons {
				display: flex;
				flex-direction: column;
				margin: 0 1rem;
				.nose {
					display: flex;
					.icon {
						margin: 1rem 1rem 0.5rem 1rem;
						transition-duration: 400ms;
						.name {
							font-size: 0.6rem;
							font-weight: 500;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							align-content: center;
							.imgDiv {
								width: 2.6rem;
								height: 2.6rem;

								.img {
									width: 100%;
									height: 100%;
									object-fit: contain;
								}
							}
						}
						&:hover {
							transform: scale(1.05);
							transition-duration: 400ms;
						}
					}
				}
				.separator {
					border-top: 2px solid #e1e2df;
					width: 90%;
					margin-left: 0.5rem;
				}
				.iconsTitle {
					font-size: 0.7rem;
					margin-left: 0.7rem;
				}
			}
		}
	}

	@media (min-width: 360px) and (max-width: 719px) {
		.body {
			width: 99vw;
			height: 83vh;
			font-size: 1rem;
			margin-top: 0rem;
			padding-top: 0rem;

			.toAbout {
				position: absolute;
				left: 0px;
				top: 3rem;
			}

			.title {
				font-size: 4rem;
				top: 1rem;
				left: 1rem;
			}

			.aboutMe {
				width: 80vw;
			}

			.aboutMore {
				width: 80vw;
			}

			.iconsDiv {
				flex-direction: column;
				margin-top: 2rem;
				.icons {
					align-items: center;
					margin: 0 1rem;
				}
			}
		}
	}

	@media (min-width: 720px) and (max-width: 1126px) {
		border: 1px solid red;
	}

	@media (min-width: 1127px) and (max-width: 1440px) {
		html {
			font-size: 18px;
			background-color: green;
		}
	}

	@media (min-width: 1441px) {
		html {
			font-size: 18px;
			background-color: yellow;
		}
	}
`;

export default AboutStyle;