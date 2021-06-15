import styled from 'styled-components';

const TestimonialCardStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	background-color: #edf2fb;
	border-radius: 1rem;
	padding: 1rem;
	font-size: 0.9rem;
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
		color: ${({theme}) => theme.textReverse};
	}

	.name {
		font-weight: 600;
		color: ${({theme}) => theme.textReverse};
	}

	.title {
		color: #2fa6dd;
	}

	.quoteOpen {
		color: gray;
		font-size: 4rem;
		position: absolute;
		top: 70px;
		left: 20px;
		opacity: 0.15;
	}
	.quoteClose {
		color: gray;
		font-size: 4rem;
		position: absolute;
		bottom: 55px;
		right: 20px;
		opacity: 0.15;
	}

	@media (min-width: 300px) and (max-width: 399px) {
		padding: 0.5rem;

		.testimonial {
			margin: 0.7rem;
			z-index: 1;
		}

		.quoteOpen {
			top: 45px;
		}
		.quoteClose {
			bottom: 30px;
		}
	}

	@media (min-width: 400px) and (max-width: 719px) {
		width: 22rem;
		margin: 1rem;
		padding: 0.5rem;

		.testimonial {
			margin: 0.7rem;
			z-index: 1;
		}

		.quoteOpen {
			top: 45px;
		}
		.quoteClose {
			bottom: 30px;
		}
	}

	@media (min-width: 720px) and (max-width: 1126px) {
	}

	@media (min-width: 1127px) and (max-width: 1440px) {
	}

	@media (min-width: 1441px) {
	}
`;

export default TestimonialCardStyle;
