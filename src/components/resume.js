import React, { Component } from 'react';
import '../components/resume.css';
import { Grid } from 'react-mdl';
import Cv from '../img/CV.jpg';

class Resume extends Component {
    render(){
        return(
            <div className='landing-resume'>
            <Grid>
            <img src={Cv}
                            alt="avatar"
                        />
                        </Grid>
                        </div>
        )
    }
}

export default Resume