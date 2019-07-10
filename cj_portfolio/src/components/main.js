import React from 'react';
import Landing from './landingpage';
import Resume from './resume';
import About from './aboutme';
import Projects from './projects'
import Contact from './contact';
import NotFound from './404page';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path ='/' component = { Landing } />
        <Route path ='/resume' component = { Resume } />
        <Route path ='/aboutme' component = { About } />
        <Route path ='/projects' component = { Projects } />
        <Route path ='/contact' component = { Contact } />
        <Route component = {NotFound} />
    </Switch>
)

export default Main;