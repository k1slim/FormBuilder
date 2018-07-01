import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '../../styles/elements/button.scss';

const Button = (props) => {
    const {
        text,
        disabled,
        size,
        type,
        className,
        onClick
    } = props;

    return (
        <button
            className={classNames('btn', size, type, { [className]: className })}
            disabled={disabled}
            type="button"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

Button.defaultProps = {
    disabled: false,
    size: 'medium',
    className: '',
    type: 'primary'
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['primary', 'secondary']),
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default Button;
