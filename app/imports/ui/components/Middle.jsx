import React from 'react';
import { Image, Grid, Header } from 'semantic-ui-react';

export default class Middle extends React.Component {
  render () {
    const gridStyle = { height: "1000px" };
    return (
        <div className="landing-background">
          <Grid container textAlign="center" verticalAlign="middle" style={gridStyle} row={6}>
            <Grid.Row>
              <Image src="/images/LandingLogo.png" size="massive"/>
            </Grid.Row>
            <Grid.Row>
              <Header as="h2" inverted>
                Fighting to reduce greenhouse gas emissions at all of UH campuses.
              </Header>
              </Grid.Row>
            <Grid.Row>
              <Header as="h2" inverted>
                Information about the waste audit
              </Header>
            </Grid.Row>
            <Grid.Row>
              <Header as="h2" inverted>
                Pictures from 2017 Waste Audit
              </Header>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
