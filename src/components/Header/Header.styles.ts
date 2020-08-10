import { css } from '@emotion/core';
import Theme from 'Theme';

export default css`
	height: 60px;
	width: 100%;
	z-index: ${Theme.layers.header};
	display: flex;
	position: sticky;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px;
	box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.16);

	.logo {
		display: flex;
		align-items: center;
		padding: 0 0 0 60px;
		text-decoration: none;
		font-size: 16px;
		font-weight: bold;

		img {
			height: 40px;
		}
	}
`;
