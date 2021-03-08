
import {applyMiddleware, combineReducers, createStore} from 'redux';
import { formReducer } from './reducers/form';
import { navReducer } from './reducers/navigation';
import { worksReducer } from './reducers/works';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  nav: navReducer,
  works: worksReducer,
  formSend: formReducer
})


export const store = createStore(rootReducer,applyMiddleware(thunk));
// @ts-ignore
window.store = store;
export type RootStateType = ReturnType<typeof rootReducer>


