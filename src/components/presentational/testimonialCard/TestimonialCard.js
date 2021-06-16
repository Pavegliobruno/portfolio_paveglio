import React from 'react';
import {useTranslation} from 'react-i18next';
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im';
import TestimonialCardStyle from './styled';

export const TestimonialCard = ({testimonial}) => {
	const [t] = useTranslation('global');
	return (
		<TestimonialCardStyle>
			<div className='testimonialCard'>
				<div className='imgDiv'>
					<img className='img' src={testimonial.img} alt='img' />
				</div>
				<ImQuotesLeft className='quoteOpen' />
				<ImQuotesRight className='quoteClose' />
				<span className='testimonial'>
					{t(`testimonials.${testimonial.testimonial}`)}
				</span>
				<span className='name'>{testimonial.name}</span>
				<span className='title'>{testimonial.title}</span>
			</div>
		</TestimonialCardStyle>
	);
};
