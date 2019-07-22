import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-plane"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Osho World Adventure</h1>
                <p>Nepal's first one-stop solution for travel agents and corporate, gain access to a wide breadth of quality travel products, impressive rates, last-minute availability, and a world-class booking experience.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('ota')}}>OTA</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('tours')}}>Tours</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('hotel')}}>Hotel</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
