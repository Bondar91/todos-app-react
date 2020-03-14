import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from 'components/List/ListItem';

const ListWrapper = styled.ul`
  list-style: none;
`;

const List = ({ todos }) => (
  <ListWrapper>
    {todos.map(({ userId, id, title, completed }) => (
      <ListItem key={id} userId={userId} id={id} title={title} completed={completed} />
    ))}
  </ListWrapper>
);

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ),
};

List.defaultProps = {
  todos: [],
};

export default List;
