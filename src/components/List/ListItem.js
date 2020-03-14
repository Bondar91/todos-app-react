import React from 'react';
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

const ListItem = ({ title }) => (
  <ListItemWrapper>
    <InnerWrapper>
      <ParagraphText>{title}</ParagraphText>
      <Button remove>Remove</Button>
    </InnerWrapper>
  </ListItemWrapper>
);

export default ListItem;
