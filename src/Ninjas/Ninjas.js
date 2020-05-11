import React, { useState} from "react"

const FormHandler  = (props) => {
    
    const  {stateData, states, deleteData} = props
    const [state, setState] = useState({name:'',age:'',gender:''})
    const changeHandler = (event) => {
        setState({
            [event.target.id] : event.target.value
        })
        // console.warn(state)
    }
    const submitHandler= (event) => {
        event.preventDefault();
       stateData(state)
    }
        return (
            <div>
            {states.ninjas.map((value,index)=><pre key={index}>
            Name : {value.name}, Age : {value.age}, Gender : {value.gender} 
            <button onClick={()=>  deleteData(index)}> Delete </button> </pre>)}
                <form onSubmit={submitHandler}>    
                    <label>Name :</label>
                    <input type='text' id='name' onChange={changeHandler}/>
                    <label>Age :</label>
                    <input type='text' id='age' onChange={changeHandler}/>
                    <label>Gender :</label>
                    <input type='text' id='gender' onChange={changeHandler}/>
                    <button>Submit</button>
                </form>
        </div>
       )
    }
export default FormHandler;

