import React, { useState, useEffect, useReducer, useRef, useMemo } from 'react';
import axios from 'axios';
import List from './List';
import { useFormInput } from '../hooks/forms';

const todo = props => {

    const [inputIsValid, setInputIsValid] = useState(false);
    //const todoInputRef = useRef();
    const todoInput = useFormInput();
    //const [todoName, setTodoName] = useState('');
    //const [todoList, setTodoList] = useState([]);
    //const [submittedTodoItem, setSubmittedTodoItem] = useState([]);

    //const [todoState, setTodoState] = useState({ userInput: '', todoList: [] });

    const todoListReducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                return state.concat(action.payload);
            case 'SET':
                return action.payload;
            case 'REMOVE':
                return state.filter((todo) => todo.id !== action.payload);
            default:
                return state;
        }
    };

    const [todoList, dispatch] = useReducer(todoListReducer, []);

    useEffect(() => {
        axios.get('https://auth-6e11d.firebaseio.com/todos.json')
            .then(res => {
                const todoData = res.data;
                const todos = [];
                for (const key in todoData) {
                    todos.push({ id: key, name: todoData[key].name });
                }
                dispatch({ type: 'SET', payload: todos });
            })
            .catch(err => {
                console.log(err);
            });
        return () => {
            console.log('Cleanup!');
        };
    }, []);


    /*  useEffect(() => {
         if (submittedTodoItem) {
             dispatch({ type: 'ADD', payload: submittedTodoItem });
         }
     }, [submittedTodoItem]); */

    /* const mouseMoveHandler = event => {
        console.log(event.clientX, event.clientY);
    }

    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveHandler);
        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []); */

    /* const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
        //setTodoState({ userInput: event.target.value, todoList: todoState.todoList });
    }; */

    const inputValidationHandler = event => {
        if (event.target.value.trim() === '') {
            setInputIsValid(false);
        } else {
            setInputIsValid(true);
        }
    };

    const todoAddhandler = () => {
        const todoName = todoInput.value;

        axios.post('https://auth-6e11d.firebaseio.com/todos.json', { name: todoName })
            .then(res => {
                setTimeout(() => {
                    const todoItem = { id: res.data.name, name: todoName };
                    dispatch({ type: 'ADD', payload: todoItem });
                }, 3000);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const todoRemoveHandler = todoId => {
        axios.delete(`https://auth-6e11d.firebaseio.com/todos/${todoId}.json`)
            .then(res => {
                dispatch({ type: 'REMOVE', payload: todoId });
            })
            .catch((err) => console.log(err));
    }

    return (
        <React.Fragment>
            <input
                type="text"
                placeholder="Todo"
                /* ref={todoInputRef} */
                value={todoInput.value}
                onChange={todoInput.onChange}
                /* style={{ backgroundColor: inputIsValid ? 'transparent' : 'red' }} */
                style={{ backgroundColor: todoInput.validity === true ? 'transparent' : 'red' }}

            /* onChange={inputChangeHandler}
            value={todoName} */
            />
            <button type="button" onClick={todoAddhandler}>Add</button>
            {useMemo(
                () => (
                    <List items={todoList} onClick={todoRemoveHandler} />
                ),
                [todoList]
            )}
        </React.Fragment>
    );
};

export default todo;