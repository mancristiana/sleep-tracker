import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/@index.css';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';
// Import icons
import fontawesome from '@fortawesome/fontawesome';
import solidIcons from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(solidIcons);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
