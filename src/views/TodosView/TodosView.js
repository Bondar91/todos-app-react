import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Title from 'components/Title/Title';
import Form from 'components/Form/Form';
import List from 'components/List/List';

const StyledWrapper = styled.div`
  max-width: 600px;
  margin: 50px auto;
  border: 2px solid ${({ theme }) => theme.grey};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const HeadingTitle = styled(Title)`
  text-align: center;
  padding: 10px;
`;

const TodosView = ({ todos }) => (
  <StyledWrapper>
    <HeadingTitle>Todos</HeadingTitle>
    <Form />
    <List todos={todos} />
  </StyledWrapper>
);

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps)(TodosView);
