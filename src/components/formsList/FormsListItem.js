import React from 'react';
import { Link } from 'react-router-dom';

import Tooltip from '../elements/Tooltip';

import wordings from '../../constants/wordings';

import '../../styles/formsList/forms-list-item.scss';

const FormsListItem = props => (
    <div className="forms-list-item">
        <Link to={`/form/${props.uuid}/123
        `}>
            <span className="form-title">
                {props.name}
            </span>
            <Tooltip overlay={wordings.RENAME}>
                <i className="far fa-edit" />
            </Tooltip>
            <Tooltip overlay={wordings.DELETE}>
                <i className="far fa-trash-alt" onClick={props.deleteForm} />
            </Tooltip>
        </Link>
    </div>
);

export default FormsListItem;
