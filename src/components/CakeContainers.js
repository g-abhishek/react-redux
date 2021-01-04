import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainers(props) {
    return (
        <div>
            <h2>Numbers of cakes - {props.numOfCakes}</h2>
            <button onClick={() => props.buyCake()}>Submit</button>
        </div>
    )
}

// it receives redux state as parameter
// and use as props in our components
const mapStateToprops = (state) =>{
    // this object is passed as props in CakeContainers Components, by connecting mapStateToProps and our CakeContainers Components
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

// const mapDispatchtoProps = { buyCake }
const mapDispatchtoProps = (dispatch) =>{
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToprops, 
    mapDispatchtoProps
    )(CakeContainers)


    // the state we had used in our components, we r getting from "Store" passed using "Provider" in App.js