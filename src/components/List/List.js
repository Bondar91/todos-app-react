import React from 'react';
import styled from 'styled-components';
import ListItem from 'components/List/ListItem';

const ListWrapper = styled.ul`
  list-style: none;
`;

const List = () => (
  <ListWrapper>
    <ListItem />
    <ListItem />
    <ListItem />
  </ListWrapper>
);
export default List;
