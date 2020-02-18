import React, { Component } from 'react';
import './services/GitHubUser';
import './../App.css'

var GitHubUser = require('./services/GitHubUser');


export default class Main extends Component {

    getFavorites = (e) => {
        e.preventDefault();
        console.log("favorito");

    }

    getSubmit = (e) => {
        
        e.preventDefault();
        
        GitHubUser.getByUsername(this.refs.username.value).then(function(response){
            this.props.updateUser(response.data);
        }.bind(this));

        GitHubUser.getReposByUsername(this.refs.username.value).then(function(response){
            this.props.updateRepos(response.repos);
        }.bind(this));
    }

    render(){
        return(
            <header>
                <div>
                    <h1>GitHub Viewer</h1>
                </div>
                
                <div>
                    <form onSubmit={this.getFavorites}>
                        <button type="submit" id="btnFav">Favoritos</button> 
                    </form>
                </div>

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