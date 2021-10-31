import { createStore } from 'redux';

function reducer(state = [], action) {
  switch (action.type) {
    case 'todo_input':
      return [...state, { todo: action.value, checked: action.check }];
    case 'checkbox_change':
      state[action.id].checked = !state[action.id].checked;
      return [...state];
    case 'delete_todo':
      state.splice(action.id, 1);
      return [...state];
    default:
      return state;
  }
}

export let store = createStore(reducer);
