import styled from "styled-components";
import { useState, useContext } from "react";
import MonthNav from "../components/MonthNav";
import ExpenseList from "../components/ExpenseList";
import CreateExpense from "../components/CreateExpense";
import { ExpenseContext } from "../contexts/ExpenseContext";

const Container = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;

export default function Home() {
  const [month, setMonth] = useState(1);
  const { expenses } = useContext(ExpenseContext);

  const filteredExpenses = expenses.filter(
    (expense) => expense.month === month
  );

  return (
    <Container>
      <MonthNav month={month} setMonth={setMonth} />
      <CreateExpense month={month} />
      <ExpenseList expenses={filteredExpenses} />
    </Container>
  );
}
