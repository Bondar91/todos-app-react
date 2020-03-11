import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import List from 'components/List/List';
import Form from 'components/Form/Form';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <List />
      <Form />
    </ThemeProvider>
  </div>
);

export default Root;
