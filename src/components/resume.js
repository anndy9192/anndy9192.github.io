import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import Cv from '../img/CV.jpg';

class Resume extends Component {
    render(){
        return(
            <div className='landing-resume'>
            <Grid  >
            <img className='cv-img' style={{marginTop:'-10%'}} src={Cv}
                            alt="avatar"
                        />
                        </Grid>
                        </div>
        )
    }
}

export default Resume