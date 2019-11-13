import Hello from '../components/Hello';
import * as actions from '../actions/';
import {StoreState} from '../types/index';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

export function mapStateToprops({enthusiasmLevel, languageName}: StoreState) {
    return {
        name: languageName,
        enthusiasmLevel
    }
}

export function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onDecrease: () => dispatch(actions.decrementEnthusiasm()),
        onIncrease: () => dispatch(actions.incrementEnthusiasm())
    }
}

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//     onDecrease: () => dispatch(actions.decrementEnthusiasm()),
//     onIncrease: () => dispatch(actions.incrementEnthusiasm())
// })

export default connect(mapStateToprops, mapDispatchToProps)(Hello);