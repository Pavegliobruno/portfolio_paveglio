import React from 'react';
import {RiRegisteredLine} from 'react-icons/ri';
import {CgArrowUpO} from 'react-icons/cg';
import FooterStyle from './styled';

export const Footer = () => {
	return (
		<FooterStyle>
			<>
				BRUNO PAVEGLIO &nbsp;
				<div className='register'>
					<RiRegisteredLine /> 2021
				</div>
			</>
			<a className='toTop' href='#top'>
				<CgArrowUpO />
			</a>
		</FooterStyle>
	);
};
