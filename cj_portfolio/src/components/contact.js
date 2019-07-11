import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import './css/contact.css';

class Contact extends Component {

    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Corrado Alfano</h2>
                        <img
                            src={require('./images/profileLarge.JPG')}
                            alt='profile'
                            id='contactImg'
                        />
                        <hr />
                        <p id='pStyle'>
                            I am an adept Software Developer, highly skilled in browser-based technologies such as JavaScript, MERN Stack, HTML, CSS, JQuery and web key skills like MySQL, Heroku, GITHub and more.
                            <br/><br/>
                            My fire comes from a passion of helping people and my way of thinking “outside the comfort zone” to find a solution, which translates to problem solving, whether that is a human or a computer related challenge.
                            <br/>
                            In the last year, I have worked to develop computer and programming skills to the highest level, and I have been working and studying alongside some of the best developers in the Los Angeles area.
                            <br/><br/>
                            I’m a problem solver and very results-driven. Doing a good job and achieving the desired end result is my primary motivation. While I enjoy working on a project on my own, I’m particularly motivated by the buzz of working in a team.
                            <br/><br/>
                            It’s very rewarding working closely with others who share the same common goal. I like to take on a challenge; I like to rise to that challenge as part of a concerted team effort.


                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent>
                                        <i className='fa fa-envelope-square' aria-hidden='true' />
                                        <a href="mailto:cj.alfano@yahoo.com?subject=We%20want%20you%20in%20our%20team!!&body=message%20goes%20here" >cj.alfano@yahoo.com</a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent>
                                        <i className='fa fa-linkedin-square' aria-hidden='true' />
                                        <a href='https://www.linkedin.com/in/corradoalfano/' target='a_blank' >Corrado Alfano</a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;