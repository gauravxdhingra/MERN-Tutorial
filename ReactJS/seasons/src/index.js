import React from 'react';
import ReactDom from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'


class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { lat: null, err: "" };
    // }

    state = { lat: null, err: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ err: "Failed to access current position" })
        );
    }

    render() {
        if (this.state.err && !this.state.lat)
            return <div>Error: {this.state.err}</div>
        if (!this.state.err && this.state.lat)
            return (
                <div>
                    <SeasonDisplay />
                </div>
            );
        return <Spinner message="Please accept location request" />
    }
}

ReactDom.render(<App />, document.getElementById('root')); 