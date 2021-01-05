import React, { Component } from "react";
import { Segment, Form, Header, Divider, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import DateInput from "../../../app/common/form/DateInput";
import PlaceInput from "../../../app/common/form/PlaceInput";
import TextInput from "../../../app/common/form/TextInput";
import RadioInput from "../../../app/common/form/RadioInput";
import { addYears } from "date-fns";

class BasicPage extends Component {
  render() {
    const { pristine, submitting, handleSubmit, updateProfile } = this.props;
    return (
      <Segment>
        <Header dividing size="large" content="Basics" />
        <Form onSubmit={handleSubmit(updateProfile)}>
          <Field
            width={6}
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
          />
          <Form.Group inline>
            <label>Gender: </label>
            <Field
              name="gender"
              type="radio"
              value="male"
              label="Male"
              component={RadioInput}
            />{" "}
            <Field
              name="gender"
              type="radio"
              value="female"
              label="Female"
              component={RadioInput}
            />{" "}
            <Field
              name="gender"
              type="radio"
              value="nonbinary"
              label="Non-Binary"
              component={RadioInput}
            />{" "}
            <Field
              name="gender"
              type="radio"
              value="agender"
              label="Agender"
              component={RadioInput}
            />{" "}
          </Form.Group>
          <Field
            width={6}
            name="dateOfBirth"
            component={DateInput}
            placeholder="Date of Birth"
            dateFormat="dd LLL yyyy"
            showYearDropdown={true}
            showMonthDropdown={true}
            dropdownMode="select"
            maxDate={addYears(new Date(), -18)}
          />
          <Field
            name="city"
            placeholder="Home Town"
            options={{ types: ["(cities)"] }}
            label="Female"
            component={PlaceInput}
            width={6}
          />
          <Divider />
          <Button
            disabled={pristine || submitting}
            size="large"
            positive
            content="Update Profile"
          />
        </Form>
      </Segment>
    );
  }
}

export default reduxForm({
  form: "userProfile",
  enableReinitialize: true,
  destroyOnUnmount: false,
})(BasicPage);
