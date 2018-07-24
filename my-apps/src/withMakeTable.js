import React from "react";
import Loader from './Loader';
import "./styles.css";

const withMakeTable = Component => {
    class MyComponent extends React.Component {

        render() {
            return this.props.lists.length ?
                <table className='mytable'>
                    <thead>
                        <tr className='tr'>
                            <th className='th'>ID</th>
                            <th className='th'>NAME</th>
                        </tr>
                    </thead>

                    <tbody>
                        <Component {...this.props} />
                    </tbody>
                </table>
                : <Loader/>;


               
        }
    }
    return MyComponent;
}

export default withMakeTable;