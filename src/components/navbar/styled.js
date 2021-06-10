import styled from 'styled-components';

const NavbarStyle = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-bottom: 2px solid #e1e2df;
	width: 85vw;
	height: 10vh;
	padding: 2rem 2rem;
	/* position: fixed; */

	.homeItem {
		font-size: 1.7rem;
		font-weight: 600;
		font-family: 'Megrim', cursive;
	}
	.language {
		.langBtn {
			display: flex;
			justify-content: center;
			align-content: center;
			border: none;
			background: none;
			font-size: 1rem;

			&:hover {
				cursor: pointer;
			}

			&:active {
				transform: scale(0.9);
			}
		}
	}
`;

export default NavbarStyle;
