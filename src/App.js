// Components
import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Repo from './components/Repo/Repo';

// CSS
import './App.css';

export default class App extends Component {
	constructor(){
		super();
		this.state = {
			urlGitHub: "https://api.github.com/users",
			user: [],
			repos: []
		};
	}

	getUser = (e) => {
		const user = e.target.value;
		const { urlGitHub } = this.state;

		axios.get(urlGitHub +'/' +user ).then(
			({data}) => this.setState({user: data})
		);

		axios.get(urlGitHub +'/' +user +'/repos').then(
			({data}) => this.setState({repos: data})
		);
	}

	render(){
		
		return (
			<div className="App">
				<Navbar />
				<div id="searchArea">
					<h1>Busque usuários do GitHub</h1>
					<label>Digite um username para encontrar usuários e repositórios</label>
					<input onChange={this.getUser} id="searchBox" type="text" required />
				</div>
				<div id="infos">
					{ this.state.user.length !== 0 ? <Profile user={this.state.user} />  : null}
					{ this.state.repos.map( repo => <Repo key={repo.name} repo={repo}/>) }
				</div>
			</div>
		);
	}
}