import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './cart.css'

import { useCookies } from 'react-cookie'

const Cart = (props) => {

  const [cookies, setCookies, removeCookies] = useCookies(['cart'])
  const roomprice = cookies.cart === 1 ? 450 : cookies.cart === 2 ? 400 : cookies.cart === 3 ? 350 : cookies.cart === 4 ? 300 : 0
  const tax = roomprice * 0.1
  const total = roomprice + tax
  const roomtype = ["", "The Oceanfront Retreat / Diamond", "The Beachside Breeze / Gold", "The Coastl Escape / Silver", "The Sand Dollar Haven / Bronze"]

  return (
    <div className="cart-container">
      <Helmet>
        <title>Cart - Thick Fancy Echidna</title>
        <meta property="og:title" content="Cart - Thick Fancy Echidna" />
      </Helmet>
      <div className="cart-header">
      <header
          data-thq="thq-navbar"
          className="navbarContainer home-navbar-interactive"
        >
          <span className="logo">MOTELLY</span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <Link to="/rooms" className="home-room-link bodySmall">
                Rooms
              </Link>
              <Link to="/cart" className="home-cart-link bodySmall">
                Cart {cookies.cart && <div style={{ width: 10, height: 10, borderRadius: 5, marginLeft: 10, background: "red" }}></div>}
              </Link>
            </nav>
            {cookies.user === undefined && <div className="home-buttons">
              <Link to="/sign-up-page1" className="home-login buttonFlat">
                Login
              </Link>
              <Link to="/sign-up" className="home-register buttonFilled">
                Register
              </Link>
            </div>}
            {cookies.user !== undefined && <div className="home-buttons">
              <button className="home-login buttonFlat" value={"Logout"} onClick={() => {
                removeCookies('user')
                props.history.push('/')
              }}>Logout</button>
            </div>
            }
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu" onClick={() => {
            const mobileMenu = document.querySelector('.home-mobile-menu1')
            mobileMenu.style.display = 'block'


          }}>
            <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="home-mobile-menu1 mobileMenu"
          >
            <div className="home-nav">
              <div className="home-top">
                <span className="logo">MOTELLY</span>
                <div data-thq="thq-close-menu" className="home-close-menu" onClick={() => {
                  const mobileMenu = document.querySelector('.home-mobile-menu1')
                  mobileMenu.style.display = 'none'
                }}>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
              <Link to="/" className="home-room-link bodySmall">
                  Home
                </Link>
                <Link to="/rooms" className="home-room-link bodySmall">
                  Rooms
                </Link>
                <Link to="/cart" className="home-cart-link bodySmall">
                  Cart {cookies.cart && <div style={{ width: 10, height: 10, borderRadius: 5, marginLeft: 10, background: "red" }}></div>}
                </Link>
                <Link to="/sign-up-page1" className="home-cart-link bodySmall">
                  Login {cookies.user && <div style={{ width: 10, height: 10, borderRadius: 5, marginLeft: 10, background: "red" }}></div>}
                </Link>
                <Link to="/sign-up" className="home-cart-link bodySmall">
                  Register {cookies.user && <div style={{ width: 10, height: 10, borderRadius: 5, marginLeft: 10, background: "red" }}></div>}
                </Link>

              </nav>
   
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>

      <div className="cart-gallery-card">

        <form className="cart-form" method='GET' action='/reciept'>
          <div className="cart-mac-book-pro141">
            <div className="cart-payment-details">
              <span className="cart-payment-title">
                Let’s Make        Payment
              </span>




              <div className="cart-card-holders-input">
                <label for="card_number">Card Number</label>
                <input required
                  id='card_number'
                  type="number"
                  placeholder="placeholder"
                  className="cart-card-number1 input"
                />
              </div>
              <div className="cart-card-holders-input">
                <label for="card_name">Card Holder's Name</label>
                <input required
                  id='card_name'
                  type="text"
                  placeholder="card holder's name"
                  className="cart-card-name input"
                />

              </div>

              <div className="cart-card-holders-input">
                <label for="email">Email</label>
                <input required
                  id='email'
                  type="email"
                  placeholder="email address"
                  className="cart-card-name input"
                />
              </div>


              <div className="cart-card-holders-input">
                <label for="cvc">CVC</label>
                <input required
                  id='cvc'
                  type="number"
                  placeholder="placeholder"
                  className="cart-cvc1 input"
                />

              </div>
              <div className="cart-card-holders-input">
                <button className="cart-pay-button button" onClick={() => {
                  const form = document.querySelector('.cart-form')
                  form.addEventListener('submit', (e) => {
                    e.preventDefault()
                    const room_type = cookies.cart
                    const card_number = document.getElementById('card_number').value
                    const card_name = document.getElementById('card_name').value
                    const expiry = document.getElementById('expiry_date').value
                    const cvc = document.getElementById('cvc').value
                    const email = document.getElementById('email').value
                    if (card_number && card_name && expiry && cvc && email) {
                      const checkout_data = {
                        room_id: room_type,
                        card_number: card_number,
                        card_holder_name: card_name,
                        expiration_date: expiry,
                        cvc: cvc,
                        email: email
                      };
                      fetch('https://hotels.sbcodeproject.com/checkout', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(checkout_data)
                      }).then(res => res.json()).then(data => {
                        console.log(data)
                        if (data.message === 'Checkout successful') {
                          removeCookies("cart", { path: "/" })
                          window.location.href = '/reciept?ref_number=' + data.ref_number;
                        } else {
                          alert(data.message + ' Please try again')
                        }
                      });

                    } else {
                      alert('Please fill all the fields')
                    }
                  });
                }}>
                  Pay
                </button>
              </div>


              <div className="cart-card-holders-input">
                <span>Do you have a reservation already?</span>
                <Link to="/reciept" className="cart-link-to-receipt-page">
                  <span>Reservation</span>
                  <br></br>
                </Link>
              </div>
            </div>
            <div className="cart-circle-designs">
              <div className="cart-circle1">
                <div className="cart-ellipse-guide">
                  <img
                    alt="Ellipse1329"
                    src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4c578900-d574-4b66-b533-2538ceec9d31/3a24e950-75d9-422e-aff4-d808b07f0a8f?org_if_sml=13636&amp;force_format=original"
                    className="cart-ellipse1"
                  />
                  <img
                    alt="Ellipse2330"
                    src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4c578900-d574-4b66-b533-2538ceec9d31/38114660-d05a-4395-987e-caedd3e0ad25?org_if_sml=14048&amp;force_format=original"
                    className="cart-ellipse2"
                  />     <div className="cart-room-price1">
                  <div className='reservation-info'>
                    <span className="cart-stating-label">You’re paying,</span>
                  </div>
                  <div className='reservation-info'>
                    <span className="cart-total-price2">
                      $ {roomprice}
                      <span

                      />
                    </span>
                  </div>
                </div>
           

                </div>
              </div>
              <div className="cart-circle2">


                <div className="cart-room">
                  <span>{roomtype[cookies.cart]}</span>
                </div>
                <div className='reservation-info'>
                  <span className="cart-tax-label">Tax&emsp; </span>

                  <span className="cart-tax-amount">${tax}</span>
                </div>
                <div className='reservation-info'>
                  <span className="cart-totallabel">Total &emsp;</span>

                  <span className="cart-total-price1"> ${total}</span>
                </div>

                <div className="cart-clear-cart-button">
                  <button type="button" className="cart-clear-button button" onClick={() => removeCookies("cart", { path: "/" })}>
                    <span className="cart-text13">
                      <span>Clear</span>
                      <br></br>
                    </span>
                  </button>
                </div>
              </div>

            </div>


          </div>
        </form>
      </div>
      <div class="cart-image-deco">
        <img
          alt="image"
          src="/external/94601b53-60d5-43cb-a8b6-bd38912f9a45-1500w.jpg"
          className="cart-image"
        />
      </div>
      <footer className="footerContainer cart-footer">
        <div className="cart-container4">
          <span className="logo">MOTELLY</span>
          <nav className="cart-nav1"></nav>
        </div>
        <div className="cart-separator"></div>
        <div className="cart-container5">
          <span className="bodySmall cart-text20">
            © 2023 myCompany, All Rights Reserved.
          </span>
          <div className="cart-icon-group1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="cart-icon10 socialIcons"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cart-icon12 socialIcons"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="cart-icon14 socialIcons"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Cart