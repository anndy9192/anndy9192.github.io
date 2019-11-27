import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import Cv from '../img/CV.jpg';

class Resume extends Component {
    render(){
        return(
            <Grid className='landing-resume' >
            <img className='cv-img' src={Cv}
                            alt="avatar"
                        />
                        </Grid>
        )
    }
}

export default Resume