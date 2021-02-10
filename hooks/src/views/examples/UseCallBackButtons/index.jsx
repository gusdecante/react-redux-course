import React from "react"

const UseCallBackButtons = ({inc}) => {
    console.log("render....")
    return (
        <div>
            <button className="btn" onClick={() => inc(6)}>+6</button>
            <button className="btn" onClick={() => inc(12)}>+12</button>
            <button className="btn" onClick={() => inc(18)}>+18</button>
        </div>
    )
}

export default React.memo(UseCallBackButtons)