import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import Button from '../../components/elements/Button';

import wordings from '../../constants/wordings';
import { generateGUID } from '../../helpers/guid';
import FormsListItem from '../../components/formsList/FormsListItem';

import '../../styles/formsList/forms-list.scss';

class FormsListContainer extends Component {
    constructor(props) {
        super(props);

        this.addForm = this.addForm.bind(this);
        this.deleteForm = this.deleteForm.bind(this);
    }

    addForm() {
        this.props.addForm({ uuid: generateGUID(), name: 'Untitled' });
    }

    deleteForm(uuid) {
        this.props.deleteForm({ uuid });
    }

    render() {
        const { forms } = this.props;

        return (
            <div className="forms-list">
                <Button text={wordings.ADD_FORM} onClick={this.addForm} />
                <div>
                    {Object.values(forms).map(form => (
                        <FormsListItem
                            key={form.uuid}
                            name={form.name}
                            deleteForm={() => this.deleteForm(form.uuid)} />
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
    deleteForm: actions.deleteForm
};

export default connect(mapStateToProps, mapDispatchToProps)(FormsListContainer);
