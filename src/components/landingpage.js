import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <h1>
                            Andrea Magallanes
                        </h1>

                        <div className="banner-text">
                            <h2> Front end developer </h2>

                            <hr />

                            <p>HTML/CSS | JavaScript | React | React Native | NodeJS | Firebase</p>

                            <div className='social-links'>

                                {/*LinkedIn*/}
                                <a href='https://www.linkedin.com/in/andreamagallanes' rel="noopener noreferrer" target='_blank'>
                                    <i class="fa fa-linkedin-square" aria-hidden='true' />
                                </a>

                                {/*Github*/}
                                <a href='https://github.com/anndy9192' rel="noopener noreferrer" target='_blank'>
                                    <i class="fa fa-github-square" aria-hidden='true' />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default Landing