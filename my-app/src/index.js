import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./component/header/header";
import Container from "./component/container/container";

// class App extends Component{
//     render(){
//         return(
//             <div>welcome</div>
//         )
//     }
// }
const App = () =>{
    return (
        <div style={{backgroundColor:'#F5F6F7',margin:0,padding:0}}>
        <Header />
        <Container />
        </div>
    ) 
    
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)