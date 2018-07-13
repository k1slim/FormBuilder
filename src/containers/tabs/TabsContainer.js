import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/elements/Button';
import TabContainer from './TabContainer';

import * as actions from '../../actions';
import wordings from '../../constants/wordings';
import { generateGUID } from '../../helpers/guid';

import '../../styles/tabs/tabs.scss';

class TabsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { tabs: {} };

        this.addTab = this.addTab.bind(this);
        this.copyTab = this.copyTab.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.tabs !== state.tabs) {
            return {
                tabs: props.tabs
            };
        }

        return null;
    }

    addTab() {
        const { formUuid } = this.props;

        this.props.addTab({ formUuid, uuid: generateGUID(), name: 'Untitled' });
    }

    copyTab(tab) {
        this.props.addTab({ ...tab, uuid: generateGUID() });
    }

    render() {
        const {
            activeTabUuid,
            deleteTab,
            updateTab
        } = this.props;
        const { tabs } = this.state;

        return (
            <section className="tabs">
                {Object.values(tabs).map(tab => (
                    <TabContainer
                        key={tab.uuid}
                        isActive={activeTabUuid === tab.uuid}
                        tab={tab}
                        updateTab={updateTab}
                        copyTab={this.copyTab}
                        deleteTab={deleteTab}
                    />
                ))}
                <Button text={wordings.ADD_TAB} onClick={this.addTab} />
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
