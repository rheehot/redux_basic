//액션타입
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

//액션생성함수
let nextId = 1;
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  }
});
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

//초기값
const initialState = [
  {
    id: 1,
    text: 'example',
    done: false,
  },
];

//리듀서 작성 후 내보내기
export default function todos(state = initialState, action) {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case ADD_TODO :
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(todo => (
          todo.id === action.id
            ? {...state, done: !todo.done}
            : todo
        )
      );
    default :
      return state;
  }
}
