import styled from 'styled-components';

const FooterStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	font-size: 0.7rem;
	font-weight: 400;
	color: black;
	padding-top: 4rem;
	color: ${({theme}) => theme.text};

	.register {
		display: flex;
		justify-content: center;
		align-items: center;
		color: ${({theme}) => theme.skyblue};
	}

	.toTop {
		position: fixed;
		right: 1rem;
		bottom: 1rem;
		font-size: 1.5rem;
		color: ${({theme}) => theme.text};
	}

	@media (min-width: 360px) and (max-width: 719px) {
		padding-top: 1.5rem;
		padding-bottom: 0.5rem;
		.toTop {
			right: 2rem;
			bottom: 1.5rem;
			font-size: 1.8rem;
		}
	}

	@media (min-width: 720px) and (max-width: 1126px) {
		padding-top: 1.5rem;
		padding-bottom: 0.5rem;
		.toTop {
			right: 2rem;
			bottom: 1.5rem;
			font-size: 1.8rem;
		}
	}

	@media (min-width: 1127px) and (max-width: 1440px) {
		padding-top: 3rem;
		.toTop {
			right: 3rem;
			bottom: 1.5rem;
			font-size: 1.8rem;
		}
	}
`;

export default FooterStyle;
