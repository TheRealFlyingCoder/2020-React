import { css } from '@emotion/core';
import Theme from 'Theme';

export default css`
	height: ${Theme.height.header};
	width: 100%;
	background-color: ${Theme.colours.black};
	position: fixed;
	top: 0;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: space-between;
	z-index: ${Theme.layer.header};
	${Theme.helpers.containerText('Header', false)}
	.logo {
		display: flex;
		align-items: center;
		margin-left: 15px;
		img {
			max-width: 50px;
		}

		h2 {
			margin-left: 15px;
			color: ${Theme.colours.white}
		}
	}
`;
