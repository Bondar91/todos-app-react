import styled from 'styled-components';

const Input = styled.input`
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.normal};
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.grey};

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey};
  }
`;

export default Input;
