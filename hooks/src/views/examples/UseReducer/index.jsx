import React, { useReducer, useRef } from 'react'
import PageTitle from '../../../components/layout/PageTitle'
import { initialState, reducer, numberAdd2 } from "./store"

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const myInput = useRef(0)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Sem Usuário</span>}
                
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({type: "login", payload: "Augusto"})}>Login</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: "number_mult7"})}>*7</button>
                    <button className="btn" onClick={() => dispatch({type: "number_div25"})}>/25</button>
                    <button className="btn" onClick={() => dispatch({type: "number_int"})}>Int</button>
                </div>
                <div>
                    <input type="number" className="input" ref={myInput} />
                    <button className="btn" onClick={() => dispatch({type: "number_input", payload: parseInt(myInput.current.value ? myInput.current.value : "0")})}>Adicionar</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
