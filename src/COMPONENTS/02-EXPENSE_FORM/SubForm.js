import './SubForm.css';
import { useState } from 'react';
function SubForm(props) {
  const [isvalid, setIsvalid] = useState(true);

  const [title, setTitle] = useState('');
  const [Amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const TitleHandler = function (event) {
    event.preventDefault();
    if (title.trim().length > 0) {
      setIsvalid(true);
    }
    setTitle(event.target.value);
  };
  const AmountHandler = function (event) {
    if (Amount.trim().length > 0) {
      setIsvalid(true);
    }
    setAmount(event.target.value);
  };
  const DateHandler = function (event) {
    if (date.trim().length > 0) {
      setIsvalid(true);
    }
    setDate(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();
    const ExpenseObj = {
      title: title,
      amount: +Amount,
      date: new Date(date),
    };
    if (title.trim().length === 0) {
      setIsvalid(false);
      return;
    }
    props.onSubmitExpenseDataHandler(ExpenseObj);
    setTitle('');
    setDate('');
    setAmount('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label style={{ color: !isvalid ? 'red' : 'black' }} htmlFor="title">
            TITLE
          </label>
          <input value={title} onChange={TitleHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label style={{ color: !isvalid ? 'red' : 'black' }} htmlFor="AMOUNT">
            AMOUNT
          </label>
          <input value={Amount} onChange={AmountHandler} type="number" />
        </div>
        <div className="new-expense__control">
          <label style={{ color: !isvalid ? 'red' : 'black' }} htmlFor="DATE">
            DATE
          </label>
          <input
            value={date}
            onChange={DateHandler}
            type="date"
            min="2019-01-01"
            max="2022-10-30"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onclose} type="button">
          CLOSE
        </button>
        <button type="submit">ADD EXPENSE</button>
      </div>
    </form>
  );
}

export default SubForm;
