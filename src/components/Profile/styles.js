import styled from 'styled-components';

export const ProfileArea = styled.div`
    width: 268px;
    height: 88vh;
    padding: 22px 10px 0 10px;
    margin-right: 100px;
    text-align: center;
    background-color: ${props => props.theme.theme.bgPrimary};
    color: ${props => props.theme.theme.txtPrimary};
    border-radius: 10px;
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.2);
    transition: all .3s;

    @media only screen and (width: 1366px) and (height: 1024) {    
        height: 90vh;
    }

    @media only screen and (max-width: 1070px) {    
        margin-right: 50px;
        text-align: center;
        text-align: -webkit-center;
    }

    @media only screen and (max-width: 950px) {
        width: 94%;
        margin: 0;
        text-align: center;
        text-align: -webkit-center;
    }

    @media only screen and (max-width: 600px) {
        height: 82vh;
    }
`;

export const Name = styled.h1`
    margin: 0;
`;

export const Username = styled.h3`
    color: ${props => props.theme.theme.txtSecondary};
    margin-top: 0;
`;

export const Img = styled.img`
    left: 0;
    border-radius: 50%;
    width: 250px;
    transition: all .3s;

    @media only screen and (max-width: 600px) {
        width: 200px;
    }
`;

export const Text = styled.p`
    max-width: 250px;

    @media only screen and (max-width: 600px) {
        width: 200px;
    }
`;

export const Location = styled.div`
    display: flex;
    justify-content: center;

    p{
        color: ${props => props.theme.theme.txtPrimary};
        margin: -2px 0 0 10px;
    }
`;