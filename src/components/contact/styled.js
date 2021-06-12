import styled from 'styled-components';

const ContactStyle = styled.div`
	background-color: #2fa6dd;
	width: 100vw;
	height: 98vh;
	transform: skewY(-4deg);

	.body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 98vh;
		transform: skewY(4deg);

		.toContact {
			position: absolute;
			left: 0px;
			top: 0px;
		}
		.contactText {
			font-size: 2rem;
			text-align: justify;
		}

		.contacts {
			display: flex;
		}
		.icon {
			font-size: 2.5rem;
			margin: 1rem;
			transition-duration: 400ms;

			&:hover {
				transform: scale(1.05);
				transition-duration: 400ms;
			}
		}
	}

	@media (min-width: 360px) and (max-width: 719px) {
		height: 50vh;

		.body {
			height: 50vh;
			.contactText {
				font-size: 1.5rem;
			}
			.icon {
				font-size: 2rem;
			}
		}
	}

	@media (min-width: 720px) and (max-width: 1126px) {
		html {
			font-size: 15px;
		}
	}

	@media (min-width: 1127px) and (max-width: 1440px) {
		html {
			font-size: 18px;
		}
	}

	@media (min-width: 1441px) {
		html {
			font-size: 18px;
		}
	}
`;

export default ContactStyle;
