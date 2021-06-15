import styled from 'styled-components';

const NavbarStyle = styled.div`
	display: flex;
	justify-content: center;
	.normalNav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 2px solid #e1e2df;
		width: 85vw;
		height: 10vh;
		padding: 2rem 2rem;
		.item {
			color: ${({theme}) => theme.text};
		}
		.homeItem {
			font-size: 1.7rem;
			font-weight: 600;
			font-family: 'Megrim', cursive;
			color: ${({theme}) => theme.text};
		}

		.lang-theme {
			display: flex;
			align-items: center;

			.language {
				.langBtn {
					display: flex;
					justify-content: center;
					align-content: center;
					border: none;
					background: none;
					font-size: 1.1rem;
					color: ${({theme}) => theme.text};
					margin-right: 0.5rem;
					&:hover {
						cursor: pointer;
					}

					&:active {
						transform: scale(0.9);
					}
				}
			}
			.themeBtn {
				display: flex;
				border: none;
				background: none;
				color: ${({theme}) => theme.text};
				font-size: 1.2rem;
				&:hover {
					cursor: pointer;
				}

				&:active {
					transform: scale(0.9);
				}
			}
		}
	}

	.mobileNav {
		display: none;
		width: 100vw;

		.language {
			.langBtn {
				display: flex;
				justify-content: center;
				align-content: center;
				border: none;
				background: none;

				.langIcon {
					font-size: 1.7rem;
					&:hover {
						cursor: pointer;
					}

					&:active {
						transform: scale(0.9);
					}
				}
			}
			.themeBtn {
				border: none;
				font-size: 1.7rem;
				&:hover {
					cursor: pointer;
				}

				&:active {
					transform: scale(0.9);
				}
			}
		}

		.darkMode {
			background: none;
			display: flex;
			object-fit: center;
			.themeBtn {
				border: none;
				background: none;
				font-size: 1.7rem;
				margin-top: 1.4rem;
				display: flex;
				object-fit: center;
			}
		}

		#menuToggle {
			display: block;
			position: relative;
			top: 30px;
			left: 30px;

			z-index: 1;

			-webkit-user-select: none;
			user-select: none;
		}

		#menuToggle a {
			text-decoration: none;
			color: #232323;

			transition: color 0.3s ease;
		}

		#menuToggle a:hover {
			color: tomato;
		}

		#menuToggle input {
			display: block;
			width: 40px;
			height: 32px;
			position: absolute;
			top: -7px;
			left: -5px;

			cursor: pointer;

			opacity: 0; /* hide this */
			z-index: 2; /* and place it over the hamburger */

			-webkit-touch-callout: none;
		}

		/*
 * Just a quick hamburger
 */
		#menuToggle span {
			display: block;
			width: 33px;
			height: 4px;
			margin-bottom: 5px;
			position: relative;

			background: #cdcdcd;
			border-radius: 3px;

			z-index: 1;

			transform-origin: 4px 0px;

			transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
				background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
		}

		#menuToggle span:first-child {
			transform-origin: 0% 0%;
		}

		#menuToggle span:nth-last-child(2) {
			transform-origin: 0% 100%;
		}

		/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
		#menuToggle input:checked ~ span {
			opacity: 1;
			transform: rotate(45deg) translate(-2px, -1px);
			background: #232323;
		}

		/*
 * But let's hide the middle one.
 */
		#menuToggle input:checked ~ span:nth-last-child(3) {
			opacity: 0;
			transform: rotate(0deg) scale(0.2, 0.2);
		}

		/*
 * Ohyeah and the last one should go the other direction
 */
		#menuToggle input:checked ~ span:nth-last-child(2) {
			transform: rotate(-45deg) translate(0, -1px);
		}

		/*
 * Make this absolute positioned
 * at the top left of the screen
 */
		#menu {
			position: absolute;
			width: 230px;
			margin: -100px 0 0 -50px;
			padding: 50px;
			padding-top: 125px;

			background: #ededed;
			list-style-type: none;
			-webkit-font-smoothing: antialiased;
			/* to stop flickering of text in safari */

			transform-origin: 0% 0%;
			transform: translate(-100%, 0);

			transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
		}

		#menu li {
			padding: 10px 0;
			font-size: 22px;
		}

		/*
 * And let's slide it in from the left
 */
		#menuToggle input:checked ~ ul {
			transform: none;
		}
	}

	@media (min-width: 360px) and (max-width: 719px) {
		.normalNav {
			display: none;
		}
		.mobileNav {
			display: flex;
		}
	}

	@media (min-width: 720px) and (max-width: 1126px) {
	}

	@media (min-width: 1127px) and (max-width: 1440px) {
	}

	@media (min-width: 1441px) {
	}
`;

export default NavbarStyle;
