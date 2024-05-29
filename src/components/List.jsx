import { useNavigate } from "react-router-dom";
import "./list.css";

const List = ({ expenses, selectedMonth }) => {
  const navigate = useNavigate();

  // 선택된 월에 해당하는 지출 필터링
  const filteredExpenses = expenses.filter(
    (expense) => new Date(expense.date).getMonth() + 1 === selectedMonth
  );

  const handleItemClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div id="list">
      {filteredExpenses.map((expense) => (
        <li
          key={expense.id}
          id="li"
          onClick={() => handleItemClick(expense.id)}
        >
          <div id="date">
            <div>일자 : {expense.date}</div>
            <div>내용 : {expense.content}</div>
          </div>
          <div>
            <div id="price">금액 : {expense.amount}</div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default List;
