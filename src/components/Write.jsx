import "./write.css";

const Write = () => {
  const getCurrentDate = () => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  };
  return (
    <div id="write">
      <div>
        <p>일 자</p>
        <input type="date" defaultValue={getCurrentDate()} />
      </div>
      <div>
        <p>항 목</p>
        <input type="text" />
      </div>
      <div>
        <p>금 액</p>
        <input type="number" />
      </div>
      <div>
        <p>내 용</p>
        <input type="text" />
      </div>
      <div>
        <button>저장</button>
      </div>
    </div>
  );
};

export default Write;
