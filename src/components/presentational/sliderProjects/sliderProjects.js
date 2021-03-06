import React from 'react';
import CarouselStyle from './styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi';
import {ProjectCard} from '../projectCard/ProjectCard';

function SliderCards({data}) {
	const config = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					arrows: false,
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 720,
				settings: {
					arrows: false,
					slidesToShow: 1,
				},
			},
		],
	};

	const PreviusBtn = (props) => {
		const {className, onClick} = props;
		return (
			<div className={className} onClick={onClick}>
				<BiLeftArrowAlt />
			</div>
		);
	};

	const NextBtn = (props) => {
		const {className, onClick} = props;
		return (
			<div className={className} onClick={onClick}>
				<BiRightArrowAlt />
			</div>
		);
	};

	return (
		<CarouselStyle>
			<Slider {...config} prevArrow={<PreviusBtn />} nextArrow={<NextBtn />}>
				{data
					? data.map((project) => {
							return <ProjectCard project={project} />;
					  })
					: null}
			</Slider>
		</CarouselStyle>
	);
}

export default SliderCards;
