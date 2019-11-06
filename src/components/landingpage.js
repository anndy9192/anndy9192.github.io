import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl'

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                        src='https://media.licdn.com/dms/image/C5603AQEktt24v_qycg/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=V2pN_PsDfWXyRR0xVxI-Y54zdf32hqJl3KxuklP0epU'
                        alt= "avatar"
                        className='avatar-img'    
                        />

                        <div className="banner-text">
                            <h1> Front end developer </h1>

                            <hr/>

                            <p>HTML/CSS | JavaScript | React | NodeJS | Firebase</p>

                            <div className='social-links'>

                                {/*LinkedIn*/}
                                <a href='https://www.linkedin.com/in/andreamagallanes' rel="noopener noreferrer" target='_blank'>
                                <i class="fa fa-linkedin-square" aria-hidden='true'/>
                                </a>

                                {/*Github*/}
                                <a href='https://github.com/anndy9192' rel="noopener noreferrer" target='_blank'>
                                <i class="fa fa-github-square" aria-hidden='true'/>
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