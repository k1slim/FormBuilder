import React from 'react';
import { Link } from 'react-router-dom';

import Tooltip from '../elements/Tooltip';

import wordings from '../../constants/wordings';

import '../../styles/formsList/forms-list-item.scss';
import EditableField from '../elements/EditableField';
import { formatDate } from '../../helpers/datesHelpers';

const FormsListItem = props => (
    <div className="forms-list-item">
        <Link to={`/form/${props.uuid}/123
        `}>
            <div className="col form-title">
                <span onClick={props.enableEditing}>
                    <EditableField
                        isEditing={props.isEditing}
                        value={props.name}
                        onBlur={props.processRename}
                        onKeyPress={props.processRename}
                    >
                        {props.name}
                    </EditableField>
                </span>
            </div>
            <div className="col created-at semi-bold">
                {formatDate(props.createdAt, {
                    hour: '2-digit',
                    minute: '2-digit'
                })}
            </div>
            <div className="col actions-col">
                <Tooltip overlay={wordings.RENAME}>
                    <i className="far fa-edit" onClick={props.enableEditing} />
                </Tooltip>
                <Tooltip overlay={wordings.DELETE}>
                    <i className="far fa-trash-alt" onClick={props.deleteForm} />
                </Tooltip>
            </div>
        </Link>
    </div>
);

export default FormsListItem;
