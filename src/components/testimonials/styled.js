import styled from 'styled-components';

const TestimonialsStyle = styled.div`
	position: relative;
	transform: skewY(-4deg);

	.body {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		position: relative;
		padding: 5rem 0;
		/* width: 100vw; */
		transform: skewY(4deg);

		.toTestimonials {
			position: absolute;
			left: 0px;
			top: 0px;
		}

		.titlee {
			color: gray;
			font-size: 4rem;
			position: absolute;
			top: 3rem;
			left: 4rem;
			opacity: 0.1;
			font-weight: 600;
			font-style: italic;
		}
	}

	@media (min-width: 360px) and (max-width: 719px) {
	}

	@media (min-width: 720px) and (max-width: 1126px) {
		.body {
			padding: 6rem 0;
		}
	}

	@media (min-width: 1127px) and (max-width: 1440px) {
		.body {
			padding: 6rem 0;
		}
	}

	@media (min-width: 1441px) {
		.body {
			padding: 8rem 0;
		}
	}
`;

export default TestimonialsStyle;
