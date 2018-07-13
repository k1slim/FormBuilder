import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '../../styles/elements/editable-field.scss';

const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
};

const EditableField = (props) => {
    const {
        children,
        isEditing,
        value,
        maxLength = 200,
        onKeyPress,
        onBlur,
        onChange,
        customClassName,
        selectOnFocus = true,
        inputRef
    } = props;

    const handleFocus = (event) => {
        if (props.onFocus) {
            props.onFocus();
        }
        event.target.select();
    };

    return isEditing ? (
        <input
            ref={inputRef}
            maxLength={maxLength}
            defaultValue={value}
            className={classNames('editable-field', { [customClassName]: customClassName })}
            onKeyPress={onKeyPress}
            onBlur={onBlur}
            onClick={handleClick}
            autoFocus // eslint-disable-line jsx-a11y/no-autofocus
            onFocus={selectOnFocus ? handleFocus : null}
            onChange={onChange}
        />
    ) : children;
};

EditableField.defaultProps = {
    maxLength: 200,
    onChange: null,
    customClassName: '',
    selectOnFocus: true,
    inputRef: null
};

EditableField.propTypes = {
    children: PropTypes.node.isRequired,
    isEditing: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    onKeyPress: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    customClassName: PropTypes.string,
    selectOnFocus: PropTypes.bool,
    inputRef: PropTypes.func
};

export default EditableField;
