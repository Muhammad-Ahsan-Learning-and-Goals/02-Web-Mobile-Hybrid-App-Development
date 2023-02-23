import "./ExpenseItem.css";

function ExpenseItem(props) {

  const month = props.date.toLocalString('en-US', {month:'long'});
  
   const year = props.date.getFullYear;

  const day = props.date.toLocalString('en-US', {day:'2-gidit'});;

  return (
    <div className="expense-item">
      <div>
        <div>Day</div>
        <div>Month</div>
        <div>Year</div>
      </div>


      {/* <div className="date">${props.date.toISOString()}</div> */}

      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price"> ${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
