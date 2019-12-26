import { css } from '@emotion/core';
import Theme from 'Theme';

export default css`
	padding-top: ${Theme.height.header};
    min-height: calc(100vh - (${Theme.height.header} + ${Theme.height.footer}));
	width: 100%;
    display: flex;
	justify-content: center;

	.one-column {
		min-height: ${Theme.height.containerMin};
		width: ${Theme.width.oneCOlumn};
		max-width: ${Theme.width.oneCOlumnMax};
		padding: 15px;
		display: flex;
		flex-direction: column;
		background-color: ${Theme.colours.blackTransparent};

		${Theme.helpers.containerText('One Column')}
	}
`;
