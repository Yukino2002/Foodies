import { useState } from 'react';
import { Helmet } from "react-helmet"


import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import './assets/img/favicon.png';
import './assets/img/apple-touch-icon.png';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/main.css';

interface CountryType {
  code: string;
  label: string;
  suggested?: boolean;
}

const countries: CountryType[] = [
  { code: 'AD', label: 'Andorra' },
  {
    code: 'AE',
    label: 'United Arab Emirates',
  },
  { code: 'AF', label: 'Afghanistan' },
  {
    code: 'AG',
    label: 'Antigua and Barbuda',
  },
  { code: 'AI', label: 'Anguilla' },
  { code: 'AL', label: 'Albania' },
  { code: 'AM', label: 'Armenia' },
  { code: 'AO', label: 'Angola' },
  { code: 'AQ', label: 'Antarctica' },
  { code: 'AR', label: 'Argentina' },
  { code: 'AS', label: 'American Samoa' },
  { code: 'AT', label: 'Austria' },
  {
    code: 'AU',
    label: 'Australia',

    suggested: true,
  },
  { code: 'AW', label: 'Aruba' },
  { code: 'AX', label: 'Alland Islands' },
  { code: 'AZ', label: 'Azerbaijan' },
  {
    code: 'BA',
    label: 'Bosnia and Herzegovina',
  },
  { code: 'BB', label: 'Barbados' },
  { code: 'BD', label: 'Bangladesh' },
  { code: 'BE', label: 'Belgium' },
  { code: 'BF', label: 'Burkina Faso' },
  { code: 'BG', label: 'Bulgaria' },
  { code: 'BH', label: 'Bahrain' },
  { code: 'BI', label: 'Burundi' },
  { code: 'BJ', label: 'Benin' },
  { code: 'BL', label: 'Saint Barthelemy' },
  { code: 'BM', label: 'Bermuda' },
  { code: 'BN', label: 'Brunei Darussalam' },
  { code: 'BO', label: 'Bolivia' },
  { code: 'BR', label: 'Brazil' },
  { code: 'BS', label: 'Bahamas' },
  { code: 'BT', label: 'Bhutan' },
  { code: 'BV', label: 'Bouvet Island' },
  { code: 'BW', label: 'Botswana' },
  { code: 'BY', label: 'Belarus' },
  { code: 'BZ', label: 'Belize' },
  {
    code: 'CA',
    label: 'Canada',
    suggested: true,
  },
  {
    code: 'CC',
    label: 'Cocos (Keeling) Islands',

  },
  {
    code: 'CD',
    label: 'Congo, Democratic Republic of the',
  },
  {
    code: 'CF',
    label: 'Central African Republic',
  },
  {
    code: 'CG',
    label: 'Congo, Republic of the',
  },
  { code: 'CH', label: 'Switzerland' },
  { code: 'CI', label: "Cote d'Ivoire" },
  { code: 'CK', label: 'Cook Islands' },
  { code: 'CL', label: 'Chile' },
  { code: 'CM', label: 'Cameroon' },
  { code: 'CN', label: 'China' },
  { code: 'CO', label: 'Colombia' },
  { code: 'CR', label: 'Costa Rica' },
  { code: 'CU', label: 'Cuba' },
  { code: 'CV', label: 'Cape Verde' },
  { code: 'CW', label: 'Curacao' },
  { code: 'CX', label: 'Christmas Island' },
  { code: 'CY', label: 'Cyprus' },
  { code: 'CZ', label: 'Czech Republic' },
  {
    code: 'DE',
    label: 'Germany',

    suggested: true,
  },
  { code: 'DJ', label: 'Djibouti' },
  { code: 'DK', label: 'Denmark' },
  { code: 'DM', label: 'Dominica' },
  {
    code: 'DO',
    label: 'Dominican Republic',
  },
  { code: 'DZ', label: 'Algeria' },
  { code: 'EC', label: 'Ecuador' },
  { code: 'EE', label: 'Estonia' },
  { code: 'EG', label: 'Egypt' },
  { code: 'EH', label: 'Western Sahara' },
  { code: 'ER', label: 'Eritrea' },
  { code: 'ES', label: 'Spain' },
  { code: 'ET', label: 'Ethiopia' },
  { code: 'FI', label: 'Finland' },
  { code: 'FJ', label: 'Fiji' },
  {
    code: 'FK',
    label: 'Falkland Islands (Malvinas)',
  },
  {
    code: 'FM',
    label: 'Micronesia, Federated States of',
  },
  { code: 'FO', label: 'Faroe Islands' },
  {
    code: 'FR',
    label: 'France',
    suggested: true,
  },
  { code: 'GA', label: 'Gabon' },
  { code: 'GB', label: 'United Kingdom' },
  { code: 'GD', label: 'Grenada' },
  { code: 'GE', label: 'Georgia' },
  { code: 'GF', label: 'French Guiana' },
  { code: 'GG', label: 'Guernsey' },
  { code: 'GH', label: 'Ghana' },
  { code: 'GI', label: 'Gibraltar' },
  { code: 'GL', label: 'Greenland' },
  { code: 'GM', label: 'Gambia' },
  { code: 'GN', label: 'Guinea' },
  { code: 'GP', label: 'Guadeloupe' },
  { code: 'GQ', label: 'Equatorial Guinea' },
  { code: 'GR', label: 'Greece' },
  {
    code: 'GS',
    label: 'South Georgia and the South Sandwich Islands',
  },
  { code: 'GT', label: 'Guatemala' },
  { code: 'GU', label: 'Guam' },
  { code: 'GW', label: 'Guinea-Bissau' },
  { code: 'GY', label: 'Guyana' },
  { code: 'HK', label: 'Hong Kong' },
  {
    code: 'HM',
    label: 'Heard Island and McDonald Islands',
  },
  { code: 'HN', label: 'Honduras' },
  { code: 'HR', label: 'Croatia' },
  { code: 'HT', label: 'Haiti' },
  { code: 'HU', label: 'Hungary' },
  { code: 'ID', label: 'Indonesia' },
  { code: 'IE', label: 'Ireland' },
  { code: 'IL', label: 'Israel' },
  { code: 'IM', label: 'Isle of Man' },
  { code: 'IN', label: 'India' },
  {
    code: 'IO',
    label: 'British Indian Ocean Territory',
  },
  { code: 'IQ', label: 'Iraq' },
  {
    code: 'IR',
    label: 'Iran, Islamic Republic of',

  },
  { code: 'IS', label: 'Iceland' },
  { code: 'IT', label: 'Italy' },
  { code: 'JE', label: 'Jersey' },
  { code: 'JO', label: 'Jordan' },
  {
    code: 'JP',
    label: 'Japan',

    suggested: true,
  },
  { code: 'KE', label: 'Kenya' },
  { code: 'KG', label: 'Kyrgyzstan' },
  { code: 'KH', label: 'Cambodia' },
  { code: 'KI', label: 'Kiribati' },
  { code: 'KM', label: 'Comoros' },
  {
    code: 'KN',
    label: 'Saint Kitts and Nevis',
  },
  {
    code: 'KP',
    label: "Korea, Democratic People's Republic of",
  },
  { code: 'KR', label: 'Korea, Republic of' },
  { code: 'KW', label: 'Kuwait' },
  { code: 'KY', label: 'Cayman Islands' },
  { code: 'KZ', label: 'Kazakhstan', },
  {
    code: 'LA',
    label: "Lao People's Democratic Republic",
  },
  { code: 'LB', label: 'Lebanon' },
  { code: 'LC', label: 'Saint Lucia' },
  { code: 'LI', label: 'Liechtenstein' },
  { code: 'LK', label: 'Sri Lanka' },
  { code: 'LR', label: 'Liberia' },
  { code: 'LS', label: 'Lesotho' },
  { code: 'LT', label: 'Lithuania' },
  { code: 'LU', label: 'Luxembourg' },
  { code: 'LV', label: 'Latvia' },
  { code: 'LY', label: 'Libya' },
  { code: 'MA', label: 'Morocco' },
  { code: 'MC', label: 'Monaco' },
  {
    code: 'MD',
    label: 'Moldova, Republic of',
  },
  { code: 'ME', label: 'Montenegro' },
  {
    code: 'MF',
    label: 'Saint Martin (French part)',
  },
  { code: 'MG', label: 'Madagascar' },
  { code: 'MH', label: 'Marshall Islands' },
  {
    code: 'MK',
    label: 'Macedonia, the Former Yugoslav Republic of',
  },
  { code: 'ML', label: 'Mali' },
  { code: 'MM', label: 'Myanmar' },
  { code: 'MN', label: 'Mongolia' },
  { code: 'MO', label: 'Macao' },
  {
    code: 'MP',
    label: 'Northern Mariana Islands',
  },
  { code: 'MQ', label: 'Martinique' },
  { code: 'MR', label: 'Mauritania' },
  { code: 'MS', label: 'Montserrat' },
  { code: 'MT', label: 'Malta' },
  { code: 'MU', label: 'Mauritius' },
  { code: 'MV', label: 'Maldives' },
  { code: 'MW', label: 'Malawi' },
  { code: 'MX', label: 'Mexico' },
  { code: 'MY', label: 'Malaysia' },
  { code: 'MZ', label: 'Mozambique' },
  { code: 'NA', label: 'Namibia' },
  { code: 'NC', label: 'New Caledonia' },
  { code: 'NE', label: 'Niger' },
  { code: 'NF', label: 'Norfolk Island' },
  { code: 'NG', label: 'Nigeria' },
  { code: 'NI', label: 'Nicaragua' },
  { code: 'NL', label: 'Netherlands' },
  { code: 'NO', label: 'Norway' },
  { code: 'NP', label: 'Nepal' },
  { code: 'NR', label: 'Nauru' },
  { code: 'NU', label: 'Niue' },
  { code: 'NZ', label: 'New Zealand' },
  { code: 'OM', label: 'Oman' },
  { code: 'PA', label: 'Panama' },
  { code: 'PE', label: 'Peru' },
  { code: 'PF', label: 'French Polynesia' },
  { code: 'PG', label: 'Papua New Guinea' },
  { code: 'PH', label: 'Philippines' },
  { code: 'PK', label: 'Pakistan' },
  { code: 'PL', label: 'Poland' },
  {
    code: 'PM',
    label: 'Saint Pierre and Miquelon',
  },
  { code: 'PN', label: 'Pitcairn' },
  { code: 'PR', label: 'Puerto Rico' },
  {
    code: 'PS',
    label: 'Palestine, State of',
  },
  { code: 'PT', label: 'Portugal' },
  { code: 'PW', label: 'Palau' },
  { code: 'PY', label: 'Paraguay' },
  { code: 'QA', label: 'Qatar' },
  { code: 'RE', label: 'Reunion' },
  { code: 'RO', label: 'Romania' },
  { code: 'RS', label: 'Serbia' },
  { code: 'RU', label: 'Russian Federation' },
  { code: 'RW', label: 'Rwanda' },
  { code: 'SA', label: 'Saudi Arabia' },
  { code: 'SB', label: 'Solomon Islands' },
  { code: 'SC', label: 'Seychelles' },
  { code: 'SD', label: 'Sudan' },
  { code: 'SE', label: 'Sweden' },
  { code: 'SG', label: 'Singapore' },
  { code: 'SH', label: 'Saint Helena' },
  { code: 'SI', label: 'Slovenia' },
  {
    code: 'SJ',
    label: 'Svalbard and Jan Mayen',

  },
  { code: 'SK', label: 'Slovakia' },
  { code: 'SL', label: 'Sierra Leone' },
  { code: 'SM', label: 'San Marino' },
  { code: 'SN', label: 'Senegal' },
  { code: 'SO', label: 'Somalia' },
  { code: 'SR', label: 'Suriname' },
  { code: 'SS', label: 'South Sudan' },
  {
    code: 'ST',
    label: 'Sao Tome and Principe',
  },
  { code: 'SV', label: 'El Salvador' },
  {
    code: 'SX',
    label: 'Sint Maarten (Dutch part)',
  },
  {
    code: 'SY',
    label: 'Syrian Arab Republic',
  },
  { code: 'SZ', label: 'Swaziland' },
  {
    code: 'TC',
    label: 'Turks and Caicos Islands',
  },
  { code: 'TD', label: 'Chad' },
  {
    code: 'TF',
    label: 'French Southern Territories',
  },
  { code: 'TG', label: 'Togo' },
  { code: 'TH', label: 'Thailand' },
  { code: 'TJ', label: 'Tajikistan' },
  { code: 'TK', label: 'Tokelau' },
  { code: 'TL', label: 'Timor-Leste' },
  { code: 'TM', label: 'Turkmenistan' },
  { code: 'TN', label: 'Tunisia' },
  { code: 'TO', label: 'Tonga' },
  { code: 'TR', label: 'Turkey' },
  {
    code: 'TT',
    label: 'Trinidad and Tobago',
  },
  { code: 'TV', label: 'Tuvalu' },
  {
    code: 'TW',
    label: 'Taiwan, Republic of China',
  },
  {
    code: 'TZ',
    label: 'United Republic of Tanzania',
  },
  { code: 'UA', label: 'Ukraine' },
  { code: 'UG', label: 'Uganda' },
  {
    code: 'US',
    label: 'United States',
    suggested: true,
  },
  { code: 'UY', label: 'Uruguay' },
  { code: 'UZ', label: 'Uzbekistan' },
  {
    code: 'VA',
    label: 'Holy See (Vatican City State)',
  },
  {
    code: 'VC',
    label: 'Saint Vincent and the Grenadines',
  },
  { code: 'VE', label: 'Venezuela' },
  {
    code: 'VG',
    label: 'British Virgin Islands',
  },
  {
    code: 'VI',
    label: 'US Virgin Islands',
  },
  { code: 'VN', label: 'Vietnam' },
  { code: 'VU', label: 'Vanuatu' },
  { code: 'WF', label: 'Wallis and Futuna' },
  { code: 'WS', label: 'Samoa' },
  { code: 'XK', label: 'Kosovo' },
  { code: 'YE', label: 'Yemen' },
  { code: 'YT', label: 'Mayotte' },
  { code: 'ZA', label: 'South Africa' },
  { code: 'ZM', label: 'Zambia' },
  { code: 'ZW', label: 'Zimbabwe' },
];

export default function Recipes({ recipes }) {
  const [recipesList, setRecipesList] = useState([]);
  const [loadingRecipes, setLoadingRecipes] = useState([]);

  React.useEffect(() => {
    setRecipesList(recipes);
    setLoadingRecipes(recipes);
  }, [recipes]);

  const filter = (origin) => {
    let filteredRecipes = recipes.filter((recipe) => {
      return recipe.origin === origin;
    });
    if (origin.length === 0) filteredRecipes = recipes;
    setRecipesList(filteredRecipes);
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
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Amatic+SC:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

      {loadingRecipes?.length === 0 ? (
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
        }>Loading...</div>) : (
        <body style={
          {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }
        }>
          <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

              <a href="/" className="logo d-flex align-items-center me-auto me-lg-0">
                <h1>Foodies<span>.</span></h1>
              </a>

              <nav id="navbar" className="navbar">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/">About</a></li>
                  <li><a href="/recipes">Recipes</a></li>
                  <li><a href="/">Contact</a></li>
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

          <main id="main" style={{
            margin: 0,
          }}>
            <section id="menu" className="menu">
              <div className="container">

                <div className="section-header">
                  <p style={
                    {
                      fontSize: "80px",
                    }
                  }>Our <span>Recipes</span></p>
                  <Autocomplete
                    id="country-select-demo"
                    sx={{}}
                    options={countries}
                    autoHighlight
                    onInputChange={(event, newInputValue) => {
                      filter(newInputValue);
                    }}
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                      <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        <img
                          loading="lazy"
                          width="20"
                          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                          alt=""
                        />
                        {option.label}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Choose a country"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'new-password',
                        }}
                      />
                    )}
                  />
                </div>

                <div className="tab-content">

                  <div className="tab-pane fade active show" id="menu-starters">

                    <div className="row gy-5">

                      {recipesList.length === 0 ? (
                        <div style={
                          {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '90px',
                            fontWeight: 'bold',
                            fontFamily: 'Amatic SC',
                            paddingTop: '80px',
                          }
                        } className="col-lg-12 menu-item">No recipes from this country yet!</div>) : (recipesList.map((recipe) => (
                          <a className="col-lg-4 menu-item" href={`/recipes/${recipe.id}`}>
                            <div className="glightbox"><img src={recipe.imageUrl} className="menu-img img-fluid" alt="" /></div>
                            <h4 style={
                              {
                                textAlign: "center",
                                fontSize: "30px",
                                fontFamily: "Amatic SC",
                              }
                            }>{recipe.name}</h4>
                            <p className="ingredients" style={
                              {
                                textAlign: "center",
                              }
                            }>
                              {recipe.description?.substring(0, 105) + "..."}
                            </p>
                            <p className="price" style={
                              {
                                textAlign: "center",
                                fontSize: "20px",
                              }
                            }>
                              {recipe.user}
                            </p>
                          </a>
                        )))}

                    </div>
                  </div>
                </div>

              </div>
            </section>

          </main>
          <footer id="footer" class="footer" style={
            {
              // make the footer stick to the bottom of the page
              marginTop: "auto",
              marginLeft: 0,
              marginRight: 0,
              color: "white",
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
                      <strong>+1 5589 55488 55</strong><br />
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

        </body>)}
    </>
  );

}
