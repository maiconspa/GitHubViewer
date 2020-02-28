import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import Profile from './components/Profile/Profile';
import Repo from './components/Repo/Repo';

// Themes and stylization
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import { Navbar, ContainerRepos, ProfileAndRepos } from './styles.js';
import * as themes from './utils/Themes';
import ThemeContext from './utils/Themes/context';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// SVG
import GitHubLogo from './assets/GitHub.svg';

export default class App extends Component {
	constructor(){
		super();
		this.state = {
			urlGitHub: 'https://api.github.com/users',
			user: [],
			repos: [],
			theme: themes.light,
		};
	};

	toggleTheme = () => {
		// Cada vez que o botão for pressionado,
		// altera-se o estado de acordo com o novo tema.
		this.setState({
			theme: this.state.theme === themes.light ? themes.dark : themes.light
		});
	};

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
	};


	/*
	 * Função que verifica o estado, caso esteja preenchido,
	 * exibe as informações de perfil:
	 */
	showProfile = (user) => {
		var content = user.length !== 0 ? <Profile user={user}/> : null;
		return content;
	};

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
	};

	// Renderiza a barra de pesquisa e navegação
	renderNavbar = () => (
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
	);

	render(){
		const user = this.state.user;
		const repos = this.state.repos;

		return (
			<div>
				{this.renderNavbar()}
				
				<ThemeContext.Provider value={this.state}>	
					<ThemeContext.Consumer>
						{theme => (
							<ThemeProvider theme={theme}>
								<ThemeSwitcher toggleTheme={this.toggleTheme} />
								<ProfileAndRepos>
									{ this.showProfile(user) }
									{ this.showRepos(user, repos) }
								</ProfileAndRepos>
							</ThemeProvider>
						)}
					</ThemeContext.Consumer>
				</ThemeContext.Provider>
			</div>
		);
	}
}