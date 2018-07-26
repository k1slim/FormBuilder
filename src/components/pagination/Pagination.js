import React from 'react';

import wordings from '../../constants/wordings';

import '../../styles/pagination/pagination.scss';

const Pagination = props => (
    <div className="pagination">
        <span className="pages-counter bold">
            {wordings.CURRENT_COUNT_OF_COUNT(props.currentCount, props.count)}
        </span>
        <button
            type="button"
            className="page-btn page-btn-prev"
            onClick={props.prevPage}
            disabled={props.isPrevButtonDisabled}
        >
            <i className="fas fa-caret-left" />
        </button>
        <button
            type="button"
            className="page-btn page-btn-next"
            onClick={props.nextPage}
            disabled={props.isNextButtonDisabled}>
            <i className="fas fa-caret-right" />
        </button>
    </div>
);

export default Pagination;
