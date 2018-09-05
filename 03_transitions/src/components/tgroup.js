import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Slide extends Component {

    state = {
        items: []
    }

    addElements() {
        return this.state.items.map((item, index) => (
            <CSSTransition
                classNames="item"
                timeout={2000}
                key={index}
                onEntered= { (node) => {
                    node.classList.add("active")
                }}
            >
                <div className="item" key={index}>{item}</div>
            </CSSTransition>
        ));
    }

    generateNumber() {
        let newArray = [...this.state.items, Math.floor(Math.random() * 100) + 1];
        this.setState({
            items: newArray
        })
    }

    removeNumber() {
        let newArray = this.state.items.slice(0, -1);
        this.setState({
            items: newArray
        })
    }
    render() {
        return (
            <div>
                <TransitionGroup
                    component="div"
                    className="list"
                >
                    {this.addElements()}
                </TransitionGroup>

                <div className="btns">
                    <div className="btn-add" onClick={()=> this.generateNumber()}>Add Element</div>
                    <div className="btn-remove" onClick={()=> this.removeNumber()}>Remove Element</div>
                </div>
            </div>
        )
    }
}

export default Slide;
