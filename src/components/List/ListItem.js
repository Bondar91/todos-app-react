import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/Button/Button';
import { todosRemoveRequested } from 'actions';

const ListItemWrapper = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.grey};

  :last-child {
    border-bottom: none;
    border-bottom-color: transparent;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const ParagraphText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const ListItem = ({ id, title, completed, removeTodo }) => (
  <ListItemWrapper>
    <InnerWrapper>
      <ParagraphText>
        {id}
        {title}
        {completed}
      </ParagraphText>
      <Button
        onClick={() => {
          console.log(id);
          removeTodo(id);
        }}
        remove
      >
        Remove
      </Button>
    </InnerWrapper>
  </ListItemWrapper>
);

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  removeTodo: todo => dispatch(todosRemoveRequested(todo)),
});

export default connect(null, mapDispatchToProps)(ListItem);
