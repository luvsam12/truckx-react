import React from 'react'
import { buyCake } from '../redux/cake/index'
import { connect } from 'react-redux'

function CakeComponent(props) {
    return (
        <div>
            <h1>Number of Cakes - {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>But Cakes</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent)
