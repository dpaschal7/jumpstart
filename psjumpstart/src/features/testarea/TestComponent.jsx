import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementAsync, decrementAsync, resetCounter } from "./testAction";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { openModal } from "../modals/modalActions";

const mapState = state => ({
  data: state.test.data,
  loading: state.async.loading,
  buttonName: state.async.elementName
});

const actions = {
  //mapDispatchToProps
  incrementAsync,
  decrementAsync,
  resetCounter,
  openModal
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
      incrementAsync,
      decrementAsync,
      resetCounter,
      openModal,
      loading,
      buttonName
    } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h4>the answer is: {data}</h4>
        <Button
          name="increment"
          loading={buttonName === "increment" && loading}
          onClick={e => incrementAsync(e.target.name)}
          positive
          content="Increment"
        />
        <Button
          name="decrement"
          loading={buttonName === "decrement" && loading}
          onClick={e => decrementAsync(e.target.name)}
          negative
          content="Decrement"
        />
        <Button onClick={resetCounter} content="Reset" />
        <Button
          onClick={() => openModal("TestModal", { data: 44 })}
          color="orange"
          content="Open Modal"
        />
        <b></b>
        <b></b>
        <TestPlaceInput selectAddress={this.handleSelect} />
        <SimpleMap key={this.state.latlng} latlng={this.state.latlng} />
      </div>
    );
  }
}

export default connect(mapState, actions)(TestComponent);
