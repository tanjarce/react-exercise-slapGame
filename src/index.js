import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import World from './App';


const heroList = [
    {name: 'Jerald', picked: false},
    {name: 'Dan', picked: false},
    {name: 'Boks', picked: false},
    {name: 'Jason', picked: false}
    ];

ReactDOM.render(<World heroList={heroList}/>, document.getElementById('root'));
