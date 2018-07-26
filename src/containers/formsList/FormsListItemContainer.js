import React, { Component } from 'react';

import FormsListItem from '../../components/formsList/FormsListItem';
import withRename from '../../highOrderComponents/withRename';

const onClick = (cb, event) => {
    if (event) {
        event.preventDefault();
    }

    cb();
};

class FormsListItemContainer extends Component {
    constructor(props) {
        super(props);

        this.processRename = this.processRename.bind(this);
        this.deleteForm = onClick.bind(this, this.deleteForm.bind(this));
    }

    processRename(event) {
        if (!this.props.canProcessRename(event)) {
            return;
        }

        const value = event.target.value.trim();
        const { name, uuid } = this.props;

        if (value && value !== name) {
            this.props.updateForm({ uuid, name: value });
        }

        this.props.disableEditing();
    }

    deleteForm(event) {
        if (event) {
            event.preventDefault();
        }

        const { uuid } = this.props;
        this.props.deleteForm({ uuid });
    }

    render() {
        const {
            uuid,
            name,
            createdAt,
            isEditing,
            enableEditing
        } = this.props;

        return (
            <FormsListItem
                isEditing={isEditing}
                uuid={uuid}
                name={name}
                createdAt={createdAt}
                processRename={this.processRename}
                enableEditing={enableEditing}
                deleteForm={this.deleteForm}
            />
        );
    }
}

export default withRename({ preventDefault: true })(FormsListItemContainer);
