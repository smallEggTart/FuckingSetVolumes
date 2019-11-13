import React from "react";
import {number} from "prop-types";
import {findDOMNode} from "react-dom";

import '../css/components/Cursor.css'

const interface1 = {
    volume: number
};

class Cursor extends React.Component {
    state: any;
    timer: any;
    move: any;

    constructor(props: {}) {
        super(props);

        this.state = {
            volume: 0,
            left: 0
        };
        this.timer = null;
        this.move = React.createRef();
    }

    addVolume = () => {
        let {volume} = this.state;
        let el = findDOMNode(this.move.current),
            left = parseInt(window.getComputedStyle(el as Element).left as string);
        console.log(left);
        if (left > 90 && left < 110) {
            this.setState({
                volume: volume + 10 > 100 ? 100 : volume + 10
            })
        } else {
            this.setState({
                volume: 0
            })
        }
    };

    componentDidMount(): void {
    }

    componentWillUnmount(): void {
    }

    render() {
        return <div className="cursor">
            <div className="volume"
                 style={{width: '20px', height: '200px', border: '1px solid #ddd', transform: 'rotate(180deg)'}}>
                <div style={{background: 'blue', height: this.state.volume + '%', width: '100%'}}></div>
            </div>
            <div className="control">
                <div className="ruler"
                     style={{width: '200px', height: '20px', border: '1px solid #ddd', background: 'red'}}>
                    <div className="highlight" style={{width: '20px', height: '100%', background: 'green'}}></div>
                </div>
                <div className="move" ref={this.move}
                     style={{width: 0, height: 0, border: '20px solid', borderColor: 'transparent transparent black'}}>
                </div>
            </div>
            <button onClick={this.addVolume}>Add Volume
            </button>
        </div>
    }
}

export default Cursor;