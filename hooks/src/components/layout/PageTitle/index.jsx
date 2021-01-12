import './styles.css'
import React from 'react'

const PageTitle = props => (
    <div className={`pagetitle ${props.error ? "error" : ""}`}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
)

export default PageTitle