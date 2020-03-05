import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter, resetCounter } from "./testAction";
import { Button } from "semantic-ui-react";

const mapState = state => ({
  data: state.data
});

const actions = {
  //mapDispatchToProps
  incrementCounter,
  decrementCounter,
  resetCounter
};

class TestComponent extends Component {
  render() {
    const {
      data,
      incrementCounter,
      decrementCounter,
      resetCounter
    } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h4>the answer is: {data}</h4>
        <Button onClick={incrementCounter} positive content="Increment" />
        <Button onClick={decrementCounter} negative content="Decrement" />
        <Button onClick={resetCounter} content="Reset" />
      </div>
    );
  }
}

export default connect(mapState, actions)(TestComponent);
