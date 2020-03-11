import React from 'react';
import styled from 'styled-components';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = () => (
  <FormWrapper>
    <Input placeholder="Todos" />
    <Button>Add item</Button>
  </FormWrapper>
);

export default Form;
