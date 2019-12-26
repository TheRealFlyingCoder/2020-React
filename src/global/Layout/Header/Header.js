import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import Styles from './Header.styles';
import Logo from '~/assets/FlyingCoder.png';

export default () => {
	return (
	<div css={Styles}>
		<div className="logo">
			<img src={Logo} alt="The Flying Coder's Logo"></img>
			<h2>Flying Coder's React SPA</h2>
		</div>
	</div>
	);
};
