import React from 'react';

import wordings from '../../constants/wordings';

import Header from '../../components/main/Header';

const FormPage = ({ children }) => (
    <section className="form-page">
        <Header title={wordings.FORM} />
        {children}
    </section>
);

export default FormPage;
