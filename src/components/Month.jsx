import { useCallback } from "react";
import "./month.css";

const Month = ({ selectedMonth, setSelectedMonth }) => {
  const handleMonthClick = useCallback(
    (month) => {
      setSelectedMonth(month);
    },
    [setSelectedMonth]
  );

  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  return (
    <div id="grid-container">
      {months.map((month, index) => (
        <button
          key={index}
          onClick={() => handleMonthClick(index + 1)}
          className={selectedMonth === index ? "selected" : ""}
        >
          {month}
        </button>
      ))}
    </div>
  );
};

export default Month;
