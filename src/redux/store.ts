
import {combineReducers, createStore} from 'redux';
import { navReducer } from './reducers/navigation';
import { worksReducer } from './reducers/works';

const rootReducer = combineReducers({
  nav: navReducer,
  works: worksReducer,
  
})


export const store = createStore(rootReducer);
// @ts-ignore
window.store = store;
export type RootStateType = ReturnType<typeof rootReducer>