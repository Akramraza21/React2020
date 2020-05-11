import React, {useState} from 'react'

const AddTodo = (props) => {
    const [state, setState] = useState({
        content:''
    })
    
    const changeHandler = (event) => {
        setState({[event.target.id]:event.target.value})
    }
    const formHandler = (event) => {
        event.preventDefault()
        props.addHandler(state)
        setState({content:''})
    }

    return (
        <form onSubmit={formHandler}>
            <label>Add New Todo's</label>
            <input type="text" id= "content" 
            onChange = {(event)=> changeHandler(event)} 
            value={state.content}/>
        </form>
    )
}
export default AddTodo;