import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Month from "./components/Month";
import Write from "./components/Write";
import List from "./components/List";
import Detail from "./pages/Detail";

const App = () => {
  const getInitialMonth = () => {
    const storedMonth = localStorage.getItem("selectedMonth");
    return storedMonth ? parseInt(storedMonth, 10) : new Date().getMonth() + 1;
  };

  const [selectedMonth, setSelectedMonth] = useState(getInitialMonth());
  const [expenses, setExpenses] = useState([]);

  // 월 선택 상태가 바뀔 때마다 로컬 스토리지에 저장하는 함수
  const saveSelectedMonthToLocalStorage = (month) => {
    localStorage.setItem("selectedMonth", month);
  };

  // 월 선택 상태가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    saveSelectedMonthToLocalStorage(selectedMonth);
  }, [selectedMonth]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Write
                addExpense={addExpense}
                setSelectedMonth={setSelectedMonth}
              />
              <Month
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
                expenses={expenses}
              />
              <List expenses={expenses} selectedMonth={selectedMonth} />
            </div>
          }
        />
        <Route
          path="/detail/:id"
          element={<Detail expenses={expenses} setExpenses={setExpenses} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
