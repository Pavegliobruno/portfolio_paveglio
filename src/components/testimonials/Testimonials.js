import React from 'react';
import TestimonialsStyle from './styled';
import {testimonials} from './data';
import SliderCards from '../presentational/sliderTestimonials/sliderTestimonials';

export const Testimonials = () => {
	return (
		<TestimonialsStyle>
			<div className='body'>
				<a className='toTestimonials' name='testimonial' href='#/'>
					{' '}
				</a>
				<SliderCards data={testimonials} />
			</div>
		</TestimonialsStyle>
	);
};
