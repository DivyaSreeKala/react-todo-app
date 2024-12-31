import React from 'react';
import {getOptions} from '../../services/filter';

export default function Filter(props) {
    const options = getOptions();
    const {filter, changeFilter, sortByDueDate} = props;
    const getClass = (key) => (key === filter ? 'selected' : '');

    return (
        <ul className="filters list-unstyled clearfix">
            {Object.keys(options).map(key => (
                <li key={key}>
                    <a onClick={() => changeFilter(key)} className={getClass(key)}>
                        {options[key]}
                    </a>
                </li>
            ))}
            <br/>
            Sort by : <button onClick={() => sortByDueDate('asc')} >Due Date(asc)</button>
            <button onClick={() => sortByDueDate('desc')} >Due Date(desc)</button>
            <button onClick={''} >High to low priority</button>
        </ul>
    );
}
