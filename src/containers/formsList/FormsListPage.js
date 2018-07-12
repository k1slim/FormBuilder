import React from 'react';

import wordings from '../../constants/wordings';

import Header from '../../components/main/Header';
import FormsListContainer from './FormsListContainer';

const FormsListPage = () => (
    <section className="forms-list-page">
        <Header title={wordings.FORMS_LIST} />
        <FormsListContainer />
    </section>
);

export default FormsListPage;
