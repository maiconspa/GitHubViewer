import React, { Component } from 'react';
import axios from 'axios';
import Profile from './components/Profile/Profile';
import Repo from './components/Repo/Repo';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

// SVG
import GitHubLogo from './assets/GitHub.svg';

// Stylization
import { Navbar, ThemeSwitcher, ContainerRepos, ProfileAndRepos } from './styles.js';

// External Functions
import { setTheme } from './utils/setTheme';

export default class App extends Component {
	constructor(){
		super();
		this.state = {
			urlGitHub: 'https://api.github.com/users',
			user: [],
			repos: [],
			themeController: 'light',
			lightColors: ['#fff', '#f1f2f6','#000', '#333'],
			darkColors: ['#24292E', '#000', '#fff', '#333']
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


	// Comportamento do botão de troca de temas:
	changeState = () => {
		if (this.state.themeController === 'light') {
			this.setState({themeController: 'dark'});
			console.log(this.state.themeController);
			setTheme('dark');
		} else {
			this.setState({themeController: 'light'});
			console.log(this.state.themeController);
			setTheme('light');
		}
	}


	/*
	 * Função que verifica o estado, caso esteja preenchido,
	 * exibe as informações de perfil:
	 */
	showProfile = (user) => {
		//const light = this.state.lightColors;
		//const dark = this.state.darkColors;

		if (user.length !== 0) {
			return(
				<Profile user={user} />
			);
		} else {
			return (null);
		}
	}

	/*
	 * Função que verifica o estado, caso esteja preenchido, 
	 * itera as informações de cada repositório, exibindo cards independentes;
	 */
	showRepos = (user, repos) => {
		if (user.length !== 0) {
			return(
				<ContainerRepos> 
					<h1>Repositories</h1>
					{ repos.map( repo => <Repo key={repo.name} repo={repo}/>) }
				</ContainerRepos>
			);
		} else {
			return (null);
		} 
	}

	render(){
		const user = this.state.user;
		const repos = this.state.repos;

		return (
			<div className="App">
				
				<Navbar onSubmit={this.getUser}>
					<div>
						<img src={GitHubLogo} alt=""/>
					</div>
					<div>
						<input id="searchBox" placeholder="Ex: maiconspa" type="text" required />
						<button type="submit">
							<FontAwesomeIcon icon={faSearch} />
						</button>
					</div>
				</Navbar>

				<ThemeSwitcher onClick={this.changeState}>
					<FontAwesomeIcon icon={faPalette} />
				</ThemeSwitcher>

				<ProfileAndRepos>
					{ this.showProfile(user) }
					{ this.showRepos(user, repos) }
				</ProfileAndRepos>
			</div>
		);
	}
}