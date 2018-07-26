import React, { Component } from 'react';

import Pagination from '../../components/pagination/Pagination';

const getCurrentCount = (page, count, resultsOnPage) => {
    const resultsCount = resultsOnPage * (page + 1);

    if (count < resultsOnPage || resultsCount > count) {
        return count;
    }

    return resultsCount;
};

class PaginationContainer extends Component {
    constructor(props) {
        super(props);

        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
    }

    nextPage() {
        const { page, count, resultsOnPage } = this.props;

        if (count - (resultsOnPage * (page + 1)) > 0) {
            const nextPage = page + 1;
            this.props.changePage(nextPage);
        }
    }

    prevPage() {
        const { page } = this.props;

        if (page > 0) {
            const prevPage = page - 1;
            this.props.changePage(prevPage);
        }
    }

    render() {
        const { count, page, resultsOnPage } = this.props;

        const isPrevButtonDisabled = page <= 0;
        const isNextButtonDisabled = count - (resultsOnPage * (page + 1)) <= 0;
        const currentMembersCount = getCurrentCount(page, count, resultsOnPage);

        return (
            <Pagination
                count={count}
                currentCount={currentMembersCount}
                isPrevButtonDisabled={isPrevButtonDisabled}
                isNextButtonDisabled={isNextButtonDisabled}
                prevPage={this.prevPage}
                nextPage={this.nextPage}
            />
        );
    }
}

export default PaginationContainer;
