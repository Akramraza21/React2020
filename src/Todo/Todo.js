import React from 'react'

const TodoCreater = ( props ) => {
    
    const todo =  props.state.length ? props.state.map((value, index)=> {
    return ( <div  key={index} className="collection-item">
        <span onClick={(event)=> props.deleteHandler(index) }>{value.content}</span>
    </div>
    )}):
    (
        <p className="center">You have no todo's left</p>
    )
    return (
    <div className="todos collection"> 
    {todo}
    </div>
    )
}
export default TodoCreater;