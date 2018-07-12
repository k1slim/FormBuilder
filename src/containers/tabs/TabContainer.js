import React, { Component } from 'react';

import Tab from '../../components/tabs/Tab';

class TabContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };

        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit(state) {
        this.setState({ isEditing: state });
    }

    render() {
        const { tab, isActive, deleteTab } = this.props;
        const { isEditing } = this.state;

        return (
            <Tab
                isActive={isActive}
                isEditing={isEditing}
                name={tab.name}
                toggleEdit={this.toggleEdit}
                deleteTab={() => deleteTab(tab)}
            />
        );
    }
}

export default TabContainer;
