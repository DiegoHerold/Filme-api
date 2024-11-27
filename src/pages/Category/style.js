import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const Movie = styled.div`
  width: 200px;
  text-align: center;
`;

export const Btn = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: darkcyan;
  }
`;
