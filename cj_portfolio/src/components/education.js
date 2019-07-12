import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Education extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p><strong>{this.props.startYear} {this.props.endYear}</strong></p>
                    {this.props.schoolTitle} <br/> {this.props.Location}

                </Cell>

                <Cell col={8}>
                    <h4 style={{fontFamily: 'Spectral'}}>{this.props.schoolName}</h4>
                    <p><strong>{this.props.schoolDescription}</strong></p>

                </Cell>
            </Grid>
        )
    }

}

export default Education;