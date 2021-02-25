import React from "react"

export const IconButton = ({ hide, style, onClick, icon}) => {
    return hide ? null : (
        <button className={`btn btn-${style}`} onClick={onClick}>
            <i className={`fa fa-${icon}`}></i>
        </button>
    )
}