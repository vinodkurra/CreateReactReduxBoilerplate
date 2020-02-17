import React from "react";
import {connect} from "react-redux";
import {service} from "./services/common/action"
class App extends React.Component{


    componentDidMount(){ 
        let data = {
            name : "maniiii",
            age:"24"
        }
        this.props.anyother()
    }
    render(){
        console.log("mmmmmmmmmmmmmmmmmmmmmmmmm", this.props.userDetails)
        return(
            <div>
                Hi I AM REACT AND REDUXZ BOILER PLATE
            </div>
        )
    }
    }


const mapActions =(dispatch) =>{
    return{
    anyother : () => dispatch(service())
    }
}

const mapProps  = (state) =>{
    return{
        userDetails: state.commonReducer.userDetails
    }
}


export default connect(mapProps,mapActions) (App);