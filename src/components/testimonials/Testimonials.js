import React from 'react';
import TestimonialsStyle from './styled';
import {testimonials} from './data';
import {TestimonialCard} from '../presentational/testimonialCard/TestimonialCard';

export const Testimonials = () => {
	return (
		<TestimonialsStyle>
			<a className='toTestimonials' name='testimonial' />
			{testimonials &&
				testimonials.map((testimonial) => (
					<TestimonialCard testimonial={testimonial} />
				))}
		</TestimonialsStyle>
	);
};
