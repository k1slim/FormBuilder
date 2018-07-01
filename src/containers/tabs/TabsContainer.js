import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import wordings from '../../constants/wordings';
import Button from '../../components/elements/Button';
import { generateGUID } from '../../helpers/guid';

class TabsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { tabs: {} };

        this.addTab = this.addTab.bind(this);
    }

    addTab() {
        const { formUuid } = this.props;

        this.props.addTab({ formUuid, uuid: generateGUID(), name: 'Untitled' });
    }

    render() {
        const { activeTabUuid } = this.props;
        const { tabs } = this.state;

        return (
            <section>
                {tabs.map(tab => (
                    <Tab
                        key={tab.uuid}
                        isActive={activeTabUuid === tab.uuid}
                        updateTab={this.props.updateTab}
                        deleteTab={this.props.deleteTab}
                    />
                ))}
                <Button text={wordings.ADD_FORM} onClick={this.addTab} />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    tabs: state.form.tabs
});

const mapDispatchToProps = {
    addTab: actions.addTab,
    updateTab: actions.updateTab,
    deleteTab: actions.deleteTab
};

export default connect(mapStateToProps, mapDispatchToProps)(TabsContainer);
