import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
    return (
        <div>
            <h1>Item : {props.itemNumber}</h1>
            <button onClick={() => props.buyItems()}>Buy Item</button>
        </div>
    )
}

// this is the example of passing more than one paramters in mapStateToProps
// here we had passed our own props ===> check App.js
const mapStateToProps = (state, ownProps) => {
    const itemNumber = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams

    // this object is passed as props in ItemContainer Components, by connecting mapStateToProps and our ItemContainer Components
    return {
        itemNumber: itemNumber
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const buyItem = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItems: buyItem
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)


// the state we had used in our components, we r getting from "Store" passed using "Provider" in App.js