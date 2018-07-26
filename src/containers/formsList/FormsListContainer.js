import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormsListItemContainer from './FormsListItemContainer';
import FormsListHeader from '../../components/formsList/FormsListHeader';
import PaginationContainer from '../pagination/PaginationContainer';

import * as actions from '../../actions';
import { generateGUID } from '../../helpers/guid';
import { sortNumbers, sortLetters } from '../../helpers/sortHelpers';

import '../../styles/formsList/forms-list.scss';

const RESULTS_ON_PAGE = 10;

const SORT_PROPS = {
    TITLE: 'name',
    CREATED_AT: 'createdAt'
};

const formsFilter = (arg) => {
    const {
        forms,
        sort,
        propName,
        page,
        search
    } = arg;

    const sortFunc = propName === SORT_PROPS.TITLE ? sortLetters : sortNumbers;

    return forms
        .filter(form => (search ? form.name.toLowerCase().includes(search.toLowerCase()) : true))
        .sort(sortFunc.bind(null, { sort, propName }))
        .slice(page * RESULTS_ON_PAGE, (page + 1) * RESULTS_ON_PAGE);
};

class FormsListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sort: 1,
            sortProp: SORT_PROPS.TITLE,
            page: 0,
            search: ''
        };

        this.addForm = this.addForm.bind(this);
        this.changeSort = this.changeSort.bind(this);
        this.changePage = this.changePage.bind(this);
        this.changeSearch = this.changeSearch.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
    }

    changePage(page) {
        this.setState({ page });
    }

    changeSearch(event) {
        const search = event.target.value;

        this.setState({ search, page: 0 });
    }

    clearSearch() {
        this.setState({ search: '' });
    }

    changeSort(sortProp) {
        const { sortProp: currentSortProp, sort } = this.state;

        if (currentSortProp === sortProp) {
            this.setState({ sort: sort === 1 ? -1 : 1 });
        } else {
            this.setState({ sortProp, sort: 1 });
        }
    }

    addForm() {
        const { forms } = this.props;
        this.props.addForm({
            uuid: generateGUID(),
            name: `Form #${Object.keys(forms).length + 1}`,
            createdAt: Date.now()
        });
    }

    render() {
        const {
            sort,
            sortProp,
            page,
            search
        } = this.state;
        const { forms, updateForm, deleteForm } = this.props;

        const formsList = Object.values(forms);
        const filteredForms = formsFilter({
            forms: formsList,
            sort,
            propName: sortProp,
            page,
            search
        });

        return (
            <div className="forms-list-wrapper">
                <FormsListHeader
                    SORT_PROPS={SORT_PROPS}
                    sort={sort}
                    sortProp={sortProp}
                    search={search}
                    addForm={this.addForm}
                    changeSort={this.changeSort}
                    changeSearch={this.changeSearch}
                    clearSearch={this.clearSearch}
                />
                <div className="forms-list">
                    {filteredForms.map(form => (
                        <FormsListItemContainer
                            key={form.uuid}
                            uuid={form.uuid}
                            name={form.name}
                            createdAt={form.createdAt}
                            deleteForm={deleteForm}
                            updateForm={updateForm}
                        />
                    ))}
                </div>
                <PaginationContainer
                    count={formsList.length}
                    page={page}
                    resultsOnPage={RESULTS_ON_PAGE}
                    changePage={this.changePage}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    forms: state.formsList.forms
});

const mapDispatchToProps = {
    addForm: actions.addForm,
    deleteForm: actions.deleteForm,
    updateForm: actions.updateForm
};

export default connect(mapStateToProps, mapDispatchToProps)(FormsListContainer);
