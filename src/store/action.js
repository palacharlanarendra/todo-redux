export function handleSubmit(todo, check) {
  return {
    type: 'todo_input',
    value: todo,
    check: check,
  };
}
export function handleChange(id) {
  return {
    type: 'checkbox_change',
    id: id,
  };
}
export function handleDelete(id) {
  return {
    type: 'delete_todo',
    id: id,
  };
}
