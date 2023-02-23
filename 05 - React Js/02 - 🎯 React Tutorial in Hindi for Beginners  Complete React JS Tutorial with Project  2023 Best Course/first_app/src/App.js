// import "./App.css";

import ExpenseItem from './components/ExpenseItem';

function App() {
  let expenseDate = new Date(2023, 2, 13);
  let expenseTitle = "School Fees";
  let expenseAmount = 200;

  return (
    <div>
      <h2> Lets Get Strted</h2>
      <ExpenseItem
        date={expenseDate}
        title={expenseTitle}
        amount={expenseAmount}>

      </ExpenseItem>
    </div>
  );
}

export default App;
