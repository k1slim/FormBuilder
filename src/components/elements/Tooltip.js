import React from 'react';
import PropTypes from 'prop-types';
import TooltipLib from 'rc-tooltip';

const TOOLTIP_DELAY = 0.4;

const Tooltip = (props) => {
    const {
        overlay,
        placement,
        children
    } = props;

    return (
        <TooltipLib
            overlay={overlay}
            placement={placement}
            mouseEnterDelay={TOOLTIP_DELAY}
            align={{
                offset: [0, -10]
            }}>
            {children}
        </TooltipLib>
    );
};

Tooltip.defaultProps = {
    placement: 'top'
};

Tooltip.propTypes = {
    overlay: PropTypes.string.isRequired,
    placement: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};

export default Tooltip;
