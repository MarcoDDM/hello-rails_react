import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer'; // Import the rootReducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;