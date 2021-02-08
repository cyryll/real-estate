import styled from 'styled-components'

export const CardSection = styled.div `
    padding: 4rem;
    background: #fff;
`
export const CardH1 = styled.h1 `
    text-align: center;
    color: black;
`
export const ImageH1 = styled.h1 `
    text-align: center;
    color: #fff;
    z-index:1;
    font-size: 50px;

    @media and screen (max-width : 768px){
        font-size: 40px;
    }
    @media and screen (max-width : 480px){
        font-size: 25px;
    }
`