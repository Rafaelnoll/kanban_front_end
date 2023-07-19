import React from 'react';

import { SideFormPage } from '../../templates/SideFormPage';
import { FormForgotPassword } from '../../components/FormForgotPassword';

function ForgotPasswordPage() {
  return (
    <SideFormPage title="Esqueceu a senha?">
      <FormForgotPassword />
    </SideFormPage>
  );
}

export default ForgotPasswordPage;
