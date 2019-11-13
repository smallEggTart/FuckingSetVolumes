import {EnthusiasmAction} from '../actions';
import {INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM} from '../constants';
import {StoreState} from '../types';

export default function enthusiasm(state: StoreState = {
    languageName: 'TS',
    enthusiasmLevel: 1
}, action: EnthusiasmAction): StoreState {
    console.log(1);
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return {
                ...state,
                enthusiasmLevel: state.enthusiasmLevel + 1
            };
        case DECREMENT_ENTHUSIASM:
            return {
                ...state,
                enthusiasmLevel: state.enthusiasmLevel - 1
            };
        default:
            return state;
    }
}