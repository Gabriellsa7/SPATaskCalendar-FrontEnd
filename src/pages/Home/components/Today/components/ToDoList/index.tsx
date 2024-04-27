import * as S from "./styles";
import { FaRegCircleXmark } from "react-icons/fa6";
import { ImRadioUnchecked } from "react-icons/im";

export default function ToDoList() {
  return (
    <S.Container>
      <S.Title>To do List</S.Title>
      <S.ToDoListWrapper>
        <S.SectionToDoList>
          <S.Task>
            <S.SectionIconText>
              <ImRadioUnchecked /> Task
            </S.SectionIconText>
            <S.SectionIconDelete>
              19 de Dec.
              <FaRegCircleXmark />
            </S.SectionIconDelete>
          </S.Task>
        </S.SectionToDoList>
      </S.ToDoListWrapper>
    </S.Container>
  );
}
