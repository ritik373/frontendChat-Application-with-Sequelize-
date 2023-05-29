import {configureStore} from '@reduxjs/toolkit'

import authSlice from './auth-slice';
import messageSlice from './message-slice';


const store=configureStore({

    reducer:{
        auth:authSlice,
        message:messageSlice

    }

});

export default store;


