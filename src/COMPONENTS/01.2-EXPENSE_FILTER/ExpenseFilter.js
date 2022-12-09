import './ExpenseFilter.css';

function ExpenseFilter(props) {
  function dropdownHadler(event) {
    const eventdata = event.target.value;

    props.ExpenseFilterChange(eventdata);
  }

  return (
    <div className="Filter_component">
      <div className="filter_label">
        <label>FILTER BY YEAR</label>
      </div>
      <div className="Filter_dropdown">
        <select value={props.selected} onChange={dropdownHadler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
}
export default ExpenseFilter;
