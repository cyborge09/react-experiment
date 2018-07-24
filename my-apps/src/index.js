import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";


// import withLoader from "./withLoader";
// import withFetchingData from "./withFetchingData";


// const List = ({ lists }) =>{
//     console.log("...",lists);
//     return(lists.map((lists, i) =>
//      <tr key={i} className='id'>
//         <td className='td'>{lists.id}</td>
//         <td className='td'>{lists.name}</td>
//     </tr>));
//      }
                        


// const ListWithFetchingData = withFetchingData(withLoader(List));

// class Apps extends React.Component {
//   render() {
//     return (
//       <div className="App">
//       <table className='mytable'>
//             <thead>
//                 <tr className='tr'>
//                     <th className='th'>ID</th>
//                     <th className='th'>NAME</th>
//                 </tr>
//             </thead>
            
//             <tbody>
//                 <ListWithFetchingData />
//             </tbody>
//      </table>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Apps />, rootElement);
