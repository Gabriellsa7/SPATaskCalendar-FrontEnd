import styled from "styled-components";

export const Container = styled.section`
  margin-right: 20px;
  /* Styling the scrollbar */
  ::-webkit-scrollbar {
    width: 8px; /* Sets the width of the scroll bar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
`;

export const Title = styled.p``;

export const SectionToDoList = styled.section`
  margin: 2rem 2rem 2rem 1.5rem;
`;

export const ToDoListWrapper = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

export const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionIconText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SectionIconDelete = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
