import Expenseitem from '../01-EXPENSE_ITEM/Expenseitem';
import ExpenseFilter from '../01.2-EXPENSE_FILTER/ExpenseFilter';
import './Expensebox.css';
import { useState } from 'react';

function Expensebox(props) {
  const [filter, setFilter] = useState('2021');

  const filterChangeValue = (filterChange) => {
    setFilter(filterChange);
  };

  const FilterByYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });
  let noExpense = 'NO EXPENSE DATA FOUND ';
  return (
    <div className="boxx">
      <ExpenseFilter
        selected={filter}
        ExpenseFilterChange={filterChangeValue}
      />
      {FilterByYear.length === 0 && (
        <p className="noexpense">NO EXPENSE DATA FOUND</p>
      )}
      {FilterByYear.length > 0 &&
        FilterByYear.map((data) => (
          <Expenseitem
            key={data.id}
            title={data.title}
            amount={data.amount + 'RS'}
            date={data.date}
          />
        ))}
    </div>
  );
}
export default Expensebox;
