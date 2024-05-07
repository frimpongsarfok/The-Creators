
import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import { useCookies } from 'react-cookie'
import './sign-up.css'

const Login = (props) => {
  const [cookies, setCookies, removeCookies] = useCookies(['cart', 'user'])
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>Sign-Up - Thick Fancy Echidna</title>
        <meta property="og:title" content="Sign-Up - Thick Fancy Echidna" />
      </Helmet>
      <div className="sign-up-header">
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
      <div className="sign-up-banner">
        <div className="sign-up-banner1">

          <div className="sign-up-group5">
            <form id='form'>
              <div className="sign-up-frame51">
                <span className="sign-up-text">
                  <span>Get Started Now</span>
                </span>
              </div>
              <div className="sign-up-frame54">
                <div className="sign-up-frame52">
                  <span className="sign-up-name-input">
                    <span>Email address</span>
                  </span>
                </div>
                <div className="sign-up-group12">
                  <input name="email1"
                    type="email"
                    placeholder="enter email address"
                    className="sign-up-username input"
                  />
                </div>

              </div>
               <div className="sign-up-frame551">
                <div className="sign-up-frame522">
                  <span className="sign-up-password-input">
                    <span>Password</span>
                  </span>
                </div>
                <div className="sign-up-group11">
                  <input name="password1"
                    type="password"
                    placeholder="enter password"
                    className="sign-up-password input"
                  />
                </div>
              </div>
              <div className="sign-up-sign-up-button">
                <button type="button" className="sign-up-signup button" onClick={() => {
                  const form = document.getElementById('form')
                  form.addEventListener('submit', (e) => {
                    e.preventDefault()
                  })
                  const data = new FormData(form)
                  if (data.get('email1') === '' || data.get('password1') === '') {
                    alert('Enter email and password')
                    return
                  } else if (data.get('password1').length < 8) {
                    alert('Password must be at least 8 characters')
                    return
                  } else {
                    fetch('http://cmsc495-hotel-api-env.eba-i5qpecfq.us-east-2.elasticbeanstalk.com/login', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body:JSON.stringify ({
                        email: data.get('email1'),
                        password: data.get('password1')
                      })
                    }).then((res) => {
                      if (res.status === 200) {
                        res.json().then((dat) => {
                          setCookies('user', {email:data.get('email1'),password:data.get('password1')}, { path: '/' })
                          
                        })
                      } else {
                        alert('Invalid email or password')
                      }
                    
                    })
                  }

                }
                }>
                  Signup
                </button>
                <div className="sign-up-sign-in-page-link">
          
            <div className="sign-up-group4">
                  <span className="sign-up-text05">
                    Have an account?
                  </span>
                  <Link to="/sign-up-page1" className="sign-up-link-to-sign-in-page">
              <span className="sign-up-text15"> Sign In</span>
              <br className="sign-up-text16"></br>
       
            </Link>
              </div>
              <div className="sign-up-group4">
                 <label for="loginType" className="sign-up-text05">Check as Admin : </label>
                  <input type="checkbox" id="loginType" name="loginType" value="admin"></input>
              </div>
          </div>
              </div>
             

            </form>
            
          </div>


          <div className="sign-up-container2">
            <img src='/eaaf8151-89e3-401a-84bc-f53ab5ddd004-2000w.jpg' style={{ width: "100%", height: "100%" }}></img>
          </div>
      
 


          
        </div>
      </div>
      <footer className="footerContainer sign-up-footer">
        <div className="sign-up-container3">
          <span className="logo">MOTELLY</span>
        </div>
        <div className="sign-up-separator"></div>
        <div className="sign-up-container4">
          <span className="bodySmall sign-up-text19">
            © 2023 myCompany, All Rights Reserved.
          </span>
          <div className="sign-up-icon-group1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="sign-up-icon10 socialIcons"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="sign-up-icon12 socialIcons"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="sign-up-icon14 socialIcons"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Login
