import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 1st 2023</div>

      <div className="expense-item__description">
        <h2> Home Rent</h2>
        <div className="expense-item__price"> $750</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
