import React, {useEffect,useState} from "react";
import "./css/Todos.scss";
import {todos} from "./atoms/todos";
import { useRecoilState_TRANSITION_SUPPORT_UNSTABLE } from "recoil";

const TodoList = () =>{
    const [todo,setTodo] = useRecoilState(todos);
    const [newTodo, setNewTodo] = useState();


    const changeInputData = (e) => {
        setNew(e.target.value);
    }

    const addTodo = (e) => {
        e.preventDefault();
        setTodo([...todo, newTodo]);
    }

    const onChange = (e) => {
        setInput(e.target.value);
    };
    
    useEffect(() => {
        console.log('새롭게 렌더링 되었습니다.');
    });

    return(
    <>

        <form action="">
            <input type="text" name="" onChange={changeInputData}/>
            <button onClick={addTodo}>ADD</button>
        </form>

    </>
    );

};