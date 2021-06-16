import styled from 'styled-components';

const TestimonialCardStyle = styled.div`
	width: 100%;
	.testimonialCard {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 3%;
		background-color: #edf2fb;
		border-radius: 1rem;
		padding: 1rem;
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
			top: 4.5rem;
			left: 2rem;
			opacity: 0.15;
		}
		.quoteClose {
			color: gray;
			font-size: 4rem;
			position: absolute;
			bottom: 4rem;
			right: 2rem;
			opacity: 0.15;
		}
	}
`;

export default TestimonialCardStyle;
