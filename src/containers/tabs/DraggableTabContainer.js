import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';

import TabContainer from './TabContainer';

import { TAB } from '../../constants/draggableTypes';

const cardSource = {
    beginDrag(props) {
        return {
            uuid: props.uuid
        };
    },

    endDrag(props, monitor) {
        const { uuid } = monitor.getItem();
        const didDrop = monitor.didDrop();

        if (!didDrop) {
            props.afterDrop(uuid);
        }
    }
};

const cardTarget = {
    hover(props, monitor) {
        const { uuid: draggedUuid } = monitor.getItem();
        const { uuid: overUuid } = props;

        if (draggedUuid !== overUuid) {
            props.moveItems(draggedUuid, overUuid);
        }
    }
};

@DropTarget(TAB, cardTarget, connect => ({
    connectDropTarget: connect.dropTarget()
}))
@DragSource(TAB, cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
export default class DraggableTabContainer extends Component {
    render() {
        const { connectDragSource, connectDropTarget } = this.props;

        return connectDragSource(connectDropTarget(
            <div>
                <TabContainer {...this.props} />
            </div>
        ));
    }
}
