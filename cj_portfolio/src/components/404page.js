import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './css/404page.css';


class NotFound extends Component {

    render() {
        return (
            <div>
                <Grid className='landing-grid-404'>
                    <Cell col={12}>
                        <div className='Message404'>
                            <h1>AWW <span role='img' aria-label='sadFace'>&#x1F614;&#x1F614;</span> I looked really hard </h1>

                            <p>...but it appears the page you seek doesn't exist anymore.. </p>
                            <br/>
                            <br/>
                           <a href='/'>you can simply click here if you like to go back to the home page</a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default NotFound;