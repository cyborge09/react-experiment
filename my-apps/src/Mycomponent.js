import React, { Component } from 'react';

class Mycomponent extends Component
{
    constructor()
    {
        super();
        this.state = {
            name : "akash",
            education : {
                slc : "solukhumbu",
                intermediateLevel :"HIMS",
                bachelor :"KCC"
            }

            
        }

        this.showInputData = this.showInputData.bind(this);

    }

    componentDidMount()
    {
        this.props.props9 ("FROM CHILD");
    }
    showInputData(address) {

        this.setState({
            address:address.target.value
        });
    }
    
    render()
    {
        // 
        var myStyle={
            fontSize :20,
            color : 'red'
        }
        return <div>
            <p>{this.props.a}</p>
            <p>{this.props.b}</p>

            <input onChange={ (address) => this.showInputData(address) }/>
            <p style={myStyle}>His name is {this.state.name}.He completed his SLC from {this.state.education.slc}.My address is { this.state.address} </p>
        </div>;
    }
}

Mycomponent.defaultProps = {
    a:"ujjwal",
    b:"stha"
}
export default Mycomponent;