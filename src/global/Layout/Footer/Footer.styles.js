import { css } from '@emotion/core';
import Theme from 'Theme';

export default css`
	height: ${Theme.height.footer};
	width: 100%;
	background-color: ${Theme.colours.lightGrey};
	display: flex;
	justify-content: space-between;
	${Theme.helpers.containerText('Footer')}
`;
