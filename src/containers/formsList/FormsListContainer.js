import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/elements/Button';
import FormsListItemContainer from './FormsListItemContainer';

import * as actions from '../../actions';
import wordings from '../../constants/wordings';
import { generateGUID } from '../../helpers/guid';

import '../../styles/formsList/forms-list.scss';

class FormsListContainer extends Component {
    constructor(props) {
        super(props);

        this.addForm = this.addForm.bind(this);
    }

    addForm() {
        this.props.addForm({ uuid: generateGUID(), name: 'Untitled' });
    }

    render() {
        const { forms, updateForm, deleteForm } = this.props;

        return (
            <div className="forms-list-wrapper">
                <Button text={wordings.ADD_FORM} onClick={this.addForm} />
                <div className="forms-list">
                    {Object.values(forms).map(form => (
                        <FormsListItemContainer
                            key={form.uuid}
                            uuid={form.uuid}
                            name={form.name}
                            deleteForm={deleteForm}
                            updateForm={updateForm}
                        />
                    ))}
                </div>
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
