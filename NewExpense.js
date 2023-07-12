import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [isAdding, setAdd] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setAdd(false);
  };

  const addHandler = () => {
    setAdd(true);
  };
  const stopFormHandling = () => {
    setAdd(false);
  };
  return (
    <div className="new-expense">
      {!isAdding && <button onClick={addHandler}>Add New Expense</button>}
      {isAdding && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopFormHandling}
        />
      )}
    </div>
  );
};

export default NewExpense;
