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
                <h3>Nepal's first one-stop solution for travel agents and corporate, gain access to a wide breadth of quality travel products, impressive rates, last-minute availability, and a world-class booking experience including hotels, tours, activities, transfers and car rentals.</h3>
                <p>With our travel professionals, account managers, customer service, diversified products with dynamic pricing, and variety of ways to connect to our platform, you’ll see how Osho World Adventure is quickly becoming a household name in the travel industry. Request your login today to see why over 20,000 travel trade partners continue to travel with us.</p>
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
