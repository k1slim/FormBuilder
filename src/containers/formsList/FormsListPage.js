import React from 'react';

import wordings from '../../constants/wordings';

import Header from '../../components/main/Header';

const FormsListPage = ({ children }) => (
    <section className="forms-list-page">
        <Header title={wordings.FORMS_LIST} />
        {children}
    </section>
);

export default FormsListPage;
