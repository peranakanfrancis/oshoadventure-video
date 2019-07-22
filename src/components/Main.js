import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import bg01 from '../images/bg01.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="ota" className={`${this.props.article === 'ota' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Online Travel Agents (OTA)</h2>
          <span className="image main"><img src={bg01} alt="" /></span>
          <h3>Empower agents and increase efficiency with a ready-built, web-based booking platform that combines accommodations, flights, car rentals, and activities.</h3>
          <p><a href="https://hotelbooknepal.com" target="_blank">HotelBookNepal</a> is a leading Nepal's online travel company that provides a wide range of travel needs in one platform, enabling customers to create moments together with their loved ones. Traveloka offers flights, hotels, attractions & activities, tours, transports, airport transports, and buses.</p>
          <p>The company has established partnerships with more than 50 domestic and international airlines, serving more than 100,000 routes worldwide. It also has the largest direct accommodation inventory, varying from hotels, apartments, guest houses, homestays, to villas and resorts in South Asia. <a href="https://hotelbooknepal.com" target="_blank">HotelBookNepal</a> provides more than 10 payment options for customers, with 24/7 assistance from local customer service in their native languages.</p>
          <p><a href="#" target="_blank">Join us as partner</a> and start selling on our platform today.</p>
          {close}
        </article>

        <article id="tours" className={`${this.props.article === 'tours' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Nepal Tours & Treks</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <h3>CREATE YOUR CUSTOM-MADE TRIP TO NEPAL</h3>
          <p>The experienced and friendly travel experts at <a href="https://trekkingtopnepal.com" target="_blank">TrekkingTopNepal</a> were born in Nepal and speak many different language fluently.  Thoroughly knowledgeable about Nepal’s culture, geography, and history, <a href="https://trekkingtopnepal.com" target="_blank">TrekkingTopNepal</a> can meet all your special requirement  for a once-in-a-lifetime trip, a popular Buddhist and Hindu pilgrimage tour, or organizing a special group retreat in yoga and meditation. They will personally guide your Himalayan treks, walks, and hikes, designed to meet your fitness and skill levels.</p>
          <p>If you prefer a customized yoga and meditation journey in the Land of Buddha, <a href="https://trekkingtopnepal.com" target="_blank">TrekkingTopNepal</a> will make it happen for you at the best possible rate. Facilitating trips for people from all over the world, <a href="https://trekkingtopnepal.com" target="_blank">TrekkingTopNepal</a> staff members are long-time meditators and can introduce you to life-changing meditation camps all over Nepal.</p>
          {close}
        </article>

        <article id="hotel" className={`${this.props.article === 'hotel' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Boutique Hotel in Kathmandu</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <h3>Stay in the quiet serenity within the city center</h3>
          <p>Gracious hospitality awaits at <a href="https://domhimalayahotel.com" target="_blank">Dom Himalaya Hotel</a>, a deluxe city hotel renowned for superb comfort, convenience and care. The hotel sits in a tranquil location at Chettrapati, a five-minute walk from the lively Thamel shopping, dining and entertainment district and moments from Swayambhunath Monkey Temple, Kapan Monastery and Bhaktapur Durbar Square.</p>
          <p><a href="https://domhimalayahotel.com" target="_blank">Dom Himalaya Hotel</a> features 36 rooms, including tastefully appointed guest rooms, suites and Nepali styled cabanas that offers non-smoking rooms exclusively. Leisure pleasures include a guests-only rooftop courtyard garden, sundeck, and a healing center outfitted with the traditional Tibetan Singing Bowls equipment and SPA.</p>
          <p>Discover and explore the urban oasis that feels worlds apart from the bustle of Kathmandu valley, yet just minutes from everything. Your experience at this 3-star boutique hotel in Nepal will be beyond compare.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">How It Works</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <h3>We are Pioneer in Nepal Toursim</h3>
          <p>Osho World Adventure offers a variety of products geared to suit you and your client’s needs including hotels, tours, activities, transfers and car rentals. With our travel professionals, account managers, customer service, diversified products with dynamic pricing, and variety of ways to connect to our platform, you’ll see how Osho World Adventure is quickly becoming a household name in the travel industry. Request your login today to see why over 20,000 travel trade partners continue to travel with us.</p>
          <h4>HOTELS</h4>
          <p>With our dynamic pricing model, you can enjoy the best rates with last minute availability virtually everywhere in the world. And- with over 5.5 million room nights sold, you will also benefit from our aggregated buying power as well as a variety of currencies.</p>
          <h4>TOURS</h4>
          <p>With selected tour operators and their products listed with us, we makes it easy to find, compare and book the most unique, authentic travel experiences that you likely won't find at your corner travel agency. Get off-the-beaten-track and travel with the operators who know that trying to be everything to everyone doesn't work.</p>
          <h4>TRANSFER</h4>
          <p>Soon it will be available on our API - this product is quickly becoming a must-have for any travel trade professional, and with our pricing model and aggregated buying power- you will be able to offer it to your clients for a seamless travel experience at the lowest cost.</p>
          <h4>RENTAL</h4>
          <p>Make the most of your trip using our car/bike rental product. With over 100 locations worldwide and over 10 global and local supplier partners, we can help you find the best pricing worldwide.</p>
          <h4>White Label Solution</h4>
          <p>Alternatively, for B2B distributions, white label solutions provide you with a simple frame to display Osho World Adventure products. We may not have invented customer service- but we’ve perfected it, and provide it to our clients at no additional cost 24/7 in 6 different languages (English, Hindi, Nepali, Malay, Chinese, Russian). So you can rest assured that the products you buy from us will come with the very best support whenever you need.</p>
          <h3>Want to sell to us?</h3>
          <p>Send us a message, and one of our account managers will determine if you’re eligible to distribute your product with us.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="https://formspree.io/francis.tch@gmail.com" id="my-form">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
            <p id="my-form-status"></p>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-google"><span className="label">Google</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
