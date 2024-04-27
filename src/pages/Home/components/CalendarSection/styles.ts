import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 0.9375rem;
  width: 70%;
  gap: 0.625rem;
`;

export const Title = styled.h1`
  color: #242428;
`;

export const CalendarSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.625rem;
  padding: 0.9375rem 1.25rem;
  /* width: 20%; */
  &:hover {
    cursor: pointer;
    background-color: #bababa;
    border-radius: 10px;
  }

  &.selected {
    background-color: #bababa;
    border-radius: 10px;
  }
`;

export const IconSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const IconText = styled.p`
  font-size: 18px;
`;
