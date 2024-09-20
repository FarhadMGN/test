import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (window.globalMui) {
    const fragmentCreator = {
        create(element) {
            ReactDOM.render(
                <React.StrictMode> <App /> </React.StrictMode>,
                element
            );
        }
    };
    window.globalMui.registerFragment("reactApp", fragmentCreator);
} else {
    ReactDOM.render(
        <React.StrictMode> <App /> </React.StrictMode>,
        document.getElementById('root')
    );
}
