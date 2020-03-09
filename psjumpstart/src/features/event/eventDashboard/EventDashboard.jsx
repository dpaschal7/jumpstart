import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import EventList from "../eventList/EventList";
import cuid from "cuid";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";
//const eventsFromDashBoard =
const mapState = state => ({
  events: state.events
});

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null //contains selected event object
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.props.createEvent(newEvent);
  };

  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
  };
  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
    this.setState(({ events }) => ({
      //events: events.filter(e => e.id !== id)
    }));
  };
  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvent={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed</h2>
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(mapState, actions)(EventDashboard);
