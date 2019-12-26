import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import Styles from './Container.styles';

export default ({ children }) => {
	return (
		<div css={Styles}>
			<div className="one-column">{children}</div>
		</div>
	);
};
