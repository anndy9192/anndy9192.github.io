import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../components/aboutme.css';
import GifAnndy from '../img/about_me.gif'

class About extends Component {
    render(){
        return(
            <div style={{ width: '100%', margin: 'auto' }}>
            <Grid className='aboutme-grid'>
                <Cell col={12}>
                    <h1>
                        Andrea Magallanes
                    </h1>
                    <div className= 'imagenes'>
                    <img src={GifAnndy} alt="avatar" />
                    </div>
                </Cell>
            </Grid>
        </div>

    )
}
}

export default About