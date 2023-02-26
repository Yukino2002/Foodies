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

export default function Dashboard() {

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

            <header id="header" class="header fixed-top d-flex align-items-center" style={
                {
                    backgroundColor: '#fff',
                    color: 'white',
                }
            }>

                <div class="d-flex align-items-center justify-content-between">
                    <a href="index.html" class="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="" />
                        <span class="d-none d-lg-block">Foodies .</span>
                    </a>
                    <i class="bi bi-list toggle-sidebar-btn"></i>
                </div>

                <nav class="header-nav ms-auto">
                    <ul class="d-flex align-items-center">

                        <li class="nav-item d-block d-lg-none">
                            <a class="nav-link nav-icon search-bar-toggle " href="#">
                                <i class="bi bi-search"></i>
                            </a>
                        </li>

                        <li class="nav-item dropdown">

                            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <i class="bi bi-bell"></i>
                                <span class="badge bg-primary badge-number">4</span>
                            </a>

                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                <li class="dropdown-header">
                                    You have 4 new notifications
                                    <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>

                                <li class="notification-item">
                                    <i class="bi bi-exclamation-circle text-warning"></i>
                                    <div>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>30 min. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr class="dropdown-divider" />
                                </li>

                                <li class="notification-item">
                                    <i class="bi bi-x-circle text-danger"></i>
                                    <div>
                                        <h4>Atque rerum nesciunt</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>1 hr. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr class="dropdown-divider" />
                                </li>

                                <li class="notification-item">
                                    <i class="bi bi-check-circle text-success"></i>
                                    <div>
                                        <h4>Sit rerum fuga</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>2 hrs. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr class="dropdown-divider" />
                                </li>

                                <li class="notification-item">
                                    <i class="bi bi-info-circle text-primary"></i>
                                    <div>
                                        <h4>Dicta reprehenderit</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>4 hrs. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li class="dropdown-footer">
                                    <a href="#">Show all notifications</a>
                                </li>

                            </ul>

                        </li>

                        <li class="nav-item dropdown pe-3">

                            <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <img src="assets/img/profile-img.jpg" alt="" class="rounded-circle" />
                                <span class="d-none d-md-block dropdown-toggle ps-2">Malavika Harikumar</span>
                            </a>

                        </li>

                    </ul>
                </nav>

            </header>

            <aside id="sidebar" class="sidebar" style={{
                backgroundColor: '#f6f9ff',
            }}>

                <ul class="sidebar-nav" id="sidebar-nav">

                    <li class="nav-item" style={{

                    }}>
                        <a class="nav-link collapsed" href="/">
                            <i class="bi bi-person"></i>
                            <span>Profile</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="/">
                            <i class="bi bi-gem"></i>
                            <span>Icons</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="/">
                            <i class="bx bx-heart"></i>
                            <span>Favourites</span>
                        </a>
                    </li>



                    <li class="nav-item">
                        <a class="nav-link collapsed" href="/">
                            <i class="bi bi-question-circle"></i>
                            <span>F.A.Q</span>
                        </a>
                    </li>


                    <li class="nav-item">
                        <a class="nav-link collapsed" href="/">
                            <i class="bi bi-box-arrow-in-right"></i>
                            <span>Logout</span>
                        </a>
                    </li>

                </ul>

            </aside>

            <main id="main" class="main" style={{
                backgroundColor: '#f6f9ff',
            }}>

                <div class="pagetitle" style={{
                    backgroundColor: '#f6f9ff',
                }}>
                    <h1>Dashboard</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav>
                </div>

                <section class="section dashboard" style={{
                    backgroundColor: '#f6f9ff',
                }}>
                    <div class="row">


                        <div class="col-lg-8">
                            <div class="row">


                                <div class="col-xxl-4 col-md-6">
                                    <div class="card info-card sales-card">

                                        <div class="filter">
                                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li class="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a class="dropdown-item" href="#">Today</a></li>
                                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                                <li><a class="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>

                                        <div class="card-body">
                                            <h5 class="card-title">Sales <span>| Today</span></h5>

                                            <div class="d-flex align-items-center">
                                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i class="bi bi-cart"></i>
                                                </div>
                                                <div class="ps-3">
                                                    <h6>145</h6>
                                                    <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-xxl-4 col-md-6">
                                    <div class="card info-card revenue-card">

                                        <div class="filter">
                                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li class="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a class="dropdown-item" href="#">Today</a></li>
                                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                                <li><a class="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>

                                        <div class="card-body">
                                            <h5 class="card-title">Revenue <span>| This Month</span></h5>

                                            <div class="d-flex align-items-center">
                                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i class="bi bi-currency-dollar"></i>
                                                </div>
                                                <div class="ps-3">
                                                    <h6>$3,264</h6>
                                                    <span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div class="col-xxl-4 col-xl-12">

                                    <div class="card info-card customers-card">

                                        <div class="filter">
                                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li class="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a class="dropdown-item" href="#">Today</a></li>
                                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                                <li><a class="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>

                                        <div class="card-body">
                                            <h5 class="card-title">Customers <span>| This Year</span></h5>

                                            <div class="d-flex align-items-center">
                                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i class="bi bi-people"></i>
                                                </div>
                                                <div class="ps-3">
                                                    <h6>1244</h6>
                                                    <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div class="col-lg-4">

                            <div class="card">
                                <div class="filter">
                                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                        <li class="dropdown-header text-start">
                                            <h6>Filter</h6>
                                        </li>

                                        <li><a class="dropdown-item" href="#">Today</a></li>
                                        <li><a class="dropdown-item" href="#">This Month</a></li>
                                        <li><a class="dropdown-item" href="#">This Year</a></li>
                                    </ul>
                                </div>

                                <div class="card">
                                    <div class="filter">
                                        <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li class="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>

                                            <li><a class="dropdown-item" href="#">Today</a></li>
                                            <li><a class="dropdown-item" href="#">This Month</a></li>
                                            <li><a class="dropdown-item" href="#">This Year</a></li>
                                        </ul>
                                    </div>

                                    <div class="card-body pb-0">
                                        <h5 class="card-title">News &amp; Updates <span>| Today</span></h5>

                                        <div class="news">
                                            <div class="post-item clearfix">
                                                <img src="assets/img/news-1.jpg" alt="" />
                                                <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                                                <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                                            </div>

                                            <div class="post-item clearfix">
                                                <img src="assets/img/news-2.jpg" alt="" />
                                                <h4><a href="#">Quidem autem et impedit</a></h4>
                                                <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                                            </div>

                                            <div class="post-item clearfix">
                                                <img src="assets/img/news-3.jpg" alt="" />
                                                <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
                                                <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                                            </div>

                                            <div class="post-item clearfix">
                                                <img src="assets/img/news-4.jpg" alt="" />
                                                <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                                                <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                                            </div>

                                            <div class="post-item clearfix">
                                                <img src="assets/img/news-5.jpg" alt="" />
                                                <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
                                                <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}