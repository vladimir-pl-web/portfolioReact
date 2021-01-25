
import {combineReducers, createStore} from 'redux';
import { navReducer } from './reducers/navigation';
import { worksReducer } from './reducers/works';
import{ reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  nav: navReducer,
  works: worksReducer,
  form: formReducer
})


export const store = createStore(rootReducer);
// @ts-ignore
window.store = store;
export type RootStateType = ReturnType<typeof rootReducer>