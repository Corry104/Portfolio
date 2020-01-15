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
                            I’m a problem solver and very results-driven with a high work ethic. Passionate about technology, software development and design.
                            I possess strong attention to detail with a high technical, oral and written communication skills. Proven ability to, both, collaborate with team members
                            by creating strong and positive relationships and to work independently with an eager-to-learn attitude. In my past experiences there are successful
                            track records of looking at requirements, putting together estimates, and delivering projects successfully and on schedule with the ability to self-direct,
                            be detailed oriented and able to set and meet deadlines.
                        </p>
                        <hr />
                        <h5>Address</h5>
                        <p>Los Angeles, California, USA</p>
                        <h5>Email</h5>
                        <a href="mailto:cj.alfano@yahoo.com?subject=We%20want%20you%20in%20our%20team!!&body=message%20goes%20here"><strong>cj.alfano@yahoo.com</strong></a>
                        <h5>Resume</h5>
                        <a href='https://drive.google.com/open?id=1yvwtX4OcI4X6YRzPL_ZXC8Vh7kcb7eW-' target='a_blank'><strong>Resume Colored Version</strong></a>
                        <br />
                        <br />
                        <a href='https://drive.google.com/open?id=1jvK42CfAHU2qO9uCMa-m-p2wLjA4NY_H' target='a_blank'><strong>Resume Black & White Version</strong></a>

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
                            jobTitle='Instructor Assistant'
                            Location='Los Angeles, CA'
                            jobName='Trilogy Education Full Stack Web Development at UCLA'
                            jobDescription1="Assist in the development and transition of working professionals and recent graduates into careers in web development."
                            jobDescription2="Lead classroom discussions, emphasize meta-skills, and core concepts of software engineering, as well as support students in their projects and challenges, and provide constructive feedback."
                            jobDescription3="Ability to manage 2-3 projects simultaneously using technical oral and written communication skills with a strong attention to detail."
                        />

                        <Experience
                            startYear={2019}
                            endYear={'Present'}
                            jobTitle='Freelancer'
                            Location='Los Angeles, CA'
                            jobName='Consultant Software Developer Self-Employed'
                            jobDescription1="Developed a series of HTML, CSS, JavaScript projects and created pages for an e-commerce website, worked on the web and mobile responsiveness of the e-commerce website  for Adler & Associates Entertainment group."
                            jobDescription2="Proven ability to self-direct, be organized, be detail oriented and able to set and meet deadlines, with an eager-to-learn attitude."
                            jobDescription3="Proven ability in responsive design for mobile-compatible websites and tools."
                        />

                        <Experience
                            startYear={2014}
                            endYear={2017}
                            jobTitle='Assistant General Manager'
                            Location='Beverly Hills, CA'
                            jobName='Four Seasons Hotel & Resorts at CUT by Wolfgang Puck'
                            jobDescription1="Proven ability to develop positive and strong relationship, and to self-manage time and deliverables."
                            jobDescription2="Successful track record of looking at requirements, putting together estimates, and delivering projects successfully and on the schedule."
                            jobDescription3="Decreased IT issues with Squirrel Software system, such as frozen system, upgrades or change of style. Also decreased labor costs by creating financial spreadsheet analysis for the restaurant and the hotel based upon implemented daily data."
                        />

                        <hr />

                        {/* list of all my education level */}

                        <h2>Education</h2>

                        <Education
                            endYear={2019}
                            schoolTitle='Student'
                            Location='Los Angeles, CA'
                            schoolName='UCLA Full Stack Web Development Bootcamp'
                            schoolDescription1='Successfully programmed and deployed “KindeReady”, an application that helps children under the age of 4 years old entering Kindergarten by teaching them shapes, colors, letters and alphabet. The application was part of a team effort where I was in charge of the Front-End and the deployment using Heroku.'
                            schoolDescription2='Building and implementing dynamic end-to-end applications with responsive designs using  browser based technologies, such as HTML and CSS, JavaScript and jQuery, employing high quality design patterns calibrated to the use of platforms using MERN stack as well as MySQL and Firebase database.'
                        />

                        <Education
                            endYear={2005}
                            schoolTitle='Student'
                            Location='Rome, IT'
                            schoolName='Michelangelo Buonarroti | School of Business Administration'
                            schoolDescription1=
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