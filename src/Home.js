import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { getAuth } from "firebase/auth";
import users from "./database/services/users";
import './assets/img/favicon.png';
import './assets/img/apple-touch-icon.png';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/main.css';
import { useSelector } from 'react-redux';
import heroImg from './assets/img/hero-img.png';
import aboutImg from './assets/img/about.jpg'

export default function Home({ recipes }) {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(recipes);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Foodies - Restaurant</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />

        <script src="./assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="./assets/vendor/aos/aos.js"></script>
        <script src="./assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="./assets/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="./assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="./assets/vendor/php-email-form/validate.js"></script>
        <script src="./assets/js/main.js"></script>
      </Helmet>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Amatic+SC:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

      <body>
        <header id="header" className="header fixed-top d-flex align-items-center">
          <div className="container d-flex align-items-center justify-content-between">

            <a href="/" className="logo d-flex align-items-center me-auto me-lg-0">
              <h1>Foodies<span>.</span></h1>
            </a>

            <nav id="navbar" className="navbar">
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="recipes">Recipes</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>

            <div>
              {user ? <a className="btn-book-a-table" href="/dashboard">Profile</a>
                : <><a className="btn-book-a-table" href="/signup">Join us</a>
                  <a className="btn-book-a-table" href="/login">Log in</a></>}
            </div>

            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

          </div>
        </header>

        <section id="hero" className="hero d-flex align-items-center section-bg">
          <div className="container">
            <div className="row justify-content-between gy-5">
              <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                <h2>Connecting foodies worldwide through <br />culture and cuisine.</h2>
                <p>Food is the universal language that connects people across the world, from different places, culture and heritage.</p>
                <div className="d-flex" >
                  <a href="recipes" className="btn-book-a-table">Explore the recipes!</a>
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
                <img src={heroImg} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <main id="main" style={{
          margin: 0,
        }}>

          <section id="about" className="about">
            <div className="container" >

              <div className="section-header">
                <h2>About Us</h2>
                <p>Learn More <span>About Us</span></p>
              </div>

              <div className="row gy-4">
                <div className="col-lg-7 position-relative" style={{
                  backgroundImage:
                    `url(${aboutImg})`
                }}>
                  <div className="call-us position-absolute">
                    <h4>For any queries</h4>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
                <div className="col-lg-5 d-flex align-items-end" >
                  <div className="content ps-0 ps-lg-5">
                    <p className="fst-italic">
                      Welcome to Foodies, the ultimate platform for foodies everywhere to connect, share, and celebrate their love for food and culture.
                    </p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> Foodies connects food lovers worldwide and celebrates culinary diversity.</li>
                      <li><i className="bi bi-check2-all"></i> Our user-friendly interface lets you discover, share, and connect with foodies from different backgrounds.</li>
                      <li><i className="bi bi-check2-all"></i>We believe food has the power to bring people together, promote understanding and tolerance, and inspire innovative solutions.</li>
                    </ul>
                    <p>
                      We are passionate about creating a space where foodies can come together to share their love of food and culture. Join us on this delicious journey around the world and discover the joy of connecting through food.
                    </p>

                    <div className="position-relative mt-4">
                      <img src="assets/img/about-2.jpg" className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="why-us" className="why-us section-bg">
            <div className="container" >

              <div className="row gy-4">

                <div className="col-lg-4" >
                  <div className="why-box">
                    <h3>Why Choose Foodies?</h3>
                    <p>
                      Our app is the ideal platform for foodies worldwide to connect, discover new cuisines, share recipes and stories, and build meaningful connections with people from different regions and countries while promoting cultural diversity and heritage at the same time. Hope you enjoy our app and explore the world through food!
                    </p>
                    <div className="text-center">
                      <a href="#about" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8 d-flex align-items-center">
                  <div className="row gy-4">

                    <div className="col-xl-4">
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-clipboard-data"></i>
                        <h4>Global community</h4>
                        <p>Connecting with foodies from different regions and countries can broaden your culinary horizons and offer unique insights into different cultures.</p>
                      </div>
                    </div>

                    <div className="col-xl-4">
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-gem"></i>
                        <h4>Fun user experience</h4>
                        <p>Our app offers a fun and engaging user experience through features like recipe sharing, virtual cooking challenges, and cultural events.</p>
                      </div>
                    </div>

                    <div className="col-xl-4">
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-inboxes"></i>
                        <h4>Convenience</h4>
                        <p>Users can access all of these features in one place, making it easy and convenient to connect with like-minded foodies from around the world.</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </section>

          <section id="stats-counter" className="stats-counter">
            <div className="container">

              <div className="row gy-4">

                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">5149</span>
                    <p>Recipes</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">10041</span>
                    <p>Members</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter">1230</span>
                    <p>Reviews</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter">4.4</span>
                    <p>Rating</p>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <section id="menu" className="menu">
            <div className="container">

              <div className="section-header">
                <p>Featured <span>Recipes</span></p>
              </div>

              <div className="tab-content">

                <div className="tab-pane fade active show" id="menu-starters">

                  <div className="row gy-5">

                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Paneer Tikka</h4>
                      <p className="ingredients">
                        paneer, tomatoes, onions, yogurt, spices...
                      </p>
                      <p className="price">
                        India
                      </p>
                    </div>

                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Australian Meat Pie</h4>
                      <p className="ingredients">
                        round beef, onion, cloves etc...
                      </p>
                      <p className="price">
                        Australia
                      </p>
                    </div>

                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Beef Stroganoff</h4>
                      <p className="ingredients">
                        beef, butter, mushroom, onion...
                      </p>
                      <p className="price">
                        Russia
                      </p>
                    </div>

                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Machboos</h4>
                      <p className="ingredients">
                        chicken, onion, tomatoes, olives...
                      </p>
                      <p className="price">
                        Qatar
                      </p>
                    </div>

                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Turkey Cheeseburger</h4>
                      <p className="ingredients">
                        turkey, cheese, bread, butter...
                      </p>
                      <p className="price">
                        USA
                      </p>
                    </div>

                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Schnitzel</h4>
                      <p className="ingredients">
                        pork, eggs, pepper, bread crumbs...
                      </p>
                      <p className="price">
                        Germany
                      </p>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </section>


          <section id="testimonials" className="testimonials section-bg">
            <div className="container">

              <div className="section-header">
                <h2>Messages</h2>
                <p>From the <span>CEO's Desk</span></p>
              </div>

              <div className="slides-1 swiper">
                <div className="swiper-wrapper">

                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="row gy-4 justify-content-center">
                        <div className="col-lg-6">
                          <div className="testimonial-content">
                            <p>
                              <i className="bi bi-quote quote-icon-left"></i>
                              Supporting cultural diversity and heritage through the love of food can bring people together, promote understanding and tolerance, and inspire innovative solutions.
                              <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            <h3>Malavika Harikumar</h3>
                            <h4>CEO</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 text-center">
                          <img src="assets/img/testimonials/testimonials-2.jpg" className="img-fluid testimonial-img" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>

            </div>
          </section>

          <section id="contact" className="contact">
            <div className="container">

              <div className="section-header">
                <h2>Contact</h2>
                <p>Need Help? <span>Contact Us</span></p>
              </div>

              <div className="mb-3">
                <iframe title="sd" width={1295} height={350} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
              </div>

              <div className="row gy-4">

                <div className="col-md-6">
                  <div className="info-item  d-flex align-items-center">
                    <i className="icon bi bi-map flex-shrink-0"></i>
                    <div>
                      <h3>Our Address</h3>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-item d-flex align-items-center">
                    <i className="icon bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h3>Email Us</h3>
                      <p>contact@example.com</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-item  d-flex align-items-center">
                    <i className="icon bi bi-telephone flex-shrink-0"></i>
                    <div>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-item  d-flex align-items-center">
                    <i className="icon bi bi-share flex-shrink-0"></i>
                    <div>
                      <h3>Opening Hours</h3>
                      <div><strong>Mon-Sat:</strong> 11AM - 23PM
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

        </main>
        <footer id="footer" class="footer" style={{
          margin: 0,
        }}>

          <div class="container">
            <div class="row gy-3">
              <div class="col-lg-3 col-md-6 d-flex">
                <i class="bi bi-geo-alt icon"></i>
                <div>
                  <h4>Address</h4>
                  <p>
                    A108 Adam Street <br />
                    New York, NY 535022 - US<br />
                  </p>
                </div>

              </div>

              <div class="col-lg-3 col-md-6 footer-links d-flex">
                <i class="bi bi-telephone icon"></i>
                <div>
                  <h4>Reservations</h4>
                  <p>
                    <strong>Phone:</strong> +1 5589 55488 55<br />
                    <strong>Email:</strong> contact@example.com<br />
                  </p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 footer-links d-flex">
                <i class="bi bi-clock icon"></i>
                <div>
                  <h4>Opening Hours</h4>
                  <p>
                    <strong>Mon-Sat: 11AM</strong> - 23PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Follow Us</h4>
                <div class="social-links d-flex">
                  <a href="/" class="twitter"><i class="bi bi-twitter"></i></a>
                  <a href="/" class="facebook"><i class="bi bi-facebook"></i></a>
                  <a href="/" class="instagram"><i class="bi bi-instagram"></i></a>
                  <a href="/" class="linkedin"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>

            </div>
          </div>

          <div class="container" style={{
            color: "white",
          }}>
            <div class="copyright" style={{
              color: "white",
            }}>
              &copy; Copyright <strong><span style={{
                color: "white",
              }}>Foodies</span></strong>. All Rights Reserved
            </div>
          </div>

        </footer>

      </body>
    </>
  );
};
