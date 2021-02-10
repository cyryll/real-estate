import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
export const CardContainer = styled.div `
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
`
export const CardWrapper = styled.div `
    position: relative;
    margin: 50px 0 45px;
`
export const CardItems = styled.ul `
    margin-bottom: 24px;

    @media only screen and (min-width : 1024px){
        display: flex;
    }
`
export const CardsItem = styled.li `
    display: flex;
    flex: 1;
    margin: 0 1rem;
    border-radius: 10px;

    @media only screen and(max-width : 1024px){
        margin-bottom: 2rem;
    }
`
export const CardItemLink = styled(Link)
`
    display: flex;
    flex-flow: column;
    width: 100%;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
`
export const CardItemPicWrap = styled.figure `
    position: relative;
    width: 100%;
    padding-top: 67%;
    overflow: hidden;

    &::after {
        content: attr(data-category);
        position: absolute;
        bottom: 0;
        margin-left: 10px;
        padding: 6px 8px;
        max-width: calc((100%) - 60px);
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        background-color: #1f98f4;
        box-sizing: border-box;
    }
`
export const CardItemImg = styled.img `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;

    &:hover {
        transform: scale(1.1);
    }
`
export const CardItemInfo = styled.div `
    padding: 20px 30px 30px;
`

export const CardItemText = styled.h5 `
    color: #000d1a;
    font-size: 18px;
    line-height: 24px;
`