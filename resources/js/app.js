/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

//require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//require('./components/Example');

import ReactDOM from 'react-dom';
import React from 'react';
import PerfilUsuario from './components/perfilUsuario';

const App = () => {
    return (
        <div>
            <PerfilUsuario></PerfilUsuario>   
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
