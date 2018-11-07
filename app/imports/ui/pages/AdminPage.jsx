import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import AdminOptions from '../components/AdminOptions';

/** A simple static component to render some text for the landing page. */
class AdminPage extends React.Component {
  render() {

    const style = {
      margin: '0px',
      paddingTop: '30px',
      paddingBottom: '500px',
    };

    const bodyStyle = {
      paddingTop: '30px',
      paddingBottom: '30px',
    };

    return (
        <Grid container style={bodyStyle} divided='vertically'>
          <AdminOptions/>

          <Grid.Row>
            <Header as="h1" style={style}>
              Some Content Here - Recently Addded Bags ?
            </Header>
          </Grid.Row>
        </Grid>
    );
  }
}

export default AdminPage;
