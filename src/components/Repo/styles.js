import styled from 'styled-components';

export const RepoCard = styled.div`
    display: inline-grid;
    min-width: 250px;
    width: auto;
    height: 110px;
    padding: 10px;
    margin: 10px 10px 10px 0;
    background-color: ${props => props.theme.theme.bgPrimary};
    border: none;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: all .3s;

    :hover, :focus {
        box-shadow: 0 6px 14px 0 rgba(0,0,0,0.3);
    }

    a {
        padding: 0 0 10px 0;
        text-decoration: none;
        color: ${props => props.theme.theme.txtPrimary};
        font-size: 20px;
        transition: all .3s;
    }

    p {
        margin: 0 0 10px 0;
        color: ${props => props.theme.theme.txtSecondary};
        font-size: 13px;
        max-width: 240px;
        word-wrap: break-word;
    }

    @media only screen and (max-width: 950px) {
        width: 45%;
        margin: 1% 1% 1% 0;
        height: 110px;
    }

    @media only screen and (max-width: 600px) {
        width: 90%;
        margin: 10px 0 0 0;
        height: 110px;
        text-align: start;
    }
`;