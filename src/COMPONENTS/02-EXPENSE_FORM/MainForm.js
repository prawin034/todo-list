import { useState } from 'react';
import './MainForm.css';
import SubForm from './SubForm';

function MainForm(props) {
  const [isEditing, setisEditing] = useState(false);
  const ExpenseDataHandler = function (expense) {
    const expenseData = {
      ...expense,
      id: Math.random().toString,
    };

    props.onsubmitHandler(expenseData);
  };
  const onclickHandler = () => {
    setisEditing(true);
  };
  const onCloseHandler = () => {
    setisEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={onclickHandler} type="button">
          ADD EXPENSE
        </button>
      )}
      {isEditing && (
        <SubForm
          onSubmitExpenseDataHandler={ExpenseDataHandler}
          onclose={onCloseHandler}
        />
      )}
    </div>
  );
}
export default MainForm;
