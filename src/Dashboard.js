import React from 'react';
import { Helmet } from "react-helmet"

import './assets2/vendor/bootstrap/css/bootstrap.min.css';
import './assets2/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets2/vendor/boxicons/css/boxicons.min.css';
import './assets2/vendor/quill/quill.snow.css';
import './assets2/vendor/quill/quill.bubble.css';
import './assets2/vendor/remixicon/remixicon.css';
import './assets2/vendor/simple-datatables/style.css';
import './assets2/css/style.css';

import { getAuth } from 'firebase/auth';
import users from './database/services/users';

export default function Dashboard({ recipes }) {

    const auth = getAuth();
    const user = auth.currentUser;
    const [userObj, setUserObj] = React.useState({});
    const [myRecipes, setMyRecipes] = React.useState([]);
    const [savedRecipes, setSavedRecipes] = React.useState([]);
    const [heading, setHeading] = React.useState('My Recipes');

    users.getUser(user?.uid).then((data) => {
        const savedRecipesTemp = recipes.filter((recipe) => {
            return data.savedRecipes.includes(recipe.id);
        });
        const myRecipesTemp = recipes.filter((recipe) => {
            return recipe.user === user?.uid;
        });

        setUserObj(data);
        setMyRecipes(myRecipesTemp);
        setSavedRecipes(savedRecipesTemp);

        // console.log(myRecipesTemp);
        // console.log(savedRecipesTemp);
    });

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Foodies - Restaurant</title>
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <meta content="" name="keywords" />
            </Helmet>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Amatic+SC:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

            <header id="header" className="header fixed-top d-flex align-items-center" style={
                {
                    backgroundColor: '#fff',
                    color: 'white',
                }
            }>

                <div className="d-flex align-items-center justify-content-between">
                    <a href="/" className="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="" />
                        <span className="d-none d-lg-block" style={{
                            fontSize: '40px',
                            fontFamily: 'Amatic SC',
                        }}>Go Back</span>
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item d-block d-lg-none">
                            <a className="nav-link nav-icon search-bar-toggle " href="#">
                                <i className="bi bi-search"></i>
                            </a>
                        </li>
                        <li className="nav-item pe-3">
                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#">
                                <img src="assets/img/profile-img.jpg" alt="" className="rounded-circle" />
                                <span className="d-none d-md-block" style={{
                                    fontSize: '25px',
                                    fontFamily: 'Amatic SC',
                                }}>{userObj?.username}</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <aside id="sidebar" className="sidebar" style={{
                backgroundColor: '#f6f9ff',
            }}>

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <button style={{
                            all: 'unset',
                            width: '100%',
                        }} onClick={() => {
                            setHeading('My Recipes');
                        }}>
                            <a className="nav-link collapsed">
                                <i className="bi bi-person"></i>
                                <span style={{
                                    fontFamily
                                        : 'Amatic SC',
                                    fontSize: '30px',
                                }}>My Recipes</span>
                            </a>
                        </button>

                    </li>

                    <li className="nav-item">
                        <button style={{
                            all: 'unset',
                            width: '100%',
                        }} onClick={() => {
                            setHeading('Saved Recipes');
                        }}>
                            <a className="nav-link collapsed">
                                <i className="bx bx-heart"></i>
                                <span style={{
                                    fontFamily
                                        : 'Amatic SC',
                                    fontSize: '30px',
                                }}>Saved Recipes</span>
                            </a>
                        </button>

                    </li>

                </ul>

            </aside>

            <main id="main" className="main" style={{
                backgroundColor: '#f6f9ff',
            }}>

                <div className="pagetitle" style={{
                    backgroundColor: '#f6f9ff',
                }}>
                    <h1 style={
                        {
                            padding: '20px',
                            fontSize: '60px',
                            fontWeight: 'bold',
                            fontFamily
                                : 'Amatic SC',
                        }
                    }>{heading}</h1>
                </div>

                <section className="section dashboard" style={{
                    backgroundColor: '#f6f9ff',
                    paddingTop: '40px',
                }}>
                    <div className="row">


                        <div className="col-lg-12">
                            <div className="row">

                                {heading === 'My Recipes' ? myRecipes.map((recipe) => (
                                    <div className="col-xxl-4 col-md-6">
                                        <a href={`/recipes/${recipe.id}`} target="_blank">
                                            <div className="card info-card sales-card">
                                                <div className="card-body">
                                                    <h5 className="card-title" style={{
                                                        fontFamily
                                                            : 'Amatic SC',
                                                        fontSize: '40px',
                                                    }}>{recipe.name}</h5>
                                                    <div className="d-flex align-items-center">

                                                        <img src={recipe.imageUrl} alt="" height={120} />

                                                        <div className="ps-3">
                                                            <span className="text-muted small pt-2 ps-1">{recipe.description.substring(0, 100)}</span>
                                                            <br />
                                                            <span className="text-muted small pt-2 ps-1"><strong>Preparation time:</strong> {recipe.prepTime.substring(0, 100)}</span>
                                                            <br />
                                                            <span className="text-muted small pt-2 ps-1"><strong>Serving size:</strong> {recipe.servingSize}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )) : heading === 'Saved Recipes' ? savedRecipes.map((recipe) => (
                                    <div className="col-xxl-4 col-md-6">
                                        <a href={`/recipes/${recipe.id}`} target="_blank">
                                            <div className="card info-card sales-card">
                                                <div className="card-body">
                                                    <h5 className="card-title" style={{
                                                        fontFamily
                                                            : 'Amatic SC',
                                                        fontSize: '40px',
                                                    }}>{recipe.name}</h5>
                                                    <div className="d-flex align-items-center">

                                                        <img src={recipe.imageUrl} alt="" height={120} />

                                                        <div className="ps-3">
                                                            <span className="text-muted small pt-2 ps-1">{recipe.description.substring(0, 100)}</span>
                                                            <br />
                                                            <span className="text-muted small pt-2 ps-1"><strong>Preparation time:</strong> {recipe.prepTime.substring(0, 100)}</span>
                                                            <br />
                                                            <span className="text-muted small pt-2 ps-1"><strong>Serving size:</strong> {recipe.servingSize}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )) : <div style={
                                    {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: '90px',
                                        fontWeight: 'bold',
                                        fontFamily: 'Amatic SC',
                                        paddingTop: '80px',
                                    }
                                } className="col-lg-12 menu-item">Nothing to show!</div>}
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}