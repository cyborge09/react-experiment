import React from "react";

const withFetchingData = Component => {

  class MyComponent extends React.Component {


    constructor() {
      super();

      this.state = {
        list: [],
        data: 0,
        authorization: '',
        page: 0,
        perpage: ''
      };
    }

    fetchdata = (data) => {

      var userdata = (JSON.parse(sessionStorage.getItem("USERDATA")));
      var accesstoken = userdata[0].ACCESS_TOKEN;
      var refreshtoken = userdata[0].REFRESH_TOKEN;

      fetch(data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: accesstoken

        }
      })
      .then(r => r.json())
      .then( response => {
          var pagelength = response.data.metaData.totaldata.fulfillmentValue;

          
          this.setState({
            list: response.data.data,
            page: pagelength
            // page: (Array.from(new Array(Math.ceil(pagelength /perpage)), (val, index) => index + 1))
          });
          console.log(response)
          console.log(pagelength)

      });
      this.sendLengthToparent();
    }

    sendLengthToparent =()=>{

      this.props.pages( this.state.page )
    }

    componentDidMount() {
      

       this.fetchdata(this.props.url);

    }


    componentWillReceiveProps(nextProps) {
      
      if(this.props.url !== nextProps.url){
          this.fetchdata(nextProps.url )
      }
    }

    render() {
      return (
        <div>

          <Component lists={this.state.list} />


        </div>)



    }
  }

  return MyComponent;
};

export default withFetchingData;
