import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <center>
            <img
              src="/assets/images/Silvia 3.jpg"
              className="avatar-img"
              style={{height: '660px'}}
              />
            </center>
            
            <div className="banner-text">
              <h1><center>Software Engineer</center></h1>

            <hr/>

          <p> <center>Java | HTML/CSS | JavaScript | React, React Native  |  NodeJS | SringBoot | Webpack</center></p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/silviaraju/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Silviaraju/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://twitter.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
