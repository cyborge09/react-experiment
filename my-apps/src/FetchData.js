import React, { Component } from 'react';

const URL = 'http://localhost:8848/api/users/';
let data;
class FetchData extends Component
{
    constructor()
    {
        super();
        this.state = {
            Receivedflag:false
        }
    }

    componentDidMount()
    {
      fetch(URL)
    .then((response) => {
      return response.json();
    })

    .then((myJson) => {
      data = myJson
      console.log(data)
      this.setState({
          Receivedflag:true
      })
    });
    }

    render()
    {
        return (
            <div>
            {(this.state.Receivedflag)? JSON.stringify(data):'LOADING'}
            </div>
        );
    }

}

export default FetchData;