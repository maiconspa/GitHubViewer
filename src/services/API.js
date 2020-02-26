import axios from 'axios';

var API = {
    getUserInfo: function (username){
        return axios.get('https://api.github.com/users/' +username);
    },

    getReposInfo: function (username) {
        return axios.get('https://api.github.com/users/' +username +'/repos')
    }
};

export default API;