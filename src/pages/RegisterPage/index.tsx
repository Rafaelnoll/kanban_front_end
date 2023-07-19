import React from 'react';

import { SideFormPage } from '../../templates/SideFormPage';
import { FormRegister } from '../../components/FormRegister';

function RegisterPage() {
  return (
    <SideFormPage title="Olá! Registre-se para começar">
      <FormRegister />
    </SideFormPage>
  );
}

export default RegisterPage;
