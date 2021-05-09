import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addTodo, delTodo, remTodo } from "./actions/index"
import DeleteIcon from '@material-ui/icons/Delete';
import "./Todo.css"
import FlipMove from "react-flip-move"
import { Button } from '@material-ui/core';
const Todo = () => {
    const [input, setInput] = useState();
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducer.list)
    return (
        <>
            <div className="main_div">
                <div className="child_div">
                    <figure>
                        <figcaption>Add Your Todo ⬇️ </figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍️ Add Items ..."
                            onChange={(e) => {
                                setInput(e.target.value)
                            }}
                            value={input}
                        />
                        <button disabled={!input} className="fa"
                            onClick={() => dispatch(addTodo(input), setInput(""))}
                        >+</button>
                    </div>
                    <div className="show_list">
                        <div className="showList_container">
                        {list == "" ? <h4 style={
                            {
                                position:"relative",
                                top:"50%",
                                fontSize:"10px",
                                fontWeight:"400"
                            }
                        }>No any Todo exist ...</h4> : <h4 style={
                            {
                                fontSize:"12px",
                                fontWeight:"600"
                            }
                        }>Your Todo's here.. </h4>}
                        <FlipMove>

                            {
                                list.map(currElem => {
                                    return (
                                        <div key={currElem.id} className="eachItem">
                                            <h3>{currElem.data}</h3> <DeleteIcon className='icon' onClick={() => dispatch(delTodo(currElem.id))} />

                                        </div>
                                    )
                                }).reverse()
                            }
                        </FlipMove>
                        </div>
                       <button className="clear_button" onClick={() => dispatch(remTodo())} >Clear all todo's</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
