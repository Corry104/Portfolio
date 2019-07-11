import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Experience extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p><strong>{this.props.startYear} - {this.props.endYear}</strong></p>
                    <p>{this.props.jobTitle}</p>

                </Cell>

                <Cell col={8}>
                    <h4 style={{fontFamily: 'Spectral'}}>{this.props.jobName}</h4>
                    <p><strong>{this.props.jobDescription}</strong></p>

                </Cell>
            </Grid>
        )
    }

}

export default Experience;