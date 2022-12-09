import './Expensedate.css';
function Expensedate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div>
      <div className="Expense_date">
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
    </div>
  );
}
export default Expensedate;
