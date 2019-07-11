import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import './css/projects.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (

                /* Project #1  -- NYT GoogleBooks-- with React */

                <div className='projects-grid'>
                    <Card shadow={5} id='cardStyle'>
                        <CardTitle style={{ background: 'url(https://www.nawe.co.uk/Private/28879/Live/image/6675-1.JPG) center / cover' }} id='cardTitleStyle'></CardTitle>
                        <CardText>
                            <h1 id='buttonStyle'>NYT-GoogleBooks</h1>
                            <p>
                                This project was bootstrapped with Create React App.
                                The application shows a google search on any books. You can save books you have selected and delete them once you don't want them anymore.
                            </p>
                        </CardText>
                        <CardActions border >
                            <Button id='buttonStyle' href='https://github.com/Corry104/NYT-GoogleBooks/tree/master/Google-Books' target='_blank'>GitHub</Button>
                            <Button id='buttonStyle' href='https://google-books-corrado.herokuapp.com/' target='_blank'>Heroku</Button>
                            {/* <Button colored>LiveDemo</Button> */}
                        </CardActions>
                        <CardMenu id='cardMenuStyle' >
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (

                /* Project #1  -- KindeReady-- with MySQL */

                <div className='projects-grid'>
                    <Card shadow={5} id='cardStyle'>
                        <CardTitle style={{ background: 'url(https://github.com/Corry104/KindeReady/blob/master/assets/images/welcome_bg/kindeready-bg-3.png?raw=true) center / cover' }} id='cardTitleStyle'></CardTitle>
                        <CardText>
                            <h1 id='buttonStyle'>KindeReady</h1>
                            <p>
                                We help pre-school scholars get ready for Kindergarten.
                                KindeReady is a web-based application, geared toward preparing students for entry into kindergarten. Through, both, teacher led and student driven activities, an adequate assessment can be made to determine the student readiness for advancement in their educational career.
                                The app is comprised of Units, which are each based on the 9 milestones in early childhood development and kindergarten preparation. Each unit contains 3 Activities and a Summary for the students' learning. Students progress will be tracked and stored in their profile and Units & Activities can be revisited for supplemental learning, at any time!
                            </p>
                        </CardText>
                        <CardActions border id='cardActionStyle'>
                            <Button id='buttonStyle' href='https://github.com/Corry104/KindeReady' target='_blank'>GitHub</Button>
                            <Button id='buttonStyle' href='https://kindeready.herokuapp.com/' target='_blank'>Heroku</Button>
                            {/* <Button colored>LiveDemo</Button> */}
                        </CardActions>
                        <CardMenu id='cardMenuStyle'>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                /* Project #1  -- Bamazon-- with JavaScript */

                <div className='projects-grid'>
                    <Card shadow={5} id='cardStyle'>
                        <CardTitle style={{ background: 'url(http://brand.ucla.edu/images/identity/logos-and-marks/campus-seal.jpg) center / cover' }} id='cardTitleStyle'></CardTitle>
                        <CardText>
                            <h1 id='buttonStyle'>Bamazon</h1>
                            <p><strong>
                                School Project:<br />
                                Amazon like application where the app will take in orders from customers and deplete stock from the store's inventory
                                </strong></p>
                        </CardText>
                        <CardActions border>
                            <Button id='buttonStyle' href='https://github.com/Corry104/Bamazon' target='_blank'>GitHub</Button>
                            <Button id='buttonStyle' href='https://drive.google.com/file/d/1xHC9_ShB6C8-kmVnWdJ1FV8L8tQU-2r-/view' target='_blank'>Demo</Button>
                            {/* <Button colored>LiveDemo</Button> */}
                        </CardActions>
                        <CardMenu id='cardMenuStyle'>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab id='tab'>React</Tab>
                    <Tab id='tab'>MySQL</Tab>
                    <Tab id='tab'>JavaScript</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className='content'>{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Projects;