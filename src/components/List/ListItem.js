import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/Button/Button';

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

const ListItem = ({ id, title, completed }) => (
  <ListItemWrapper>
    <InnerWrapper>
      <ParagraphText>
        {id}
        {title}
        {completed}
      </ParagraphText>
      <Button remove>Remove</Button>
    </InnerWrapper>
  </ListItemWrapper>
);

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default ListItem;
