import * as React from 'react';
import '../css/components/Hello.css'
import KeepClick from './KeepClick'
import Cursor from './Cursor'

export interface Props {
    name: string,
    enthusiasmLevel?: number,
    onIncrease?: () => void,
    onDecrease?: () => void
}

class Hello2 extends React.Component<Props, object> {
    render() {
        const {name, enthusiasmLevel = 1} = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little enthusiasmLevel.')
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
            </div>
        )
    }
}

function Hello({name, enthusiasmLevel = 1, onDecrease, onIncrease}: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little enthusiasmLevel.')
    }
    console.log(enthusiasmLevel);
    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
            </div>
            <KeepClick />
            <Cursor />
        </div>
    )
}

function getExclamationMarks(number: number) {
    return Array(number + 1).join("!");
}

export default Hello;