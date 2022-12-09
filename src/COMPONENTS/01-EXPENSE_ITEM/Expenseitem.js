import Expensedate from '../01.1-EXPENSE_DATE/Expensedate';
import './Expenseitem.css';

function Expenseitem(props) {
  return (
    <div className="Expense_box">
      <Expensedate date={props.date} />
      <div className="Expense_title">{props.title}</div>
      <div className="Expense_price">{props.amount}</div>
    </div>
  );
}

export default Expenseitem;
