import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 50px auto 0;
  background-color: rgb(252, 251, 203);
  border-radius: 13px 38px;
  border: 5px solid rgba(255, 255, 255, 0.806);
  box-shadow: 0 8px 10px rgba(125, 127, 82, 0.975);
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const Info = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  color: #666;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const Btn = styled.button`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background-color: rgb(251, 250, 191);
  margin-left: 5px;
  border: none;
  padding: 15px 35px;
  border-radius: 15px;
  font-size: medium;
  border: 3px solid rgba(255, 255, 255, 0.806);

  &:hover {
    background-color: rgb(251, 248, 170);
    cursor: pointer;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Detail = ({ expenses, setExpenses }) => {
  const { id } = useParams();
  const expense = expenses.find((expense) => expense.id === id);
  const [isModal, setIsModal] = useState(false);
  const [editedExpense, setEditedExpense] = useState(expense);

  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedExpense({
      ...editedExpense,
      [name]: value,
    });
  };

  const handleSave = () => {
    const updatedExpenses = expenses.map((item) =>
      item.id === id ? editedExpense : item
    );
    setExpenses(updatedExpenses);
    closeModal();
  };

  const handleDelete = () => {
    const updatedExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(updatedExpenses);
    closeModal();
  };

  if (!expense) {
    return <div>해당 내역을 찾을수 없습니다.</div>;
  }

  return (
    <>
      <DetailContainer>
        <Title>{expense.date} 지출 상세</Title>
        <Info>
          <strong>일 자 : </strong> {expense.date}
        </Info>
        <Info>
          <strong>항 목 : </strong> {expense.description}
        </Info>
        <Info>
          <strong>금 액 : </strong> {expense.amount}
        </Info>
        <Info>
          <strong>내 용 : </strong> {expense.content}
        </Info>
        <ButtonWrapper>
          <Btn onClick={openModal}>수정</Btn>
          <Btn onClick={handleDelete}>삭제</Btn>
        </ButtonWrapper>
      </DetailContainer>
      {isModal && (
        <>
          <Backdrop onClick={closeModal} />
          <Modal>
            <Input
              type="text"
              name="date"
              value={editedExpense.date}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="description"
              value={editedExpense.description}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="amount"
              value={editedExpense.amount}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="content"
              value={editedExpense.content}
              onChange={handleInputChange}
            />
            <Btn onClick={handleSave}>저장</Btn>
          </Modal>
        </>
      )}
    </>
  );
};

export default Detail;
