import update from 'immutability-helper';

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    return [
        {
            id: 1,
            text: 'Learn Javascript',
            completed: false,
            priority:'low',
            dueDate:'2024-12-31'
        },
        {
            id: 2,
            text: 'Learn React',
            completed: false,
            priority:'medium',
            dueDate:'2024-12-20'
        },
        {
            id: 3,
            text: 'Build a React App',
            completed: false,
            priority:'high',
            dueDate:'2024-12-24'
        }
    ]
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);

    // Returns a new list of data with updated item.
    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    });
}

//function to update priority
export function updatePriority(items, itemId, priority) {
    let index = items.findIndex(item => item.id === itemId);

    // Returns a new list of data with updated item.
    return update(items, {
        [index]: {
            priority: {$set: priority}
        }
    });
}

//function to update due date
export function updateDueDate(items, itemId, dueDate) {
    let index = items.findIndex(item => item.id === itemId);

    // Returns a new list of data with updated item.
    return update(items, {
        [index]: {
            dueDate: {$set: dueDate}
        }
    });
}


//function to update due date
export function sortUsingDuedate(items, order) {
     return items.sort((a, b) => {
        const aDate = new Date(a.dueDate);
        const bDate = new Date(b.dueDate);
        if (order === 'asc'){
            return aDate - bDate; // Ascending order
        }
        return bDate - aDate; // Descending order
    });
}


/**
 * A counter to generate a unique id for a todo item.
 * Can remove this logic when the todo is created using backend/database logic.
 * @type {Number}
 */
let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([item]);
}
