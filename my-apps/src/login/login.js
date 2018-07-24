import React, { Component } from 'react';
import { PostData } from '../Services/PostData'
import Fetch from '../Fetch';
class login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            loggedin : false
        }
    }

    login = () => {

        PostData(this.state.email).then((result) => {
            if (result.USERDATA) {
                
                var data = [{'ACCESS_TOKEN': result.USERDATA.accessToken,'REFRESH_TOKEN' :result.USERDATA.refreshToken}]
                sessionStorage.setItem("USERDATA",JSON.stringify(data));

                this.setState({loggedin:true});
                // console.log("data",JSON.parse(sessionStorage.getItem("USERDATA")));

            }
            else {
                alert(result.ERROR)
            }
        });
    }


    setEmail = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        if(sessionStorage.getItem("USERDATA"))
        {
           return(<Fetch/>)
        }
        return (
            <div>
                <label>EMAIL</label>
                <input type="text" name="email" placeholder="email" onChange={this.setEmail} />
                <input type="submit" name="submit" value="submit" onClick={this.login} />
            </div>)

    }
}

export default login;