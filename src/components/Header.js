import React, { Component } from 'react';
import './services/API';
import './../App.css'
import API from './services/API';


export default class Main extends Component {

    /*

    getFavorites = (e) => {
        e.preventDefault();
        console.log("favorito");
    }
    */

    getSubmit = (e) => {
        
        e.preventDefault();
        
        API.getByUsername(this.refs.username.value).then(function(response){
            this.props.updateUser(response.data);
        }.bind(this));

        API.getReposByUsername(this.refs.username.value).then(function(response) {
            this.props.updateRepos(response.data);
        }.bind(this));
    }

    render(){
        return(
            <header>
                <div>
                    <h1>GitHub Viewer</h1>
                </div>
                
                <div></div>

                <div>
                    <form onSubmit={this.getSubmit}> 
                        <input type="text" ref="username" placeholder="Ex: maiconspa"/>
                        <button type="submit" id="btnSearch">B</button> 
                    </form>
                </div>
            </header>
        );
    }
}