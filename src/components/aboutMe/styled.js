import styled from 'styled-components';

const AboutStyle = styled.div`
	.body {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		/* width: 100vw; */
		font-size: 1.3rem;
		padding: 3.5rem 5rem;

		.toAbout {
			position: absolute;
			top: -3rem;
		}

		.title {
			color: ${({theme}) => theme.titles};
			font-size: 5rem;
			position: absolute;
			top: 5rem;
			left: 5rem;
			opacity: 0.1;
			font-weight: 600;
			font-style: italic;
		}

		.aboutMe {
			margin-bottom: 1rem;
			text-align: justify;
		}

		.aboutMore {
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
							color: ${({theme}) => theme.text};
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
			margin-top: 1rem;
			font-size: 1rem;
			padding: 3.5rem 4rem;
			.title {
				font-size: 4rem;
				top: 0rem;
				left: 1rem;
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
		.body {
			font-size: 1rem;
			margin-top: 0rem;

			.title {
				font-size: 4rem;
				top: 0rem;
				left: 1rem;
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

	@media (min-width: 1127px) and (max-width: 1440px) {
		.body {
			padding: 4rem 4rem;
			margin-top: 0rem;

			.title {
				font-size: 4rem;
				top: 0rem;
				left: 1rem;
			}

			.iconsDiv {
				margin-top: 2rem;
				.icons {
					margin: 0 1rem;
				}
			}
		}
	}

	@media (min-width: 1441px) {
		.body {
			padding: 4rem 6rem;

			.title {
				font-size: 4rem;
				top: 0rem;
				left: 1rem;
			}

			.iconsDiv {
				margin-top: 2rem;
				.icons {
					margin: 0 1rem;
				}
			}
		}
	}
`;

export default AboutStyle;
