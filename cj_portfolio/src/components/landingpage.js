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
                            <p>HTML/CSS | JavaScript | MERN Stack | JQuery | MySQL | Heroku | GitHub</p>

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
    margin: 'auto'
}

export default Landing;