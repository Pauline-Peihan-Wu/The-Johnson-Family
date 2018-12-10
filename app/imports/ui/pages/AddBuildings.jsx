import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import AdminOptions from '../components/AdminOptions';
import ListBuildings from '../components/ListBuildings';
import AddBuilding from '../components/AddBuilding';

/** A simple static component to render some text for the landing page. */
class AddBuildings extends React.Component {
  render() {

    const style = {
      margin: '0px',
      paddingTop: '40px',
      paddingBottom: '40px',
      textDecoration: 'underline',
    };

    const bodyStyle = {
      paddingTop: '30px',
      paddingBottom: '500px',
    };

    return (
        <Grid container style={bodyStyle} divided='vertically'>
          <AdminOptions/>

          <Grid.Row columns={2}>
            <Grid.Column>
              <AddBuilding/>
            </Grid.Column>
            <Grid.Column>
              <ListBuildings/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default AddBuildings;
