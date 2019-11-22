import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {activeTab: 0};
    }

    toggleCategories () {

        if(this.state.activeTab === 0){
            return(

                <Card shadow={5} style={{width: '40vh', height: '80vh', margin: 'auto', background:'url(https://i.ibb.co/n0Npd3X/Burguer-Kawaii-Background.png'}}>
                     <CardTitle style={{color: '#fff', width: '70%', height: '50%', marginTop:'10%', marginBottom: '10%', marginLeft:'15%', marginRight:'15%', background: 'url(https://i.ibb.co/NNwqjPM/burger-kawaii.gif) center / cover'}}> 
                     <span style={{color: '#AAAA32', fontSize: '14px', marginTop:'200%', fontWeight: '600'}}>
                     BURGER-KAWAII
                 </span> 
                 </CardTitle>
                    <CardText style={{marginBottom: '10%'}}>
                        Este es el proyecto aaaaaaaaaaaaaaaaaaaaaaaaaa aa a a sss ssvfdfbzf sadf a fsdf sfsdf fasdfsdf FsdgsdfsDFASD AGREGARGAS AAERGARG    a a aaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aa
                        <CardActions border>
                        <a href='https://github.com/anndy9192/GDL003-Burger-Queen-Front-End' rel="noopener noreferrer" target='_blank'>
                            <Button style={{marginTop:'10%'}} colored > GitHub </Button>
                            </a>
                            <a href='https://paulinamontoya.github.io/burger-kawaii/' rel="noopener noreferrer" target='_blank'>
                            <Button style={{marginTop:'10%'}} colored > web </Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{ color: '#1A285E'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </CardText>
                </Card>
            )
        }   else if(this.state.activeTab === 1) {
            return (<Card shadow={5} style={{width: '40vh', height: '80vh', margin: 'auto', background:'#503291'}}>
            <CardTitle style={{color: '#fff', width: '70%', height: '50%', marginTop:'10%', marginBottom: '10%', marginLeft:'15%', marginRight:'15%', background: 'url(https://i.ibb.co/QNNp1sh/red-social.gif) center / cover'}}> 
            <span style={{color: '#ffd35b', fontSize: '14px', marginTop:'200%', fontWeight: '600'}}>
            GUANA-TACO
        </span> 
        </CardTitle>
           <CardText style={{marginBottom: '10%'}}>
               Este es el proyecto aaaaaaaaaaaaaaaaaaaaaaaaaa aa a a sss ssvfdfbzf sadf a fsdf sfsdf fasdfsdf FsdgsdfsDFASD AGREGARGAS AAERGARG    a a aaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aa
               <CardActions border>
                   <Button style={{marginTop:'10%', color: '#fff'}} > GitHub </Button>
                   <Button style={{marginTop:'10%', color: '#fff'}} > web </Button>
               </CardActions>
               <CardMenu style={{ color: '#1A285E'}}>
                   <IconButton name='share'/>
               </CardMenu>
           </CardText>
       </Card>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{width: '40vh', height: '80vh', margin: 'auto', background:'#49494A'}}>
                     <CardTitle style={{color: '#fff', width: '70%', height: '50%', marginTop:'10%', marginBottom: '10%', marginLeft:'15%', marginRight:'15%', background: 'url(https://i.ibb.co/ChWZWbN/movie-challange.gif) center / cover'}}> 
                     <span style={{color: '#CA3E47', fontSize: '14px', marginTop:'200%', fontWeight: '600'}}>
                     CINEPHILE ODYSSEY
                 </span> 
                 </CardTitle>
                    <CardText style={{marginBottom: '10%'}}>
                        Este es el proyecto aaaaaaaaaaaaaaaaaaaaaaaaaa aa a a sss ssvfdfbzf sadf a fsdf sfsdf fasdfsdf FsdgsdfsDFASD AGREGARGAS AAERGARG    a a aaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aa
                        <CardActions border>
                            <Button style={{color: '#fff', marginTop:'10%'}} colored > GitHub </Button>
                            <Button style={{color: '#fff', marginTop:'10%'}} colored > web </Button>
                        </CardActions>
                        <CardMenu style={{ color: '#1A285E'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </CardText>
                </Card>
            )
        }
    }
    
    render(){
        return(
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState ({ activeTab: tabId })} ripple>
                    <Tab>Burguer Kawaii</Tab>
                    <Tab>Red Social</Tab>
                    <Tab>Movie Challange</Tab>
                </Tabs>

               
                    <Grid className= 'projects- grid'>
                        <Cell col={12}>
                            <div className='content'>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
            </div>
        )
    }
}

export default Projects