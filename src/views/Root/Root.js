import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Input from 'components/Input/Input';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Button>Add</Button>
      <Input placeholder="Add todo" />
    </ThemeProvider>
  </div>
);

export default Root;
