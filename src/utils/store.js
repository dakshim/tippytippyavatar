import rootReducer from '../slices';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({ reducer: rootReducer })

export { store };