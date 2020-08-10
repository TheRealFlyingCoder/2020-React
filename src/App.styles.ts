import { css } from '@emotion/core';
import ModernNormalise from 'utils/ModernNormalize';

export default css`
	${ModernNormalise}
	html,
	body,
	#root {
		scroll-behavior: smooth;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;

		.route {
			display: flex;
			flex-direction: column;
			height: 100%;
			min-height: 100vh;

			main {
				flex: 1 0 auto;
			}

			header,
			footer {
				flex: none;
			}
		}
	}
`;
