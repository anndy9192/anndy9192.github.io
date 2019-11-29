import React, { Component } from 'react';
import '../components/contact.css';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import fotoPerfil from '../img/Foto_perfill.jpg';


class Contact extends Component {
    render() {
        return (

            <div className='columnas'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2> Andrea Magallanes </h2>
                        <div className='fotoPerfil'>
                        <img  src={fotoPerfil} alt="avatar" />
                        </div>
                        <p>Estoy conociendo el medio y estoy abierta a cualquier empresa que me permita desarrollarme tanto personalmente como profecionalmente.
                        Una empresa que me permita poner en practica todos mis conocimientos y que crea en los beneficios de incorporar a gente joven al equipo y recibir enseñanza profesional a través de ella. </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contactame</h2>
                        <hr />
                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent className='iconos'>
                                        <i className='fa fa-phone-square' aria-hidden='true' />
                                        3313016352
        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className='iconos'>
                                        <a href='mailto:andybmq@gmail.com' rel="noopener noreferrer" target='_blank'>
                                            <i className='fa fa-envelope' aria-hidden='true' />
                                            andybmq@gmail.com </a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className='iconos'>
                                        <a href='https://github.com/anndy9192' rel="noopener noreferrer" target='_blank'>
                                            <i className='fa fa-github-alt' aria-hidden='true' />
                                            andy9192 </a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className='iconos'>
                                        <a href='https://www.linkedin.com/in/andreamagallanes' rel="noopener noreferrer" target='_blank'>
                                            <i className='fa fa-linkedin' aria-hidden='true' />
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