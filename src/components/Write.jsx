import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./write.css";

const Write = ({ addExpense, setSelectedMonth }) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [amount, setAmount] = useState("");

  const handleSaveExpense = () => {
    const newExpense = {
      id: uuidv4(),
      date,
      description,
      amount,
      content,
    };
    if (typeof addExpense === "function") {
      addExpense(newExpense);
      setDate("");
      setDescription("");
      setContent("");
      setAmount("");

      const selectedDate = new Date(date);
      const selectedMonthValue = selectedDate.getMonth() + 1;
      setSelectedMonth(selectedMonthValue);
    } else {
      console.error("addExpense is not a function");
    }
  };

  return (
    <div id="write">
      <div>
        <p>일 자</p>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <p>항 목</p>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="지출항목"
        />
      </div>
      <div>
        <p>금 액</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="지출금액"
        />
      </div>
      <div>
        <p>내 용</p>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="지출내용"
        />
      </div>
      <button onClick={handleSaveExpense}>저장</button>
    </div>
  );
};

export default Write;
