import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import Header from './Header';
import Footer from './Footer';
import Container from './Container';

import Styles from './Layout.styles';

export const LayoutType = {
	FullPage: 1,
	OneColumn: 2,
};

export default ({ type = LayoutType.OneColumn, children }) => {
	const hasHeaderFooter = type !== LayoutType.FullPage;
	return (
		<div css={Styles}>
			{hasHeaderFooter && <Header />}
			<Container>{children}</Container>
			{hasHeaderFooter && <Footer />}
		</div>
	);
};
