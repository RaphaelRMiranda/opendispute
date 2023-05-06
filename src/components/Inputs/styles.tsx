import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.base.gray[300]};
  border: none;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  padding: 10px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.base.secondary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.base.gray[400]};
  }
`;
