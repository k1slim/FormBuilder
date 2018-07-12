import React from 'react';

import wordings from '../../constants/wordings';

import Header from '../../components/main/Header';
import FormContainer from './FormContainer';

const FormPage = () => (
    <section className="form-page">
        <Header title={wordings.FORM} />
        <FormContainer />
    </section>
);

export default FormPage;
