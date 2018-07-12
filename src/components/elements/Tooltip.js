import React from 'react';
import PropTypes from 'prop-types';
import TooltipLib from 'rc-tooltip';

const TOOLTIP_DELAY = 0.4;

const Tooltip = props => (
    <TooltipLib
        overlay={props.overlay}
        placement={props.placement}
        mouseEnterDelay={TOOLTIP_DELAY}
        align={{
            offset: [0, -10]
        }}>
        {props.children}
    </TooltipLib>
);

Tooltip.defaultProps = {
    placement: 'top'
};

Tooltip.propTypes = {
    overlay: PropTypes.string.isRequired,
    placement: PropTypes.string
};

export default Tooltip;
