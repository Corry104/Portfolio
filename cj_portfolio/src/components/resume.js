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
                        <p>
                            I pride myself as a logical and creative thinker who enjoys learning new languages, frameworks and technologies.<br/>
                            My analytical skills, education, and passion are crucial to be one step ahead in this ever evolving technological industry.
                            My stellar organizational skills are essential to keep code DRY as re-factored as possible.<br/><br/>
                            The gratification of solving problems is what drives me to be a better programmer.

                            A business background combined with the entrepreneurial spirit can be utilized for aligning profitable goals when programming software.
                        </p>
                        <hr />
                        <h5>Address</h5>
                        <p>Los Angeles, California, USA</p>
                        <h5>Email</h5>
                        <a href="mailto:cj.alfano@yahoo.com?subject=We%20want%20you%20in%20our%20team!!&body=message%20goes%20here"><strong>cj.alfano@yahoo.com</strong></a>
                        <h5>Resume</h5>
                        <a href='https://drive.google.com/file/d/1cAGn_S11D7szywPWg_nMfrm7C6x-gKJl/view?usp=sharing' target='a_blank'><strong>Resume Colored Version</strong></a>
                        <br/>
                        <br/>
                        <a href='https://docs.google.com/document/d/1CfBwI5CMDGvzJsm_951jYocVQwTSxPo7gkKiipyPkM8/edit?usp=sharing' target='a_blank'><strong>Resume Black & White Version</strong></a>

                        <h5>Languages Spoken</h5>
                        <p><span role="img" aria-label="british-flag">🇬🇧 English</span></p>
                        <p><span role="img" aria-label="italian-flag">🇮🇹 Italiano</span></p>
                        <p><span role="img" aria-label="spanish-flag">🇪🇸 Español</span></p>
                        <p><span role="img" aria-label="french-flag">🇫🇷 Français</span></p>


                    </Cell>
                    <Cell className='resume-right-col' col={8}>

                        {/* list of all my work experiences */}

                        <h2>Experience</h2>

                        <Experience
                            startYear={2019}
                            endYear={'Present'}
                            jobTitle='Freelancer'
                            Location='Los Angeles, CA'
                            jobName='Consultant Software Developer Self-Employed'
                            jobDescription=
                            'Working on a range of freelance web projects, including my own portfolio.
                            Developed a series of HTML CSS and JavaScript project for Adler & Associates Entertainment group.
                            Proficient in MERN Stack, MySQL, GitHub and RESTful API and WordPress.'
                        />

                        <Experience
                            startYear={2014}
                            endYear={2017}
                            jobTitle='Assistant General Manager'
                            Location='Beverly Hills, CA'
                            jobName='Four Seasons Hotel & Resorts | CUT by Wolfgang Puck'
                            jobDescription=
                            "Increased customer satisfaction rate by developing and elevating guest service experience.
                             Decreased IT issues with Squirrel Software system, such as frozen system, upgrades or change of style. Also decreased labor cost by creating financial spreadsheet analysis for the restaurant and the hotel based upon implemented daily data."
                        />

                        <Experience
                            startYear={2013}
                            endYear={2014}
                            jobTitle='Senior Manager'
                            Location='Beverly Hills, CA'
                            jobName='Spago Beverly Hills by Wolfgang Puck'
                            jobDescription=
                            'Proven records of  leadership and training a team of over 60 members.
                            Increased revenue,  by actively working with the reservation system team in creating ways of maximizing the amount of seating in the restaurant to implement data, based on dining time, reservation hours and number of tables algorithms.'
                        />

                        <hr />

                        {/* list of all my education level */}

                        <h2>Education</h2>

                        <Education
                            endYear={2019}
                            schoolTitle= 'Student'
                            Location= 'Los Angeles, CA'
                            schoolName='UCLA Full Stack Web Development Bootcamp'
                            schoolDescription=
                            'Building and implementing dynamic end-to-end applications with responsive designs using  browser based technologies, such as HTML and CSS, JavaScript and jQuery,
                            employing high quality design patterns calibrated to the use of platforms using MERN stack as well as MySQL and Firebase database.'
                        />

                        <Education
                            endYear={2006}
                            schoolTitle= 'Student'
                            Location='Rome, IT'
                            schoolName='Michelangelo Buonarroti | School of Business Administration'
                            schoolDescription=
                            'The administration of a business includes the performance or management of business operations and decision making, as well as the efficient organization of people and other resources, to direct activities towards common goals and objectives'
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
                            skills='jQuery'
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