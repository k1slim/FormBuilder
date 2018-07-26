import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Input from './Input';

import '../../styles/elements/searchable-input.scss';

const SearchableInput = props => (
    <div className={classNames('searchable-input', { [props.className]: props.className })}>
        <Input
            size={props.size}
            autoFocus={props.autoFocus}
            placeholder={props.placeholder}
            maxLength={props.maxLength}
            value={props.value}
            onChange={props.onChange} />
        <i className="fa fa-search" />
        <i className="fa fa-times" onClick={props.clearSearch} />
    </div>
);

SearchableInput.defaultProps = {
    autoFocus: false,
    placeholder: '',
    maxLength: 200,
    className: '',
    size: ''
};

SearchableInput.propTypes = {
    autoFocus: PropTypes.bool,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    className: PropTypes.string,
    size: PropTypes.oneOf(['', 'small', 'medium']),
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired
};

export default SearchableInput;
