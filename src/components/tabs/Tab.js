import React from 'react';
import classNames from 'classnames';

import Tooltip from '../elements/Tooltip';
import EditableField from '../elements/EditableField';

import wordings from '../../constants/wordings';

import '../../styles/tabs/tab.scss';

const Tab = (props) => {
    const {
        name,
        isEditing,
        isActive,
        isDragging,
        deleteTab,
        copyTab,
        processRename,
        enableEditing
    } = props;

    return (
        <div className={classNames('tab', { active: isActive, dragging: isDragging })}>
            <span className="tab-name" onClick={enableEditing}>
                <EditableField
                    isEditing={isEditing}
                    value={name}
                    onBlur={processRename}
                    onKeyPress={processRename}
                >
                    {name}
                </EditableField>
            </span>
            <Tooltip overlay={wordings.COPY}>
                <i className="far fa-clone" onClick={copyTab} />
            </Tooltip>
            <Tooltip overlay={wordings.RENAME}>
                <i className="far fa-edit" onClick={enableEditing} />
            </Tooltip>
            <Tooltip overlay={wordings.DELETE}>
                <i className="far fa-trash-alt" onClick={deleteTab} />
            </Tooltip>
        </div>
    );
};

export default Tab;
