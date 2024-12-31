import React, {Component} from 'react';
import {FILTER_ALL} from '../../services/filter';
import {MODE_CREATE, MODE_NONE} from '../../services/mode';
import {objectWithOnly, wrapChildrenWith} from '../../util/common';
import {getAll, addToList, updateStatus, updatePriority, updateDueDate} from '../../services/todo';

class StateProvider extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            mode: MODE_CREATE,
            filter: FILTER_ALL,
            list: getAll()
        }
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus', 'changeMode', 'setSearchQuery', 'handlePriorityChange', 'handleDueDateChange', 'sortByDueDate'])
        });

        return <div>{children}</div>;
    }

    addNew(text) {
        let updatedList = addToList(this.state.list, {text, completed: false, priority:'medium', dueDate:''});

        this.setState({list: updatedList});
    }

    //edit priority
    handlePriorityChange(itemId, priority) {
        let updatedList = updatePriority(this.state.list, itemId, priority);

        this.setState({list: updatedList});
    }

     //edit due date
     handleDueDateChange(itemId, dueDate) {
        let updatedList = updateDueDate(this.state.list, itemId, dueDate);
        this.setState({list: updatedList});
    }


    //sort by due date

    sortByDueDate = (order) => {
        let updatedList = this.state.list.sort((a, b) => {
            const aDate = new Date(a.dueDate);
            const bDate = new Date(b.dueDate);
            if (order === 'asc'){
                return aDate - bDate; // Ascending order
            }
            return bDate - aDate; // Ascending order
        });
        this.setState({list: updatedList});
    };

    //sort by priority
    
    

    changeFilter(filter) {
        this.setState({filter});
    }

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.list, itemId, completed);

        this.setState({list: updatedList});
    }

    changeMode(mode = MODE_NONE) {
        this.setState({mode});
    }

    setSearchQuery(text) {
        this.setState({query: text || ''});
    }
}

export default StateProvider;
