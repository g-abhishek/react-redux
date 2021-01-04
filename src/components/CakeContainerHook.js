import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainerHook() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number of cakes - {numOfCakes}</h1>
            <button onClick={() => dispatch(buyCake())}>buy cake</button>
        </div>
    )
}

export default CakeContainerHook



// the state we had used in our components, we r getting from "Store" passed using "Provider" in App.js