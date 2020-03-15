import React from 'react';
import styled from 'styled-components';
import loading from 'assets/loading_spinner.gif';

const WrapperLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Loading = () => (
  <WrapperLoading>
    <img src={loading} alt="Loading..." />
  </WrapperLoading>
);

export default Loading;
