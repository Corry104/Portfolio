import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './css/aboutme.css'


class About extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={6} className='about-left-col'>
                    <div>
                        <h1>Allow Me To Introduce Myself...  </h1>
                    </div>
                    <p><strong>
                           My name is Corrado I was born in Rome and I grew up in London and I am now living in this city of Angels, in California since 2013.<br/>
                           <br/>
                           I am a people person, passionate about organization and solving problems, I decided to study business administration and hospitality at a very young age.
                           After completing my studying in Italy I eventually made my way to London where I managed and led the finest teams inside the finest hotels and restaurants the city had to offer and here in Los Angeles, where I have crafted and mastered the art of human relationship.
                           <br/><br/>
                           I am a father of a 4 years old boy. I am set to be an example for him and we do quite a lot of things together. We both love outdoor activities as much as the indoor, we love playing bowling 🎳 and video games 🎮; we
                           like climbing &#129495;&#127995;, golfing &#127948;, fencing 🤺, horse riding &#127943; and walking by the beach 🏖️ at sunset eating gelato 🍦. [the last one is probably our favorite] &#128516;<br/>
                           <br/>
                           My introduction to Software Development happened during the summer of 2018 when, because of my family situation, I couldn't fulfill the lifestyle requirements of a restaurant General Manager so I decided to look for an industry where I could transfer my personal and professional skills, and let me 
                           tell you... I found what I was looking for...
                           <br/>
                           <br/>
                            Not only Software Development gives me the chance to work on a team which translates to being able to see, target and work on a common goals with a group of skilled professionals aiming at the same direction, but it also allows me to use my former skills at the highest level.. and it is a lot fun 
                            to craft something from a blank page and see it grow into a platform or an application that could be so powerful and could affect so many people in so many levels, it really has been very rewarding.

                           </strong></p>


                    </Cell>

                    <Cell className='img-right-col' col={6}>
                    <div>
                            <img
                                src={require('./images/portfolio-background.JPG')}
                                alt='LA_Rome_Lndn'
                                id='about-pic-right'
                            />
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}



export default About;