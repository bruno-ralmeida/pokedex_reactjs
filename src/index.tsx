import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
