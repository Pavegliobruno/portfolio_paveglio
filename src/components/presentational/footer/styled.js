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

	.register {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #2fa6dd;
	}

	.toTop {
		position: fixed;
		right: 1rem;
		bottom: 1rem;
		font-size: 1.5rem;
	}
`;

export default FooterStyle;
