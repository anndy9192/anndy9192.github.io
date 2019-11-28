import React, { Component } from 'react';
import '../components/projects.css';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';
import CompartirPost from './compartirPost'


class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <Grid className='projects-burger-grid'>
                    <Card shadow={5} style={{ width: '40vh', height: '80vh', margin: 'auto', background:'url(https://i.ibb.co/n0Npd3X/Burguer-Kawaii-Background.png' }}> 
                        <CardTitle className= 'titulo_proyectos' >
                            <span style={{ color: '#AAAA32', fontSize: '140', marginTop: '200%', fontWeight: '600' }}>
                                BURGER-KAWAII
                 </span>
                        </CardTitle>
                        <CardText style={{ marginBottom: '10%' }}>
                            Aplicación para restaurant de hamburguesas con concepto Kawaii, en la que los meseros pueden tomar pedidos usando una tablet y enviar las comandas a cocina en tiempo real para que el cocinero ver los pedidos organizados cronológicamente.
                        <CardActions border>
                                <a href='https://github.com/anndy9192/GDL003-Burger-Queen-Front-End' rel="noopener noreferrer" target='_blank'>
                                    <Button style={{ marginTop: '10%' }} colored > GitHub </Button>
                                </a>
                                <a href='https://paulinamontoya.github.io/burger-kawaii/' rel="noopener noreferrer" target='_blank'>
                                    <Button style={{ marginTop: '10%' }} colored > web </Button>
                                </a>
                            </CardActions>
                            <CardMenu style={{ color: '#1A285E' }}>
                                <CompartirPost Url={'https://paulinamontoya.github.io/burger-kawaii/'} Titulo={'BURGER-KAWAII'} Resumen={'Aplicación para comandas de restaurant'} />
                            </CardMenu>
                        </CardText>
                    </Card>
                </Grid>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <Grid className='projects-guanataco-grid'>
                    <Card shadow={5} style={{ width: '40vh', height: '80vh', margin: 'auto', background: '#503291' }}>
                        <CardTitle style={{ color: '#fff', width: '70%', height: '50%', marginTop: '10%', marginBottom: '10%', marginLeft: '15%', marginRight: '15%', background: 'url(https://i.ibb.co/QNNp1sh/red-social.gif) center / cover' }}>
                            <span style={{ color: '#ffd35b', fontSize: '14px', marginTop: '200%', fontWeight: '600' }}>
                                GUANA-TACO
        </span>
                        </CardTitle>
                        <CardText style={{ marginBottom: '10%' }}>
                            Red social dedicada a los tacos, específicamente un sitio donde puedas publicar recomendaciones y leer las demás recomendaciones de usuarios principalmente de Guadalajara Jalisco.
               <CardActions border>
                                <a href='https://github.com/anndy9192/GDL003-social-network' rel="noopener noreferrer" target='_blank'>
                                    <Button style={{ marginTop: '10%', color: '#fff' }} > GitHub </Button>
                                </a>
                                <a href='https://celinaurzua.github.io/GDL003-social-network/src/' rel="noopener noreferrer" target='_blank'>
                                    <Button style={{ marginTop: '10%', color: '#fff' }} > web </Button>
                                </a>
                            </CardActions>
                            <CardMenu style={{ color: '#1A285E' }}>
                                <CompartirPost Url={'https://anndy9192.github.io/GDL003-social-network/src'} Titulo={'GUANA-TACO'} Resumen={'Red social dedicada a los tacos'} />
                            </CardMenu>
                        </CardText>
                    </Card>
                </Grid>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{ width: '40vh', height: '80vh', margin: 'auto', background: '#49494A' }}>
                    <CardTitle style={{ color: '#fff', width: '70%', height: '50%', marginTop: '10%', marginBottom: '10%', marginLeft: '15%', marginRight: '15%', background: 'url(https://i.ibb.co/ChWZWbN/movie-challange.gif) center / cover' }}>
                        <span style={{ color: '#CA3E47', fontSize: '14px', marginTop: '200%', fontWeight: '600' }}>
                            CINEPHILE ODYSSEY
                 </span>
                    </CardTitle>
                    <CardText style={{ marginBottom: '10%' }}>
                        Debido a la falta de información y acceso a cine de culto, esta web app presenta datos sobre esta categoría de películas. Al igual que sugiere algunos títulos para poder buscar más datos sobre ellas y comenzar a adentrarse en la oferta de cine de culto existente.
                        <CardActions border>
                            <a href='https://github.com/anndy9192/GDL003-movie-challenge' rel="noopener noreferrer" target='_blank'>
                                <Button style={{ marginTop: '10%', color: '#fff' }} > GitHub </Button>
                            </a>
                            <a href='https://nienorloth.github.io/GDL003-movie-challenge/src/' rel="noopener noreferrer" target='_blank'>
                                <Button style={{ marginTop: '10%', color: '#fff' }} > web </Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{ color: '#1A285E' }}>
                            <CompartirPost Url={'https://anndy9192.github.io/GDL003-movie-challenge/src/'} Titulo={'CINEPHILE ODYSSEY'} Resumen={'Web app que presenta datos sobre peliculas de culto'} />
                        </CardMenu>
                    </CardText>
                </Card>
            )
        }
    }

    render() {
        return (
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Burguer Kawaii</Tab>
                    <Tab>Guana-Taco</Tab>
                    <Tab>Cinephile Odyssey</Tab>
                </Tabs>


                <Grid className='projects- grid'>
                    <Cell col={12}>
                        <div className='content'>{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>

        )
    }
}

export default Projects