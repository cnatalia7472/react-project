import React, { PureComponent } from 'react';

class Life extends PureComponent {
    // 1 get default props

    // 2 set default state

    state = {
        title: 'Life cycles'
    }

    // // 5 after jsx
    // componentDidMount() {
    //     console.log('5 after render')
    //     document.querySelector('h3').style.color = 'red';
    // }

    // // 3 before render
    // componentWillMount() {
    //     console.log('3 before render');
    // }

    // componentWillUpdate() {
    //     console.log('before update');
    // }

    // componentDidUpdate() {
    //     console.log('after update');
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.title === this.state.title) {
    //         return false;
    //     }
    //     return true;
    // }

    // componentWillReceiveProps() {
    //     console.log('BEFORE receive props');
    // }

    // componentWillUnmount() {
    //     console.log('UNMOUNT');
    // }

    // 4 render jsx
    render() {
        console.log('RENDER');
        return (
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={
                    () => this.setState({
                        title: 'something else'
                    })}
                >CLICK TO CHANGE</div>
            </div>
        )
    }
}

export default Life;
