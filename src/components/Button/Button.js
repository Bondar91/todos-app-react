import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.grey};
  width: 100px;
  height: 40px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
`;

export default Button;
