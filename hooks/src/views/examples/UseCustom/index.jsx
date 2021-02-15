import React from 'react'
import { PageTitle, SectionTitle } from "../../../components/layout"

import { useCounter, useFetch } from "../../../hooks"

const UseRef = (props) => {
    const [count, inc, dec] = useCounter()
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/rs/distritos'
    const response = useFetch(url)

    function showStates(states) {
        return states.map(({nome}) => <li>{nome}</li>)
    }

    //url: http://files.cod3r.com.br/curso-react/estados.json

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => inc()}>+</button>
                    <button className="btn" onClick={() => dec()}>-</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <ul>
                    {response.data ? showStates(response.data) : null}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
