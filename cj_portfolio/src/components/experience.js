import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Experience extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p><strong>{this.props.startYear} - {this.props.endYear}</strong></p>
                    {this.props.jobTitle} <br/> {this.props.Location}

                </Cell>

                <Cell col={8}>
                    <h4 style={{fontFamily: 'Spectral'}}>{this.props.jobName}</h4>
                    <ul className='bulPoints'>
                        <li><strong>{this.props.jobDescription1}</strong></li>
                        <li><strong>{this.props.jobDescription2}</strong></li>
                        <li><strong>{this.props.jobDescription3}</strong></li>
                    </ul>
                </Cell>
            </Grid>
        )
    }

}

export default Experience;