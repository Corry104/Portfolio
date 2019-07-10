import React, { Component } from 'react';
import './components/css/App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="demo-big-content">
        <Layout id='layoutStyle'>
          <Header className='header-color' title={<a id='titleStyle' href='/'>My Portfolio</a>} scroll>
            <Navigation>
              <Link to = "/resume" id='linkStyle'>Resume</Link>
              <Link to = "/aboutme" id='linkStyle'>About Me</Link>
              <Link to = "/projects" id='linkStyle'>Projects</Link>
              <Link to = "/contact" id='linkStyle'>Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<a id='titleStyle' href='/'>My Portfolio</a>} id='drawerStyle'>
            <Navigation >
              <Link to="/resume" id='linkStyle'>Resume</Link>
              <Link to="/aboutme" id='linkStyle'>About Me</Link>
              <Link to="/projects" id='linkStyle'>Projects</Link>
              <Link to="/contact" id='linkStyle'>Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
        </Layout>
      </div>
    );
  }
}


export default App;