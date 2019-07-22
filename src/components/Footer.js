import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; 2019 Osho World Adventure group of companies - <a href="https://hotelbooknepal.com" target="_blank">HotelBookNepal</a> | <a href="https://domhimalayahotel.com" target="_blank">DomHimalayaHotel</a> | <a href="https://trekkingtopnepal.com" target="_blank">TrekkingTopNepal</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
