import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Page from "./page"

// class App extends Component{
//     render(){
//         return(
//             <div>welcome</div>
//         )
//     }
// }
const App = () =>{
    return (
        <Page />
    ) 
    
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)