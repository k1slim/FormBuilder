import React from 'react';
import { Link } from 'react-router-dom';

const FormsListItem = props => (
    <div>
        <Link to={`/form/${props.uuid}/123
        `}>
            {props.name}
            <i className="fa fa-rename" />
            <i className="fa fa-edit" />
            <i className="fa fa-trash" onClick={props.deleteForm} />
        </Link>
    </div>
);

export default FormsListItem;
