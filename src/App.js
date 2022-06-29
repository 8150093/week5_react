import {
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
    useResetRecoilState,
  } from "recoil";
  import { todos } from "./atoms/todos";
  
  function App() {
    const [todoList, setTodoList] = useRecoilState(todos); // useState와 사용법 동일
    const recoilValue = useRecoilValue(todos); // 해당 atom의 값
    const setValue = useSetRecoilState(todos); // 업데이트 함수만 가져올때
      const resetTodos = useResetRecoilState(todos); // 초기값으로 돌리는 함수
      
  
  // 새로운 할 일 목록을 생성하는 함수
  // 내부 로직은 지금 이해하지 말자
    function createNewTodo() {
      const idList = recoilValue.map((item) => item.id);
      const maxId = Math.max(...idList) <= 0 ? 0 : Math.max(...idList);
      const newTodo = {
        id: maxId + 1,
        text: `할일${Math.floor(Math.random() * 10)}`,
        done: false,
      };
  
      return newTodo;
    }
  
  //클릭했을 때 동작하는 함수1
    function handleClick1() {
      const newTodo = createNewTodo(); //새로운 할일을 생성하여 받아옴
      setTodoList(todoList.concat(newTodo)); //기존 목록에 붙여 넣음
    }
  
  //클릭했을 때 동작하는 함수2
    function handleClick2() {
      const newTodo = createNewTodo(); //새로운 할일을 생성하여 받아옴
      setValue(recoilValue.concat(newTodo)); //기존 목록에 붙여 넣음
    }
  
  // 체크박스 클릭시 동작하는 함수
    function handleChange(id) {
  
          // 할일목록이 가지고 있는 id와 받아온 id가 같은 항목만 업데이트
          // 나머지는 그대로 반환
      const newValue = recoilValue.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      );
      setValue(newValue);
  
    }
  
    return (
          <>
          <div
            style={{
              display: "flex",
            }}
          >
            <div>
              {todoList.map((todo) => (
                <div key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => handleChange(todo.id)}
                  />
                  <span>{todo.text}</span>
                </div>
              ))}
              <button onClick={handleClick1}>추가</button>
            </div>
            <div>
              {recoilValue.map((todo) => (
                <div key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => handleChange(todo.id)}
                  />
                  <span>{todo.text}</span>
                </div>
              ))}
              <button onClick={handleClick2}>추가</button>
            </div>
          </div>
              <div>
            <button onClick={resetTodos}>초기화</button>
          </div>
          </>
       );
  }
  
  export default App;