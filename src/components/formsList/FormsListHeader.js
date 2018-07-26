import React, { Component } from 'react';
import classNames from 'classnames';

import Button from '../elements/Button';
import SearchableInput from '../elements/SearchableInput';

import wordings from '../../constants/wordings';

import '../../styles/formsList/forms-list-header.scss';

export default class FormsListHeader extends Component {
    constructor(props) {
        super(props);

        this.onTitleClick = this.onTitleClick.bind(this);
        this.onCreatedAtClick = this.onCreatedAtClick.bind(this);
    }

    onTitleClick() {
        const { SORT_PROPS } = this.props;

        this.props.changeSort(SORT_PROPS.TITLE);
    }

    onCreatedAtClick() {
        const { SORT_PROPS } = this.props;

        this.props.changeSort(SORT_PROPS.CREATED_AT);
    }

    render() {
        const {
            SORT_PROPS,
            sort,
            sortProp,
            search,
            addForm,
            changeSearch,
            clearSearch
        } = this.props;

        return (
            <header className="forms-list-header">
                <div className="search-block">
                    <SearchableInput
                        size="medium"
                        placeholder={wordings.TYPE_TO_SEARCH}
                        value={search}
                        clearSearch={clearSearch}
                        onChange={changeSearch} />
                    <Button text={wordings.ADD_FORM} onClick={addForm} />
                </div>
                <div className="table-header">
                    <div className="row title-row" onClick={this.onTitleClick}>
                        {wordings.TITLE}
                        <i className={classNames('fas', {
                            'fa-caret-up': sort === -1,
                            'fa-caret-down': sort === 1,
                            hide: sortProp !== SORT_PROPS.TITLE
                        })} />
                    </div>
                    <div className="row created-at-row" onClick={this.onCreatedAtClick}>
                        {wordings.CREATED_AT}
                        <i className={classNames('fas', {
                            'fa-caret-up': sort === -1,
                            'fa-caret-down': sort === 1,
                            hide: sortProp !== SORT_PROPS.CREATED_AT
                        })} />
                    </div>
                    <div className="row actions-row">
                        {wordings.ACTIONS}
                    </div>
                </div>
            </header>
        );
    }
}
