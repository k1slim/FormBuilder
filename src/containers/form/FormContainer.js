import React from 'react';

import TabsContainer from '../tabs/TabsContainer';

import '../../styles/formsList/forms-list.scss';

const FormContainer = props => (
    <div className="form">
        <TabsContainer
            formUuid={props.params.formUuid}
            activeTabUuid={props.params.tabUuid}
        />
    </div>
);

export default FormContainer;
