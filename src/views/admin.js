import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card7'
import Question1 from '../components/question1'
import './admin.css'
import { useCookies } from 'react-cookie'

const Admin = (props) => {
    const [cookies, setCookies, removeCookies] = useCookies(['cart'])
    const [reservations, setReservations] = React.useState([])

   React.useEffect( () => {

        fetch('http://cmsc495-hotel-api-env.eba-i5qpecfq.us-east-2.elasticbeanstalk.com/all_reservations')
            .then(response => response.json())
            .then(data => {
                setReservations(data)
            })
    },[])
    return (
        <div className="home-container">
            <Helmet>
                <title>Thick Fancy Echidna</title>
                <meta property="og:title" content="Thick Fancy Echidna" />
            </Helmet>
            <div className="home-header">
                <header
                    data-thq="thq-navbar"
                    className="navbarContainer home-navbar-interactive"
                >
                    <span className="logo">MOTELLY</span>
                    <div data-thq="thq-navbar-nav" className="home-desktop-menu">
                        <nav className="home-links">
                        </nav>
                        {cookies.user === undefined && <div className="home-buttons">
                            <Link to="/sign-up-page1" className="home-login buttonFlat">
                                Login
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

                            </nav>

                        </div>

                    </div>
                </header>
            </div>


            <div className="home-banner">

                <div className="home-features">
                    <div className="featuresContainer">
                        <div className="home-features1">

                            <div className="home-container3">
                                {
                                    reservations.map((res, index) => {
                                        return <FeatureCard key={index}
                                            user_full_name={res.user_full_name}
                                            user_email={res.user_email}
                                            ref_number={res.ref_number}
                                            status={res.status}
                                            room_price={res.room_price}
                                        ></FeatureCard>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-footer">
                <footer className="footerContainer home-footer1">
                    <div className="home-container6">
                        <div className="home-container7">
                            <span className="logo">MOTELLY</span>
                            <nav className="home-nav1"></nav>
                        </div>
                    </div>
                    <div className="home-separator"></div>
                    <div className="home-container8">
                        <span className="bodySmall home-text38">
                            © 2023 myCompany, All Rights Reserved.
                        </span>
                        <div className="home-icon-group1">
                            <svg
                                viewBox="0 0 950.8571428571428 1024"
                                className="home-icon10 socialIcons"
                            >
                                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                            </svg>
                            <svg
                                viewBox="0 0 877.7142857142857 1024"
                                className="home-icon12 socialIcons"
                            >
                                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                            </svg>
                            <svg
                                viewBox="0 0 602.2582857142856 1024"
                                className="home-icon14 socialIcons"
                            >
                                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                            </svg>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Admin