import React from 'react';

import Tooltip from '../elements/Tooltip';

import wordings from '../../constants/wordings';

import '../../styles/formsList/forms-list-item.scss';

const FormsListItem = props => (
    <div className="forms-list-item">
        <span className="form-title">
            {props.name}
        </span>
        <Tooltip overlay={wordings.RENAME}>
            <i className="far fa-edit" />
        </Tooltip>
        <Tooltip overlay={wordings.DELETE}>
            <i className="far fa-trash-alt" onClick={props.deleteForm} />
        </Tooltip>
    </div>
);

export default FormsListItem;
