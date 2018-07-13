import React, { Component } from 'react';

import withRename from '../../highOrderComponents/withRename';
import Tab from '../../components/tabs/Tab';

class TabContainer extends Component {
    constructor(props) {
        super(props);

        this.processRename = this.processRename.bind(this);
        this.deleteTab = this.deleteTab.bind(this);
        this.copyTab = this.copyTab.bind(this);
    }

    processRename(event) {
        if (!this.props.canProcessRename(event)) {
            return;
        }

        const value = event.target.value.trim();
        const { tab } = this.props;

        if (value && value !== tab.name) {
            this.props.updateTab({
                formUuid: tab.formUuid,
                uuid: tab.uuid,
                name: value
            });
        }

        this.props.disableEditing();
    }

    deleteTab(event) {
        if (event) {
            event.preventDefault();
        }

        const { tab } = this.props;
        this.props.deleteTab({
            formUuid: tab.formUuid,
            uuid: tab.uuid
        });
    }

    copyTab(event) {
        if (event) {
            event.preventDefault();
        }

        const { tab } = this.props;
        this.props.copyTab(tab);
    }

    render() {
        const {
            tab,
            isActive,
            isEditing,
            toggleEditingState,
            enableEditing
        } = this.props;

        return (
            <Tab
                isEditing={isEditing}
                isActive={isActive}
                uuid={tab.uuid}
                name={tab.name}
                toggleEditingState={toggleEditingState}
                processRename={this.processRename}
                enableEditing={enableEditing}
                deleteTab={this.deleteTab}
                copyTab={this.copyTab}
            />
        );
    }
}

export default withRename({ preventDefault: true })(TabContainer);
