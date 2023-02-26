import { Helmet } from "react-helmet"
import Comments from './Comments';
import CommentForm from './CommentForm';
import { getAuth } from "firebase/auth";
import users from "./database/services/users";
import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import './assets/img/favicon.png';
import './assets/img/apple-touch-icon.png';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/main.css';
import { Container, Box } from "@mui/system";

export default function Recipe({ recipe }) {
    const auth = getAuth();
    const [open, setOpen] = useState(false);

    const saveRecipe = () => {
        users.saveRecipe(auth.currentUser.uid, recipe.id).then(r => console.log(r));
        handleClick();
    }

    const handleClick = () => {
        setOpen(true);
    };
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
    );


    if (!recipe) {

        return (
            <>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Amatic+SC:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
                <div style={
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        fontSize: '90px',
                        fontWeight: 'bold',
                        fontFamily: 'Amatic SC'
                    }
                }>Loading...</div>
            </>
        )
    }

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
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Amatic+SC:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

            <body>
                <header id="header" className="header fixed-top d-flex align-items-center">
                    <div className="container d-flex align-items-center justify-content-between">

                        <a href="/" className="logo d-flex align-items-center me-auto me-lg-0">
                            <h1>Foodies<span>.</span></h1>
                        </a>

                        <nav id="navbar" className="navbar">
                            <ul>
                            </ul>
                        </nav>

                        <div>
                            <a className="btn-book-a-table" href="/">Join us</a>
                            <a className="btn-book-a-table" href="/">Log in</a>
                        </div>

                        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                    </div>
                </header>

                <main id="main" className='container' style={{
                    padding: '20px',
                }}>
                    <Box
                        sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.175)',
                            width: '100%',
                            padding: '20px',
                            borderRadius: '10px',
                        }}>
                        <section id="menu" className="menu">
                            <div className="container">
                                <div className="section-header">
                                    <p><span>{recipe.name}</span></p>
                                </div>
                                <div className="container">
                                    {recipe.description}
                                </div>
                                <div >
                                    <Container maxWidth='100%' >
                                        <img src={recipe.imageUrl} alt="recipe" style={{
                                            width: '800px',
                                            height: '600px',
                                            objectFit: 'contain',
                                        }} />
                                    </Container>
                                    <div className="section-header">
                                        <p>Ingredients</p>
                                    </div>
                                    <ul>
                                        {recipe?.ingredients?.map((ingredient, index) => {
                                            return (
                                                <li key={index}>
                                                    {ingredient}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <div className="section-header">
                                        <p>Instructions</p>
                                    </div>
                                    <ul>
                                        {recipe?.instructions?.map((instruction, index) => {
                                            return (
                                                <li key={index}>
                                                    {instruction}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <div className="section-header">
                                        <p>Source</p>
                                    </div>
                                    {recipe.source}
                                </div>
                            </div>
                            <Button variant="contained" color="error" sx={{ margin: '20px', width: '100% '}}
                            onClick={saveRecipe}
                            >
                                Save this Recipe
                            </Button>
                            <section>
                                <div className="section-header">
                                    <p><span>Reviews</span></p>
                                </div>
                                <CommentForm id={recipe.id} />
                            </section>
                            <Comments id={recipe.id} />
                        </section>
                    </Box>
                </main>

                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Recipe Saved"
                    action={action}
                />

                <footer id="footer" class="footer" style={{
                    color: 'white',
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 'auto',
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
                        color: 'white',
                    }}>
                        <div class="copyright" style={{
                            color: 'white',
                        }}>
                            &copy; Copyright <strong><span style={{
                                color: 'white',
                            }}>Foodies</span></strong>. All Rights Reserved
                        </div>
                    </div>

                </footer>

            </body>
        </>
    );
};