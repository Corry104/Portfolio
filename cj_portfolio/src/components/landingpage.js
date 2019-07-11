import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './css/landingpage.css'



class Landing extends Component {
    render() {
        return (
            <div style={gridStyle}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src={require('./images/profileLarge.JPG')}
                            alt='profile'
                            id='avatar-pic'
                        />
                        <div className='banner-text'>
                            <h1>Full Stack Software Developer</h1>

                            <hr />

                            <div className='lp-skills'>
                            <a href='https://en.wikipedia.org/wiki/HTML' target='_blank' rel="noopener noreferrer" > HTML/CSS | </a>
                            <a href='https://en.wikipedia.org/wiki/JavaScript' target='_blank' rel="noopener noreferrer"> JavaScript | </a>
                            <a href='https://en.wikipedia.org/wiki/MEAN_(software_bundle)' target='_blank' rel="noopener noreferrer"> MERN Stack | </a>
                            <a href='https://en.wikipedia.org/wiki/JQuery' target='_blank' rel="noopener noreferrer"> JQuery | </a>
                            <a href='https://en.wikipedia.org/wiki/MySQL' target='_blank' rel="noopener noreferrer"> MySQL | </a>
                            <a href='https://en.wikipedia.org/wiki/Heroku' target='_blank' rel="noopener noreferrer"> Heroku | </a>
                            <a href='https://en.wikipedia.org/wiki/GitHub' target='_blank' rel="noopener noreferrer"> GitHub</a>
                            </div>

                            <div className='social-links'>

                                {/*Linkedin */}
                                <a href='https://www.linkedin.com/in/corradoalfano/' target='_blank' rel="noopener noreferrer">
                                    <i className='fa fa-linkedin-square' aria-hidden='true' />
                                </a>

                                {/*GitHub */}
                                <a href='https://github.com/Corry104/' target='_blank' rel="noopener noreferrer">
                                    <i className='fa fa-github-square' aria-hidden='true' />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

const gridStyle = {
    width: '100%',
    margin: 'auto',
    height:'100%'
}

export default Landing;