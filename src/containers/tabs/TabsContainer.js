import React, { Component } from 'react';
import { connect } from 'react-redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Button from '../../components/elements/Button';
import DraggableTabContainer from './DraggableTabContainer';

import * as actions from '../../actions';
import wordings from '../../constants/wordings';
import { generateGUID } from '../../helpers/guid';
import { afterDrop, moveItems, sortByPositions } from '../../helpers/draggingHelpers';

import '../../styles/tabs/tabs.scss';

@DragDropContext(HTML5Backend)
class TabsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { tabs: [] };

        this.addTab = this.addTab.bind(this);
        this.copyTab = this.copyTab.bind(this);
        this.moveItems = this.moveItems.bind(this);
        this.afterDrop = this.afterDrop.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        // todo array and object
        console.log('getDerivedStateFromProps');
        if (props.tabs !== state.tabs) {
            return {
                tabs: sortByPositions(Object.values(props.tabs))
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

    moveItems(draggedUuid, overUuid) {
        const { tabs } = this.state;

        const newTabs = moveItems(tabs, draggedUuid, overUuid);


        console.log(tabs !== newTabs);
        if (tabs !== newTabs) {
            this.setState({ tabs: newTabs });
        }
    }

    afterDrop(uuid) {
        const { tabs } = this.state;

        const newTabs = afterDrop(tabs, uuid);

        this.props.updateTab({
            formUuid: newTabs.formUuid,
            uuid: newTabs.uuid,
            posN: newTabs.posN,
            posD: newTabs.posD
        });
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
                {tabs.map(tab => (
                    <DraggableTabContainer
                        key={tab.uuid}
                        uuid={tab.uuid}
                        isActive={activeTabUuid === tab.uuid}
                        tab={tab}
                        updateTab={updateTab}
                        copyTab={this.copyTab}
                        deleteTab={deleteTab}
                        moveItems={this.moveItems}
                        afterDrop={this.afterDrop}
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
