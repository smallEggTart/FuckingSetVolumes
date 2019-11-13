import React from "react";
import {number} from "prop-types";

const interface1 = {
    volume: number
};

class KeepClick extends React.Component {
    state: any;
    timer: any;

    constructor(props: {}) {
        super(props);

        this.state = {
            volume: 0
        };
        this.timer = null;
    }

    addVolume = () => {
        let {volume} = this.state;
        this.setState({
            volume: volume + 10 > 100 ? 100 : volume + 10
        })
    };

    lessVolume = () => {
        let {volume} = this.state;
        if (volume > 0) {
            this.setState({
                volume: volume - 1
            })
        }

        this.timer = setTimeout(() => {
            this.lessVolume();
        }, 50)
    };

    componentDidMount(): void {
        this.lessVolume();
    }

    componentWillUnmount(): void {
        clearTimeout(this.timer);
    }

    render() {
        return <div>
            <div className="volume" style={{width: '200px', height: '20px', border: '1px solid #ddd'}}>
                <div style={{height: '100%', width: this.state.volume + '%', background: 'green'}}></div>
            </div>
            <div>{this.state.volume}</div>
            <div onClick={this.addVolume}>Add Volume
            </div>
        </div>
    }
}

export default KeepClick;