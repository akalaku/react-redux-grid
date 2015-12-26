import { combineReducers } from 'redux';
import grid from './components/grid';
import menu from './components/plugins/menu';
import pager from './components/plugins/pager';
import loader from './components/plugins/loader';
import selection from './components/plugins/selection';
import errorhandler from './components/plugins/errorhandler';
import dataSource from './components/datasource';

const rootReducer = combineReducers({
    grid,
    pager,
    loader,
    selection,
    menu,
    errorhandler,
    dataSource
});

export default rootReducer;