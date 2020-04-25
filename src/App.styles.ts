import { css } from '@emotion/core';
import Theme from 'Theme';
import Fonts from 'assets/fonts';

/**
 * Helper classes
 */
const Utilties = css`
	.color-primary {
		color: ${Theme.colours.primary};
	}
	.color-secondary {
		color: ${Theme.colours.primary};
	}
	.color-tertiary {
		color: ${Theme.colours.tertiary};
	}
`;

/**
 * Input styles
 */
const Inputs = css`
	input {
		font-family: ${Theme.typography.font};
		:focus {
			outline: none;
		}
	}
`;

/**
 * Button styles
 */
const Buttons = css`
	button {
		padding: 0;
		background: none;
		border: none;
		text-align: left;
		:focus {
			outline: 0;
		}
		:hover {
			cursor: pointer;
		}
		&.primary {
			padding: 20px 50px;
			background-color: ${Theme.colours.accent};
			:hover {
				background: ${Theme.colours.accentlight};
			}
			transition: background-color 0.3s ease-in-out;
		}
		&.tertiary {
			color: ${Theme.colours.accent};
			:hover {
				color: ${Theme.colours.accentlight};
			}
		}
	}
`;

export default css`
	${Fonts}

	html {
		font-size: ${Theme.typography.size};
		line-height: ${Theme.typography.lineHeight};
		font-family: ${Theme.typography.font};
	}

	body {
		margin: 0;
		color: ${Theme.colours.primary};
	}

	.layout-content {
		display: flex;
		flex-direction: row;
	}

	h1,
	h2,
	h3 {
		font-family: 'Avenir LT Std', sans-serif;
	}

	h1 {
		font-size: 50px;
		line-height: 60px;

		&.h2 {
			font-size: 40px;
			line-height: 42px;

			${Theme.mediaQueries.large} {
				font-size: 60px;
				line-height: 70px;
			}

			${Theme.mediaQueries.xlarge} {
				font-size: 70px;
				line-height: 80px;
			}
		}

		${Theme.mediaQueries.medium} {
			font-size: 60px;
			line-height: 70px;
		}

		${Theme.mediaQueries.large} {
			font-size: 80px;
			line-height: 80px;
		}

		${Theme.mediaQueries.xlarge} {
			font-size: 110px;
			line-height: 120px;
		}
	}

	h2 {
		font-size: 40px;
		line-height: 42px;

		${Theme.mediaQueries.large} {
			font-size: 60px;
			line-height: 70px;
		}

		${Theme.mediaQueries.xlarge} {
			font-size: 70px;
			line-height: 80px;
		}
	}

	h3 {
		font-size: 19px;
		line-height: 20px;

		${Theme.mediaQueries.large} {
			font-size: 22px;
			line-height: 24px;
		}

		${Theme.mediaQueries.xlarge} {
			font-size: 29px;
			line-height: 31px;
		}
	}

	h4 {
		font-size: 26px;
		line-height: 20px;
	}

	h5 {
		font-size: 18px;
		line-height: 20px;
	}

	h6 {
		font-size: 15px;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	b {
		font-size: 16px;
		line-height: 14px;

		${Theme.mediaQueries.large} {
			font-size: 19px;
			line-height: 20px;
		}

		${Theme.mediaQueries.xlarge} {
			font-size: 22px;
			line-height: 20px;
		}
	}

	ul {
		padding-left: 20px;
		li {
			padding-bottom: 15px;
			padding-left: 13px;
		}
	}

	${Utilties};
	${Buttons};
	${Inputs};
`;
