import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
  <div>
        <h2 ><center style={{fontFamily: "Georgia, serif"}}>Embark on a Digital Odyssey, Personal Portfolio Blog</center></h2>
  <Switch>
    <Route path="/landingpage" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />s
  </Switch>
  </div>
)


export default Main;
