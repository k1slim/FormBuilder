import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '../../styles/elements/button.scss';

const Button = (props) => {
    const {
        as: Component,
        size,
        type,
        children,
        className,
        appearance,
        onClick,
        disabled
    } = props;

    return (
        <Component
            type={type}
            className={classNames('btn', size, appearance, className)}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </Component>
    );
};

Button.defaultProps = {
    as: 'button',
    type: 'button',
    appearance: 'primary',
    size: 'medium',
    className: '',
    disabled: false
};

Button.propTypes = {
    as: PropTypes.elementType,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    className: PropTypes.string,
    appearance: PropTypes.oneOf(['primary', 'secondary']),
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

export default Button;
