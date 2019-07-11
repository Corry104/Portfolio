import React, { Component } from 'react';
import { Grid, Cell, } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import './css/resume.css';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4} className='resume-left-col'>
                        <div>
                            <img
                                src={require('./images/profileLarge.JPG')}
                                alt='profile'
                                id='imgStyle'
                            />
                        </div>

                        {/* Personal information */}
                        <h2>Corrado Alfano</h2>
                        <h4> Full Stack Software Developer</h4>
                        <hr />
                        <p>I am a very adept Full Stack Software Developer, skilled in browser-based technologies such as JavaScript, React.js, HTML, CSS, JQuery and web key skills like MongoDB, MySQL, RESTful API, Heroku, GITHub and more. My fire comes from a passion of helping people and my stubbornness of thinking “outside the comfort zone” to find a solution, which translates to problem solving, whether that is a human or a computer related challenge.
                            <br/>
                            In the last year, I have worked to develop computer and programming skills to the highest level, and I have been working and studying alongside some of the best developers in the Los Angeles area.
                            <br/>
                            I’m a problem solver and very results-driven. Doing a good job and achieving the desired end result is my primary motivation. While I enjoy working on a project on my own, I’m particularly motivated by the buzz of working in a team.
                            It’s very rewarding working closely with others who share the same common goal. I like to take on a challenge; I like to rise to that challenge as part of a concerted team effort.
                            <br/>
                            <br/>
                            My resume gives a brief synopsis of my history which I'd like to discuss further during an interview.
                        </p>
                        <hr />
                        <h5>Address</h5>
                        <p>Los Angeles, California, USA</p>
                        <h5>Email</h5>
                        <a href="mailto:cj.alfano@yahoo.com?subject=We%20want%20you%20in%20our%20team!!&body=message%20goes%20here"><strong>cj.alfano@yahoo.com</strong></a>
                        <h5>Resume</h5>
                        <a href='https://docs.google.com/document/d/1z_rkTi9kQtj7PnDwzda-RJFpqVOE6O4cWHJNgB33d-U/edit?usp=sharing' target='a_blank'><strong>Corrado Resume PDF Version</strong></a>


                    </Cell>
                    <Cell className='resume-right-col' col={8}>

                        {/* list of all my education level */}
                        <h2>Education</h2>

                        <Education
                            startYear={2018}
                            endYear={2019}
                            schoolTitle= 'Student'
                            schoolName='UCLA Full Stack Web Development Bootcamp'
                            schoolDescription='
                            Building and implementing dynamic end-to-end web applications with responsive designs using browser based technolgies, such as HTML, CSS, Javascript and Jquery.
                            Developing user-friendly, programmer-friendly, customer-friendly, reliable, and easily readable applications, understanding concepts and terminology of object-oriented programming.
                            Designing applications employing common design patterns calibrated to the use of platforms using MERN stack as well as MySQL and Firebase database.'
                        />

                        <hr />

                        {/* list of all my work experiences */}

                        <h2>Experience</h2>

                        <Experience
                            startYear={2014}
                            endYear={2017}
                            jobTitle='Assistant General Manager'
                            jobName='Four Seasons Hotel & Resorts | CUT by Wolfgang Puck'
                            jobDescription='Working with the Director of Marketing in generating business by creating new events and promotions to increase revenue in both CUT and sidebar.
                            Working closely with the IT department on any daily challenges with Squirrel Software sydstem, such as crashes, upgrades or change of style. Also set-up and worked on Excel in creatingspreadsheet financial analysis for the restaurant and the hotel based upon daily data provided by the system. '
                        />

                        <Experience
                            startYear={2013}
                            endYear={2014}
                            jobTitle='Senior Manager'
                            jobName='Spago BH by Wolfgang Puck'
                            jobDescription='Actively involved in building long-lasting guest relationship with the local community by creating and elevating our customer service experience. Directly leading the service department of a Michelin Start establishment with a total of over 60 team members. 
                            Involved in the process of hiring and training for the whole department and actively involved in working with the Open Table reservation system team in creating various ways of maximizing the amount of seating in the restaurant to implement data, based on dining time, reservation hours and number of tables algorithms.'

                        />
                        <hr />

                        {/* List of all my skill's level */}
                        <h2>Skills</h2>

                        <Skills
                            skills='JavaScript'
                            progress={80}
                        />
                        <Skills
                            skills='HTML | CSS'
                            progress={100}
                        />
                        <Skills
                            skills='JQuery'
                            progress={80}
                        />
                        <Skills
                            skills='MERN Stack'
                            progress={70}
                        />
                        <Skills
                            skills='MySQL'
                            progress={85}
                        />
                        <Skills
                            skills='Heroku | GitHub'
                            progress={100}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;