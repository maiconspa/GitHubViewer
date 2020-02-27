// Components
import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Profile from './components/Profile/Profile';
import Repo from './components/Repo/Repo';

// SVG
import GitHubLogo from './assets/GitHub.svg';

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
		// Prevenindo reload da página
		e.preventDefault();

		// Capturando o username digitado:
		const user = document.getElementById('searchBox').value;

		// Capturando dados do usuário:
		axios.get(this.state.urlGitHub +'/' +user ).then(
			({data}) => this.setState({user: data})
		);

		// Capturando repositórios:
		axios.get(this.state.urlGitHub +'/' +user +'/repos').then(
			({data}) => this.setState({repos: data})
		);
	}

	render(){
		const user = this.state.user;
		const repos = this.state.repos;

		return (
			<div className="App">
				
				<div id="searchArea">
					<form onSubmit={this.getUser}>
						<div>
							<img src={GitHubLogo} alt=""/>
						</div>
						<div>
							<input id="searchBox" placeholder="Ex: maiconspa" type="text" required />
							<button type="submit">
								<FontAwesomeIcon icon={faSearch} />
							</button>
						</div>
					</form>
				</div>

				<div id="infos">
					{ user.length !== 0 ? <Profile user={user} />  : null}
					<div id="reposArea">
						{ user.length !== 0 ? <h1>Repositories</h1>  : null}
						{ repos.map( repo => <Repo key={repo.name} repo={repo}/>) }
					</div>
				</div>
			</div>
		);
	}
}