import React from 'react';

import { SideFormPage } from '../../templates/SideFormPage';
import { FormLogin } from '../../components/FormLogin';

function LoginPage() {
  return (
    <SideFormPage title="Bem-Vindo novamente!">
      <FormLogin />
    </SideFormPage>
  );
}

export default LoginPage;
