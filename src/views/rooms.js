/*
Course: CMSC 495 6381 Current Trends and Projects in Computer Science (2208)
Student: Frimpong Sarfo, 
*/

import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Question14 from '../components/question14'
import './rooms.css'
import { useCookies } from 'react-cookie'
const Rooms = (props) => {
  const [rooms, setRooms] = React.useState({ "diamond": 0, "gold": 0, "silver": 0, "copper": 0 })
  const [cookies, setCookies, removeCookies] = useCookies(['cart'])
  React.useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://hotels.sbcodeproject.com/available_rooms', {
        method: 'GET',
        // No need to set Content-Type for GET requests, and Access-Control-Allow-Origin is handled by the server.
      })
        .then(response => response.json())
        .then(data => setRooms({ "diamond": data[0].available_rooms, "gold": data[1].available_rooms, "silver": data[2].available_rooms, "copper": data[3].available_rooms }))
        .catch((error) => console.error('Error:', error));
    }
    fetchData()
  }, [])

  return (
    <div className="rooms-container">
      <Helmet>
        <title>Rooms - Thick Fancy Echidna</title>
        <meta property="og:title" content="Rooms - Thick Fancy Echidna" />
      </Helmet>
      <div className="rooms-header">
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
      <div className="rooms-hero">
        <div className="heroContainer rooms-hero1">
          <div className="rooms-container01">
            <h1 className="rooms-hero-heading heading1">Make A Reservation</h1>
            <span className="rooms-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Find the perfect room for your next trip</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="rooms-btn-group"></div>
          </div>
        </div>
      </div>
      <div className="rooms-blog">
        <div className="rooms-room-1-slot">
          <div className="rooms-blog-post-card">
            <img
              alt="image"
              src="/5f5f7960-fd54-4e1f-ac13-1113a4930f90-1500w.jpg"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="rooms-image"
            />
            <div className="rooms-container02">
              <div className="rooms-container03">
                <span className="rooms-room-1-price">----</span>

              </div>
              <h1 className="rooms-room-1-title">The Oceanfront Retreat</h1>
              <span className="rooms-room-1-description">
                Offering unparalleled luxury, this stunning suite boasts
                panoramic views of the sparkling ocean from its private balcony,
                a king-sized canopy bed adorned with plush pillows, a spacious
                living area with a cozy fireplace, and a deluxe bathroom
                featuring a whirlpool tub.
              </span>
              <div className="rooms-container04">
                <div className="rooms-room-1-rank">
                  <img
                    alt="profile"
                    src="/249c89d8-bc27-499a-9eee-75ac6c88d9af-200h.jpg"
                    className="rooms-image1"
                  />
                  <span className="rooms-text14">Diamond Tier : {rooms.diamond}</span>
                </div>
                <button
                  type="button"
                  className="rooms-book-r1 button"
                  onClick={async () => {
                    if (rooms.diamond > 0) {
                      setCookies('cart', 1, { path: '/' })
                    } else {
                      alert("No rooms available")
                    }
                  }

                  }
                >

                  <span>
                    <span>Book</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="rooms-room-2-slot">
          <div className="rooms-blog-post-card1">
            <img
              alt="image"
              src="/868d4806-c2d1-44d0-9b46-6e6d8aa8c87c-1500w.jpg"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="rooms-image2"
            />
            <div className="rooms-container05">
              <div className="rooms-container06">
                <span className="rooms-room-2-price">----</span>
                <span className="rooms-room-2-availability">*</span>
              </div>
              <h1 className="rooms-room-2-title">The Beachside Breeze</h1>
              <span className="rooms-room-2-description">
                Designed for comfort and style, this breezy room features a
                queen-sized bed with crisp linens, a quaint seating area with
                rattan chairs, a mini-fridge stocked with cold drinks, and a
                modern bathroom with a walk-in shower.
              </span>
              <div className="rooms-container07">
                <div className="rooms-room-2-rank">
                  <img
                    alt="profile"
                    src="/6e56e05d-0ef8-45c8-855d-a4528686e96d-200h.jpg"
                    className="rooms-image3"
                  />
                  <span className="rooms-text18">Gold Tier : {rooms.gold}</span>
                </div>
                <button type="button" className="button" onClick={async () => {


                  if (rooms.gold > 0) {
                    setCookies('cart', 2, { path: '/' })
                  } else {
                    alert("No rooms available")
                  }
                }

                }>
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="rooms-room-3-slot">
          <img
            alt="image"
            src="/f65a5cf6-9a4b-4676-9ab4-79656476b06b-1500w.jpg"
            image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="rooms-image4"
          />
          <div className="rooms-container08">
            <div className="rooms-container09">
              <span className="rooms-room-3-price">----</span>
              <span className="rooms-room-3-availability">*</span>
            </div>
            <h1 className="rooms-room-3-title">The Coastal Escape</h1>
            <span className="rooms-room-3-description">
              Embracing a relaxed vibe, this cozy room welcomes guests with a
              double bed dressed in coastal-inspired decor, a small table and
              chairs for enjoying beachside snacks, a convenient mini-fridge for
              storing refreshments, and a tidy bathroom with a shower.
            </span>
            <div className="rooms-container10">
              <div className="rooms-room-3-rank">
                <img
                  alt="profile"
                  src="/19017ccf-047b-4879-8aee-587000275db3-200h.jpg"
                  className="rooms-image5"
                />
                <span className="rooms-text19">Silver Tier : {rooms.silver}</span>
              </div>
              <button type="button" className="button" onClick={async () => {


                if (rooms.silver > 0) {
                  setCookies('cart', 3, { path: '/' })
                } else {
                  alert("No rooms available")
                }
              }

              }>
                <span>
                  <span>Book</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="rooms-divider"></div>
        <div className="rooms-room-4-slot">
          <img
            alt="image"
            src="/c515282f-6965-447a-8350-2689a347d7ac-1500w.jpg"
            image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="rooms-image6"
          />
          <div className="rooms-container11">
            <div className="rooms-container12">
              <span className="rooms-room-4-price">----</span>
              <span className="rooms-room-4-availability">*</span>
            </div>
            <h1 className="rooms-room-4-title">The Sand Dollar Haven</h1>
            <span className="rooms-room-4-description">
              Offering value without sacrificing comfort, this simple room
              provides guests with twin beds for a restful night&apos;s sleep, a
              basic seating area for unwinding after a day of sun and surf, a
              compact refrigerator for keeping drinks cool, and a functional
              bathroom with a shower.
            </span>
            <div className="rooms-container13">
              <div className="rooms-room-4-rank">
                <img
                  alt="profile"
                  src="/8f5635cb-fc7b-4358-ae12-780ad2559c41-200h.jpg"
                  className="rooms-image7"
                />
                <span className="rooms-text23">Copper Tier : {rooms.copper}</span>
              </div>
              <button type="button" className="button" onClick={async () => {
                if (rooms.copper > 0) {
                  setCookies('cart', 4, { path: '/' })
                } else {
                  alert("No rooms available")
                }
              }
              }>
                <span>
                  <span>Book</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="rooms-faq">
        <div className="faqContainer">
          <div className="rooms-faq1">
            <div className="rooms-container14">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="rooms-text30 heading2">Common questions</h2>
              <span className="rooms-text31 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="rooms-container15">
              <Question14
                answer="We offer a variety of room plans suitable for different types of travelers, including single rooms, double rooms, suites, and family rooms."
                question="What types of room plans are available?"
              ></Question14>
              <Question14
                answer="Yes, you can make changes to your reservation based on availability. Please contact our customer service for assistance."
                question="Can I make changes to my reservation?"
              ></Question14>
              <Question14
                answer="We accept major credit cards and provide secure payment options for your convenience."
                question="What payment options are accepted?"
              ></Question14>
              <Question14
                answer="Unfortunately, pets are not allowed in the rooms to ensure a comfortable stay for all guests."
                question="Are pets allowed in the rooms?"
              ></Question14>
              <Question14
                answer="Some room plans include complimentary breakfast, while others may offer it as an add-on option. Please check the details of your selected plan for more information."
                question="Is breakfast included in the room plans?"
              ></Question14>
            </div>
          </div>
        </div>
      </div>
      <footer className="footerContainer rooms-footer">
        <div className="rooms-container16">
          <span className="logo">MOTELLY</span>
          <nav className="rooms-nav1"></nav>
        </div>
        <div className="rooms-separator"></div>
        <div className="rooms-container17">
          <span className="bodySmall rooms-text34">
            © 2023 myCompany, All Rights Reserved.
          </span>
          <div className="rooms-icon-group1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="rooms-icon10 socialIcons"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="rooms-icon12 socialIcons"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="rooms-icon14 socialIcons"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Rooms