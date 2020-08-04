import React, { Component } from 'react';
import Cardlist from '../Components/Cardlist.js';
import SearchBox from '../Components/SearchBox.js';
import ScrollBox from '../Components/Scrollbox.js';
import ErrorBoundary from '../Components/ErrorBoundary.js';
import './App.css'





class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            robots: [],
            searchfield:'',
        };
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{ return response.json() })
        .then((users)=>{ this.setState({robots : users}) });


    }

    onSearchChange = (event) =>
    {
        this.setState({searchfield:event.target.value});
        


    }


    render(){
        
        const {robots,searchfield} = this.state;


        const filteredRobots = robots.filter((robot) => {

            return robot.name.toLowerCase().includes(searchfield.toLowerCase());

        });

        if (!robots.length)
        {
            return(<h1>Loading</h1>);
        }

        else
        {


    return(
        <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>

        <ScrollBox>
            <ErrorBoundary>
        <Cardlist robots={filteredRobots}/>
                </ErrorBoundary>
            </ScrollBox>
        </div>



    );
        }
             }
}

export default App;