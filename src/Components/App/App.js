import React, { useState } from 'react';
import ResultsContainer from '../Results/Results';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

//******using class component********//

// class App extends React.Component {
//     // constructor is the old/conventional way of using state in a react class  
//     constructor() {
//         super();

//         this.state = {
//             headerText: 'Name It!',
//             headerExpanded: true,
//             suggestedNames: [],
//         };
//     }
//     // new way is just simply write the state and inside curly braces, the key:value pairs
//     // state={
//     //     headerText:'Name It!',
//     // }

//     handleInputChange = (inputText) => {
//         this.setState({
//             headerExpanded: !inputText,
//             suggestedNames: inputText ? name(inputText) : [],
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <Header
//                     headerExpanded={this.state.headerExpanded}
//                     headTitle={this.state.headerText}
//                 />
//                 <SearchBox onInputChage={this.handleInputChange} />
//                 <ResultsContainer suggestedNames={this.state.suggestedNames} />
//                 {/* we can pass the state value as well as a function in props as a argument */}
//             </div>
//         );
//     }
// }


//****using functional component*****//


const App = () => {
    const [headerText,] = useState('Name It!');
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);

    const handleInputChange = (inputText) => {
        setHeaderExpanded(!inputText);
        setSuggestedNames(inputText ? name(inputText) : []);
    }
    return (
        <div>
            <Header headerExpanded={headerExpanded} headTitle={headerText} />
            <SearchBox onInputChage={handleInputChange} />
            <ResultsContainer suggestedNames={suggestedNames} />
        </div>
    );
}

export default App;