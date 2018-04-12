import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/@index.css';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
