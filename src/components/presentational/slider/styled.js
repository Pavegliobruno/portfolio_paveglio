import styled from 'styled-components';

const CarouselStyle = styled.div`
	width: 90%;
	padding: 0 10%;

	.slick-arrow.slick-prev,
	.slick-arrow.slick-next {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2rem;
		height: 2rem;
		font-size: 1.5rem;
		border-radius: 2rem;
		background-color: #edf2fb;
		color: black;
	}
	.slick-prev {
		left: -5rem;
	}
	.slick-next {
		right: -5rem;
	}
	.slick-prev::before,
	.slick-next::before {
		display: none;
	}
`;

export default CarouselStyle;
