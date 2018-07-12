import React from 'react';
import classNames from 'classnames';

import '../../styles/tabs/tab.scss';

const Tab = (props) => {
    const {
        name,
        isActive,
        toggleEdit,
        deleteTab,
        copyTab
    } = props;

    return (
        <div className={classNames('tab', { active: isActive })}>
            <span className="tab-name">
                {name}
            </span>
            <i className="far fa-clone" onClick={copyTab} />
            <i className="far fa-edit" onClick={toggleEdit} />
            <i className="far fa-trash-alt" onClick={deleteTab} />
        </div>
    );
};

export default Tab;
