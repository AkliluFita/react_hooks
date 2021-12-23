import React,{useReducer} from 'react'
// import reduce functions
import {reducer} from './componentReducer/Reducers'
// import action type functions
import {increment, control_text} from './componentReducer/actions'

function AppReducer() {

const [state, dispatch] = useReducer(reducer, {count:0, showText:true})



// functions for use reducers

const handleShow_count = () => {
    dispatch(increment())
    dispatch(control_text())
}



    return (
        <div>
            <h3>{state.count}</h3>
            <button onClick={handleShow_count}>click me</button>
            {state.showText && <h3>hello am aklilu</h3>}
        </div>
    )
}

export default AppReducer
