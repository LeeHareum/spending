import Write from "../components/Write";
import Month from "../components/Month";
import { Outlet } from "react-router-dom";
import List from "../components/List";
import Detail from "./Detail";

const Home = ({
  selectedMonth,
  setSelectedMonth,
  expenses,
  addExpense,
  setExpenses,
}) => {
  return (
    <>
      <Write addExpense={addExpense} setSelectedMonth={setSelectedMonth} />
      <Month
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        expenses={expenses}
      />
      <List selectedMonth={selectedMonth} expenses={expenses} />
      <Detail expenses={expenses} setExpenses={setExpenses} />
      <Outlet />
    </>
  );
};

export default Home;
