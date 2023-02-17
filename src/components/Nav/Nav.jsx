import SearchBar from '../SearchBar/SearchBar.jsx'
import styled from'styled-components'
import {Link} from 'react-router-dom'

const SpanTab = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: right;
    background-color: rgb(32,23,75);
    margin: 20px;
`

const BtnExtra = styled.button`
   border-color: darkgrey;
   background-color: rgb(93,207,38);
   border-radius: 2px;
   color: white;
   font-family: Arial, sans-serif;
   font-weight: 750;
   padding-top: 10px;
   padding-bottom: 10px;
   padding-left: 20px;
   padding-right: 20px;
   margin: 10px;
`

export default function Nav(props){
    return <SpanTab>
        <Link to='/favorites'>
            <BtnExtra>FAVORITOS</BtnExtra>
        </Link>
        <Link to='/about'>
            <BtnExtra>ABOUT</BtnExtra>
        </Link>
        <Link to='/home'>
            <BtnExtra>HOME</BtnExtra>
        </Link>
        <SearchBar onSearch={props.onSearch}></SearchBar>
        <Link to='/'>
            <BtnExtra onClick={props.logout}>LOG OUT</BtnExtra>
        </Link>
    </SpanTab>
}