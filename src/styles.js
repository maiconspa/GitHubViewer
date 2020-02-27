import styled from 'styled-components';


export const Navbar = styled.form`
	position: fixed;
    top: 0;
    width: 100vw;
    padding: 16px;
    height: 32px;
    background-color: #24292E;
    color: #fff;
    align-content: center;
	display: flex;
	
	svg {
		fill: #fff;
    }
    
    input {
        width: 250px;
        height: 28px;
        padding-left: 8px;
        margin: 0 0 0 16px;
        background-color: #3F4448;
        color: #6E7275;
        border: none;
        border-radius: 5px 0 0 5px;
        transition: all .4s;
    }

    input:focus{
        width: 400px;
        background-color: #fff;
        color: #000;
    }

    button {
        height: 30px;
        width: 30px;
        margin-left: 0;
        background-color: #3F4448;
        border: none;
        border-radius: 0 5px 5px 0;
        color: #fff;
        transition: all .3s;
    }

    button:hover {
        background-color: #6E7275;
    }

	@media only screen and (max-width: 950px){
		justify-content: center;
		display: block;
		height: 66px;
		padding: 5px 0 10px 0;
        text-align: center;

        div {
            width: 100%;
        }

        input {
            margin: 0;
            align-self: center;
        }
    }
    
    @media only screen and (max-width: 600px) {
        input{
            width: 200px;
        }

        form input:focus{
            width: 300px;
        }
    }
`;

// Area com informações de perfil e repositórios
export const ProfileAndRepos = styled.div`
    width: 100vw;
    height: 110vh;
    display: flex;
    margin: 0;
    padding: 80px 0 20px 64px;
    background-color: #f1f2f6;

    @media only screen and (max-width: 950px){
        width: auto;
        display: block;
        margin: 81px 0 0 0;
        padding: 20px;
        justify-content: center;
    }
`;

// Area para conter todos os repositorios
export const ContainerRepos = styled.div`
    max-width: auto;
    padding: 0 100px 0 10px;

    @media only screen and (min-width: 951px) {
        padding-right: 50px;
        overflow-y: scroll;
        height: 90vh;
    }

    @media only screen and (max-width: 950px){
        max-width: auto;
        padding: 0;
    }

    @media only screen and (max-width: 600px) {
        max-width: auto;
        padding: 0;
        text-align: center;

        h1 {
            text-align: start;
            margin-bottom: 0px;
            padding-left: 15px;
        }
    }
`;

export const ThemeSwitcher = styled.button`
    width: 30px;
	height: 30px;
	position: fixed;
	right: 10px;
    bottom: 10px;
    border-radius: 50%;
    border: 1px solid #000;
`;