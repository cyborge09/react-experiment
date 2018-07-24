import React from "react";

const withFetchingData = Component => {
    const url = "http://localhost:8848/api/?name=";
    var tempurl = "";
    var mainUrl = "";

    class MyComponent extends React.Component {
        constructor() {
            super();

            this.state = {
                list: [],
                data: 0,
                url:"",
                path:"to_dos",
                query:"",
                mainUrlflag : true,
                datalength:0
            };
        }

        fetchdata = (data) => {

            fetch(data)
                .then(r => r.json())
                .then(response => {
                    this.setState({
                        list: response.data,
                        data: response.data.length
                    });
                });

        }
  

        setTempurlValue = (e) =>{
            tempurl = e.target.value; 
        }

        render() {

            return (
                <div>
                    <input onChange={(e) => { this.setTempurlValue(e) }}></input>
                    <Component lists={this.state.list} />
                </div>

            )
        }
    }

    return MyComponent;
};

export default withFetchingData;
