import logo from './logo.svg';
import './App.css';
import Expenseitem from './COMPONENTS/01-EXPENSE_ITEM/Expenseitem';
import Expensebox from './COMPONENTS/00-EXPENSE_BOX/Expensebox';
import MainForm from './COMPONENTS/02-EXPENSE_FORM/MainForm';
import { useState } from 'react';
const dummy_expense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
];
function App() {
  const [expenses, setExpenses] = useState(dummy_expense);

  function expenseDataMain(expense) {
    setExpenses((oldexpense) => {
      return [expense, ...oldexpense];
    });
  }
  return (
    <div className="App">
      <h1 className="APP_TITLE">TODO LIST APP</h1>
      <MainForm onsubmitHandler={expenseDataMain} />
      <Expensebox items={expenses} />
    </div>
  );
}

export default App;
