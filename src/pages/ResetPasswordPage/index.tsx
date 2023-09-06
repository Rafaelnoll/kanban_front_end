import React from 'react';
import { SideFormPage } from '../../templates/SideFormPage';
import { FormResetPassword } from './components/FormResetPassword';

function ResetPasswordPage() {
  return (
    <SideFormPage title="Alterar a senha">
      <FormResetPassword />
    </SideFormPage>
  );
}

export default ResetPasswordPage;
