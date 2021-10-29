let store = Redux.createStore(reducer);

let todoList = store.getState();
let input = document.querySelector('.input');
let search = document.querySelector('.search');
let root = document.querySelector('.root');

input.addEventListener('keyup', handleKey);
search.addEventListener('keyup', handleSearch);
function handleKey(event) {
  if (event.keyCode === 13 && event.target.value) {
    store.dispatch({
      type: 'submit',
      value: event.target.value,
      checked: false,
    });
    event.target.value = '';
    createUI();
  }
}
function handleClick(event) {
  store.dispatch({
    type: 'delete',
    id: event.target.dataset.id,
  });
  createUI();
}
function handleChange(event) {
  let id = event.target.dataset.input;
  store.dispatch({
    type: 'check',
    idCheck: id,
  });
}
function handleSearch(event) {
  if (event.keyCode === 13 && event.target.value) {
    let value = event.target.value;
    todoList = store.getState();
    store.dispatch({
      type: 'search',
      searchWord: value,
    });
  }
  createUI();
}
function createUI() {
  todoList = store.getState();
  console.log(todoList, 'wowxxxxxxxxxxx');
  let ul = document.querySelector('.root');
  ul.innerText = '';
  todoList.forEach((element, index) => {
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('checkbox_style');
    input.addEventListener('input', handleChange);
    input.setAttribute('data-input', index);
    input.checked = element.checked;
    let label = document.createElement('label');
    label.innerText = element.task;

    let span = document.createElement('span');
    span.setAttribute('data-id', index);
    span.innerText = 'x';
    span.addEventListener('click', handleClick);

    let li = document.createElement('li');
    li.append(input, label, span);
    ul.append(li);
  });
}
function reducer(state = [], action) {
  switch (action.type) {
    case 'submit':
      return [...state, { task: action.value, checked: action.checked }];
    case 'delete':
      state.splice(action.id, 1);
      return [...state];
    case 'check':
      state[action.idCheck].checked = !state[action.idCheck].checked;
      return [...state];
    case 'search':
      var some = state.map((elem) => {
        var elemTask = elem.task;
        if (elemTask.includes(action.searchWord)) {
          return elem;
        }
      });
      return [...some];
  }
}
