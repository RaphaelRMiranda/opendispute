import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.base.gray[300]};
  border: none;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  padding: 12px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.base.secondary};
`;
