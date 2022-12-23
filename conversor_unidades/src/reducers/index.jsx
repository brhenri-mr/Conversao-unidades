//combinação dos multiplos reducers

import { combineReducers } from 'redux';
import {reducers as listareducers} from './listagem.reducer'

const reducers = combineReducers({
    listareducers,
})

export {reducers}