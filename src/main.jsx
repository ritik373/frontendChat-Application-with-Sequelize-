import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store/index.jsx'
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.createRoot(document.getElementById('root')).render(

  <ChakraProvider>
    <BrowserRouter>

      <Provider store={store}>

        <App />
      </Provider>
    </BrowserRouter>

  </ChakraProvider>

)
