import React, {useEffect,useState} from "react";

const TodoList = () =>{
    const [todo,setTodo] = useState(['운동하기']);
    const [newTodo, setNewTodo] = useState();


    const changeInputData = (e) => {
        setNew(e.target.value);
    }

    const addTodo = (e) => {
        e.preventDefault();
        setTodo([...todo, newTodo]);
    }

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