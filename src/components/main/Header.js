import React from 'react';

import '../../styles/main/header.scss';

const Header = ({ title }) => (
    <header className="page-header">
        <h2>
            {title}
        </h2>
    </header>
);

export default Header;
