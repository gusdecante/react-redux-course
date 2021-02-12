import React, { useReducer, useRef } from 'react'
import PageTitle from '../../../components/layout/PageTitle'

const initialState = {
    number: 0,
    cart: [],
    user: null,
    products: []
}

function reducer(state, action) {
    switch(action.type) {
        case 'number_add2':
            return {...state, number: state.number + 2}
        case 'number_mult7':
            return {...state, number: state.number * 7}
        case 'number_div25':
            return {...state, number: state.number / 25}
        case 'number_int':
            return {...state, number: parseInt(state.number)}
        case 'login':
            return {...state, user: { name: action.payload }}
        case 'number_input':
            return {...state, number: state.number + action.payload}
        default:
            return {state}
    }
}

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
                    <button className="btn" onClick={() => dispatch({type: "number_add2"})}>+2</button>
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
