import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import fotoPerfil from '../img/Foto_perfill.jpg';

class Contact extends Component {
    render(){
        return(
            <div className = 'contact-body'>
            <Grid className = 'contact-grid'>
                <Cell col={6} classNeme= 'coli'>
                    <h2> Andrea Magallanes </h2>
                    <img
                    src= {fotoPerfil}
                    alt="avatar"
                    style={{height: '30%'}}
                    />
                    <p style={{ width: '75%', marginTop:'5%', marginLeft: '10%', paddingTop: '1%'}}>dfsfsdfsfd sdfsdfdf sdfdgdg f ert h hfg fsfsferger fsfergsdswef sfergdgdhtr efregetgert rtertergf rergegegrrtgef sdferegerge rergregerg ergerefwef erertegvdg egegdfvwrgerg wefrgegferg ergergevdfgeryrtg ergrthrte </p>
                    </Cell>
                <Cell col={6} classNeme= 'colO'>
                    <h2>Contactame</h2>
                    <hr/>
                <div className='contact-list'>
                <List>
  <ListItem>
    <ListItemContent style={{fontSize:'120%', fontFamily: 'Anton'}}>
        <i className= 'fa fa-phone-square' aria-hidden='true'/>
        (3313016352)
        </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:'120%', fontFamily: 'Anton'}}>
    <a href='mailto:andybmq@gmail.com' rel="noopener noreferrer" target='_blank'>
        <i className= 'fa fa-envelope' aria-hidden='true'/>
        andybmq@gmail.com </a>
        </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:'120%', fontFamily: 'Anton'}}>
    <a href='https://github.com/anndy9192' rel="noopener noreferrer" target='_blank'>
        <i className= 'fa fa-github-alt' aria-hidden='true'/>
        andy9192 </a>
        </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:'120%', fontFamily: 'Anton'}}>
    <a href='https://www.linkedin.com/in/andreamagallanes' rel="noopener noreferrer" target='_blank'>
        <i className= 'fa fa-linkedin' aria-hidden='true'/>
        /andreamagallanes </a>
        </ListItemContent>
  </ListItem>
</List>
                </div>
                    
                    </Cell> 
            </Grid>
            </div>
        )
    }
}

export default Contact