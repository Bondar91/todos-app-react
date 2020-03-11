import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';

const ListItemWrapper = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.grey};
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

const ListItem = () => (
  <ListItemWrapper>
    <InnerWrapper>
      <ParagraphText>Task1</ParagraphText>
      <Button>Remove</Button>
    </InnerWrapper>
  </ListItemWrapper>
);

export default ListItem;
