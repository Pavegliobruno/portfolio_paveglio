import styled from 'styled-components';

const ContactStyle = styled.div`
	background-color: #2fa6dd;
	width: 100vw;
	height: 98vh;
	transform: skewY(-4deg);

	.body {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 98vh;
		transform: skewY(4deg);

		.toTestimonials {
			position: absolute;
			left: 0px;
			top: 0px;
		}
	}
`;

export default ContactStyle;
