import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Container, Loader } from 'semantic-ui-react';
import { Locations } from '/imports/api/Locations/Locations';
// import Location from '/imports/ui/components/Location';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class giantestpage extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
  }
  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Insert failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Insert succeeded' });
    }
  }

  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
    }
  }
  /* When the delete button is clicked, remove the corresponding item from the collection. */
  onClick() {
    Locations.insert({ name: "TestName", street: "TestStreet", city: "TestCity", state: "TestState", zip_code: "96797" }, this.insertCallback);
  }

  deleteClick() {
    const id = this.props.location[0]._id;
    Locations.remove(id, this.deleteCallback);
  }
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {

    // console.log(aLoc[name]);
    // TODO - implement: console.log(db.getLocationsCollection()[0]);
    console.log('hi me gian');
    console.log(this.props.location[0]);
    console.log(this.props.location[1]);
    console.log(this.props.location);
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
              {/*{this.props.location.map((location) => <Location key={location._id} location={location} />)}*/}
          {/*{this.props.location.name}*/}
          <Button basic onClick={this.onClick}>Add TestLocation</Button>
          <Button basic onClick={this.deleteClick}>Delete TestLocation</Button>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
giantestpage.propTypes = {
  location: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,

};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Locations');
  return {
    location: Locations.find({}).fetch(),
    ready: subscription.ready(),
  };
})(giantestpage);
