import styled from 'styled-components';

const TestimonialCardStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 20rem;
	background-color: #edf2fb;
	border-radius: 1rem;
	margin: 1.5rem;
	padding: 1rem;
	font-size: 0.8rem;
	position: relative;

	.imgDiv {
		width: 4rem;
		height: 4rem;
		border-radius: 100%;

		.img {
			max-width: 100%;
			max-height: 100%;
			object-fit: content;
			border-radius: 100%;
		}
	}

	.testimonial {
		margin: 1rem;
		z-index: 1;
		text-align: center;
	}

	.name {
		font-weight: 600;
	}

	.title {
		color: #2fa6dd;
	}

	.quoteOpen {
		color: gray;
		font-size: 4rem;
		position: absolute;
		top: 85px;
		left: 20px;
		opacity: 0.15;
	}
	.quoteClose {
		color: gray;
		font-size: 4rem;
		position: absolute;
		bottom: 65px;
		right: 20px;
		opacity: 0.15;
	}
`;

export default TestimonialCardStyle;
