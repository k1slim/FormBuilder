import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '../../styles/elements/input.scss';

const Input = props => (
    <input
        ref={props.inputRef}
        type={props.type}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        className={classNames('input', {
            [props.size]: props.size,
            [props.className]: props.className
        })}
        autoFocus={props.autoFocus} // eslint-disable-line jsx-a11y/no-autofocus
        value={props.value}
        onChange={props.onChange}
    />
);

Input.defaultProps = {
    inputRef: null,
    type: 'text',
    autoFocus: false,
    placeholder: '',
    maxLength: 200,
    className: '',
    size: '',
    onChange: null
};

Input.propTypes = {
    inputRef: PropTypes.func,
    type: PropTypes.string,
    autoFocus: PropTypes.bool,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    className: PropTypes.string,
    size: PropTypes.oneOf(['', 'small', 'medium']),
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
};

export default Input;
