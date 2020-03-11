import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.grey};
  width: 100px;
  height: 40px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
  border: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.danger};
      color: ${({ theme }) => theme.white};
    `}
`;

export default Button;
