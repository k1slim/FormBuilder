import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import TabsContainer from '../tabs/TabsContainer';

import * as actions from '../../actions';

import '../../styles/formsList/forms-list.scss';

class FormContainer extends Component {
    componentDidMount() {
        const { match: { params }, getForm } = this.props;

        getForm(params);
    }

    render() {
        const { match: { params } } = this.props;

        return (
            <div className="form">
                <TabsContainer
                    formUuid={params.formUuid}
                    activeTabUuid={params.tabUuid}
                />
            </div>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    getForm: actions.getForm
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormContainer));
