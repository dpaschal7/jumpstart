import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter, resetCounter } from "./testAction";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
const mapState = state => ({
  data: state.test.data
});

const actions = {
  //mapDispatchToProps
  incrementCounter,
  decrementCounter,
  resetCounter
};

class TestComponent extends Component {
  state = {
    latlng: { lat: 59.95, lng: 30.33 }
  };
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latlng => this.setState({ latlng: latlng }))
      .catch(error => console.error("Error", error));
  };

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
        <b></b>
        <b></b>
        <TestPlaceInput selectAddress={this.handleSelect} />
        <SimpleMap key={this.state.latlng} latlng={this.state.latlng} />
      </div>
    );
  }
}

export default connect(mapState, actions)(TestComponent);
