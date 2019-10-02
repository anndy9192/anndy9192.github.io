import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Progects extends Component {
    constructor(props){
        super(props)
        this.state = {activeTab: 0};
    }

    toggleCategories () {

        if(this.state.activeTab === 0){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px',background: 'url() center / cover'}}></CardTitle>
                </Card>
            )
        }   else if(this.state.activeTab === 1) {
            return (
                <div><h1> Red Social</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1> Movie Challange</h1></div>
            )
        }
    }
    
    render(){
        return(
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState ({ activeTab: tabId })} ripple>
                    <Tab>DataLovers</Tab>
                    <Tab>Red Social</Tab>
                    <Tab>Movie Challange</Tab>
                </Tabs>

                <section className= 'projects-grid'>
                    <Grid className= 'prjects- grid'>
                        <Cell col={12}>
                            <div className='content'>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
                </section>
            </div>
        )
    }
}

export default Progects