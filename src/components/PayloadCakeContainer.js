import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function PayloadCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Numbers of cakes - {props.numOfCakes}</h2>
            <input type="number" onChange={(e) => setNumber(e.target.value)} value={number}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

const mapStateToprops = (state) =>{
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchtoProps = { buyCake }
// const mapDispatchtoProps = (dispatch) =>{
//     return {
//         buyCake: () => dispatch(buyCake)
//     }
// }

export default connect(
    mapStateToprops, 
    mapDispatchtoProps
    )(PayloadCakeContainer)
// the state we had used in our components, we r getting from "Store" passed using "Provider" in App.js