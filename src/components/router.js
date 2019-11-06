import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const historyObj = createHashHistory({ basename: process.env.PUBLIC_URL });

const Routes= () => (
    <Router history={historyObj}>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route  exact path='/aboutme' component={AboutMe} />
            <Route  exact path='/contact' component={Contact} />
            <Route  exact path='/projects' component={Projects} />
            <Route  exact path='/resume' component={Resume} />
        </Switch>
    </Router>
)

export default Routes;