import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer/index'




const store =   createStore(reducer)

render( 
    <Provider store={store}> 
    <App/>
    </Provider>,
    document.getElementById('root')
)
