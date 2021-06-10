import styled from 'styled-components';

const HomeStyle = styled.div`
	display: flex;
	height: 89vh;
	width: 100vw;

	.colorCircle {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		background-color: #2fa6dd; //f8b545
		width: 700px;
		height: 700px;
		border-radius: 100%;
		position: relative;
		left: -60px;
		top: 30px;
		overflow: hidden;

		.profileImg {
			max-width: 90%;
			max-height: 100%;
			object-fit: content;
		}
	}

	.titleDiv {
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 2.5rem;
		font-weight: 500;

		.myName {
			color: #2fa6dd;
		}
	}
`;

export default HomeStyle;
