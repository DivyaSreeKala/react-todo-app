import React from 'react';
import CheckBox from './CheckBox';

export default function TodoItem(props) {
    const {data, changeStatus, handlePriorityChange, handleDueDateChange} = props;
    console.log(data)
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');
    
    // to edit the priority
    const handlePriority = (event) => {
        if(window.confirm('Do you want to change priority?')) {
            handlePriorityChange(data.id, event.target.value);
        }
    }

    // to edit the due date
    const handleDueDate = (event) => {
        console.log(event.target.value)
        if(window.confirm('Do you want to change due date?')) {
            handleDueDateChange(data.id, event.target.value);
        }
    }
    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox checked={data.completed} onChange={handleChange}/> {data.text}<br/>
                    Due Date:<input type='date' value={data.dueDate} onChange={handleDueDate}/>
                    Priority: <select value={data.priority} id='priority' onChange={handlePriority} >
                        {/*   */}
                        <option value='low'>Low</option>
                        <option value='medium'>Medium</option>
                        <option value='high'>High</option>
                    </select>
                    {data.priority}
                </label>
            </div>
        </li>
    );
}
