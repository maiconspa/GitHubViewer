import React, { Component } from 'react';
import Header from './components/Header';
import MainUser from './components/MainUser';
import MainRepos from './components/MainRepos';
import './App.css';

export default class App extends Component {
	state = () => {
		return ({
			user: null,
			repos: [],
		});
	}
	updateUser = (user) => {
			this.setState({user: user});
	}

	updateRepos = (repos) => {
			this.setState({repos: repos});
	}
	
	render(){
		return (
			<div className="App">
				<Header updateUser={this.updateUser} updateRepos={this.updateRepos} />
				<MainUser user={this.state.user} />
				<MainRepos repos={this.state.repos} />

			</div>
		);
}
}