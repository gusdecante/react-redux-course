import React, { useEffect, useRef, useState } from 'react'
import { PageTitle, SectionTitle } from '../../../components/layout'


// const merge = (myInput1, myInput2) => {
//   let sizeToOrder = (myInput1.length + myInput2.length) - 1
//   let orderedString = ""
//   for(let i=0; i < sizeToOrder; i++) {
//     orderedString += (myInput1[i] || "") + (myInput2[i] || "")
//       // if(myInput2[i]){
//       // } else if(myInput1[i]) {
//       //   orderedString += myInput1[i]
//       // }
//   }

//   return orderedString;
// }

const merge = (myInput1, myInput2) => {
  return [...myInput1].map(function(e, index) {
    return `${e}${myInput2[index] || ""}`
  })
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    
		const count = useRef(0)

		useEffect(() => {
        count.current ++;
        myInput2.current.focus()
    }, [value1])

    useEffect(() => {
        count.current ++;
        myInput1.current.focus()
    }, [value2])
    
		return (
				<div className="UseRef">
						<PageTitle
								title="Hook UseRef"
								subtitle="Retorna um objeto mutável com a propriedade .current!"
						/>

						<SectionTitle title="Exercício #01"/>
						<div className="center">
								<div>
										<span className="text">Valor: </span>
										<span className="text">{myInput1.current && merge(myInput1.current.value, myInput2.current.value)} [</span>
										<span className="text red">{count.current}</span>
										<span className="text">]</span>
								</div>
								<input 
										type="text" 
										className="input"
										value={value1}
                    onChange={e => setValue1(e.target.value)}
                    ref={myInput1}
								/>
						</div>    

						<SectionTitle title="Exercício #01"/>
						<div className="center">                      
                <input 
                    type="text"
                    className="input"
                    value={value2}
                    onChange={e => setValue2(e.target.value)}
                    ref={myInput2}
                />
						</div> 
				</div>
		)
}

export default UseRef
