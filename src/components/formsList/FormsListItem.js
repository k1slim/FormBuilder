import React from 'react';

const FormsListItem = props => (
    <div>
        {props.name}
        <i className="fa fa-rename" />
        <i className="fa fa-edit" />
        <i className="fa fa-trash" onClick={props.deleteForm} />
    </div>
);

export default FormsListItem;
