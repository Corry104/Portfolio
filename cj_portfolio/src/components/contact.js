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
                        <hr/>
                        <p id='pStyle'>
                        Driven technical professional with a strong background in leadership and  management, seeking to pursue a successful career in software development by offering skills in object oriented languages to develop superior software applications and other core systems.<br/>

                        I recently obtained a certfication in Full Stack Software Development program with UCLA.<br/>
                        I speak four languages; English, Italian, Spanish and French.<br/>
                        I am a team member and keen on my job, with a great work ethic.
                        <br/>I  will be available when needed.

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
                                        <a href= "mailto:cj.alfano@yahoo.com?subject=We%20want%20you%20in%20our%20team!!&body=message%20goes%20here" >cj.alfano@yahoo.com</a>
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