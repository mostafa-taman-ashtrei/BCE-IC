import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import SimpleBarReact from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <SimpleBarReact style={{ maxHeight: '100vh' }}>
        <App />
      </SimpleBarReact>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
