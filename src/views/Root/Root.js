import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import List from 'components/List/List';
import Form from 'components/Form/Form';
import Title from 'components/Title/Title';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Title>Todos</Title>
      <Form />
      <List />
    </ThemeProvider>
  </div>
);

export default Root;
