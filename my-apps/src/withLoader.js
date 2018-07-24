import React from 'react';
import Loader from './Loader';

const withLoader = Component => {
    class MyComponent extends React.Component {
      render() {
        return this.props.lists.length ? <Component lists={this.props.lists} /> : <Loader/>
      }
    }
    return MyComponent;
  };
  
  export default withLoader;
  