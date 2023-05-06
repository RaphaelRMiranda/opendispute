import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.base.white};
  margin-top: 15px;
`;
