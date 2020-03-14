import React from 'react';
import styled from 'styled-components';
import ListItem from 'components/List/ListItem';

const ListWrapper = styled.ul`
  list-style: none;
`;

const List = ({ todos }) => (
  <ListWrapper>
    {todos.map(({ userId, id, title, completed }) => (
      <ListItem userId={userId} id={id} title={title} completed={completed} />
    ))}
  </ListWrapper>
);
export default List;
