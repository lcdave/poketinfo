import PropTypes from 'prop-types';
import React from 'react';

import './_header.scss'

const Header = ({siteTitle}) => (
	<div className="mod_header">
		<h1>{siteTitle}</h1>
	</div>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: '',
};

export default Header;