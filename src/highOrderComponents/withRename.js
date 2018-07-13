import React, { Component } from 'react';

const defaultOptions = {
    preventDefault: false
};

export const canProcessRename = event => !event.key || event.key === 'Enter';

const withRename = (userOptions = {}) => WrappedComponent => class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };

        this.options = {
            ...defaultOptions,
            ...userOptions
        };

        this.toggleEditingState = this.preventDefault.bind(this,
            this.toggleEditingState.bind(this));
        this.disableEditing = this.preventDefault.bind(this, this.disableEditing.bind(this));
        this.enableEditing = this.preventDefault.bind(this, this.enableEditing.bind(this));
    }

    preventDefault(cb, event, ...rest) {
        if (this.options.preventDefault && event && event.preventDefault) {
            event.preventDefault();
        }

        cb(event, ...rest);
    }

    toggleEditingState(state) {
        this.setState({ isEditing: state });
    }

    enableEditing() {
        this.toggleEditingState(true);
    }

    disableEditing() {
        this.toggleEditingState(false);
    }

    render() {
        const { isEditing } = this.state;

        return (
            <WrappedComponent
                {...this.props}
                isEditing={isEditing}
                canProcessRename={canProcessRename}
                toggleEditingState={this.toggleEditingState}
                enableEditing={this.enableEditing}
                disableEditing={this.disableEditing}
            />
        );
    }
};

export default withRename;
