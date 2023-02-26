<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<div align="center">
  <img src="public/logo.png" alt="Logo" width="120" height="120">
  </a>

<h3 align="center">Foodies</h3>

  <p align="center">
    Discover, share, and savor global flavors with our recipe app!
    <br />
    <br />
    <a href="https://youtu.be/alx-gzNEVF4">View Demo</a>
    ·
    <a href="https://github.com/Yukino2002/Foodies/issues">Report Bug</a>
    ·
    <a href="https://github.com/Yukino2002/Foodies/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This project is a recipe-sharing app that allows users to view a wide variety of recipes from all around the world. Users can also post their own recipes, like and comment on other recipes, and create a personalized dashboard to save their favorite recipes. Additionally, the app integrates with Twilio to enable users to receive recipes offline via SMS. This feature allows users to access their favorite recipes even when they do not have access to the internet.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [React](https://reactjs.org/) - Used as the frontend framework for building user interface components.
* [Firebase](https://firebase.google.com/) - Used as the backend service for data storage, user authentication, and hosting.
* [Twilio API](https://www.twilio.com/blog/send-an-sms-react-twilio) - Integrated with the app to enable offline recipe access via SMS.
* [Material UI](https://material-ui.com/) - Used for styling the app components and creating a consistent design.
* [Express](https://expressjs.com/) - Used as the server-side framework for handling HTTP requests and routing.
* [Node.js](https://nodejs.org/en/) - Used as the JavaScript runtime environment for building the server-side components of the app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Before getting a local copy up, you must ensure that you have the necessary software required.

### Prerequisites

* Node.js
  ```sh
    https://nodejs.org/en/download/
  ```

* Firebase project
  ```sh
    https://firebase.google.com/
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Yukino2002/Foodies.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create auth.js in the `src/database` directory, and enter your Firebase config in `auth.js`
   ```sh
   const firebaseConfig = {
        apiKey:
        authDomain:
        projectId:
        storageBucket:
        messagingSenderId:
        appId:
        measurementId:
    }
   ```
4. Run the following code to set up the server for sending messages through twilio
	```
	cd server
	npm install
	```
5. Create a file named .env in the server directory and replace it with the below code
	```
	TWILIO_ACCOUNT_SID=YOUR_ACCOUNT_SID
	TWILIO_AUTH_TOKEN=YOUR_AUTH_TOKEN
	TWILIO_PHONE_NUMBER=YOUR_TWILIO_PHONE_NUMBER
	```
6. Run the server
	```
	npm start
	```
7. Run the app
   ```sh
   cd ..
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### Demo Links

* [Website](http://foodiesoftheworld.co/)
* [Tutorial video](https://youtu.be/alx-gzNEVF4)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Video integration - Support recipe videos uploaded by users or integrated from platforms like YouTube or Vimeo.
- [ ] User profile customization - Allow users to personalize their profile pages with pictures, bios, and information.
- [ ] Translation support: Allow users to translate recipes into their preferred language.

See the [open issues](https://github.com/Yukino2002/Foodies/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Contact

Pratik Jallan - pratikjalan11@gmail.com

Malavika Harikumar - malavikaha02@gmail.com

Project Link: [https://github.com/Yukino2002/Foodies](https://github.com/Yukino2002/Foodies)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

* [Design Ideas](https://bootstrapmade.com/)
* [Logo](https://lovepik.com/)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


[contributors-shield]: https://img.shields.io/github/contributors/Yukino2002/Foodies.svg?style=for-the-badge
[contributors-url]: https://github.com/Yukino2002/Foodies/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Yukino2002/Foodies.svg?style=for-the-badge
[forks-url]: https://github.com/Yukino2002/Foodies/network/members
[stars-shield]: https://img.shields.io/github/stars/Yukino2002/Foodies.svg?style=for-the-badge
[stars-url]: https://github.com/Yukino2002/Foodies/stargazers
[issues-shield]: https://img.shields.io/github/issues/Yukino2002/Foodies.svg?style=for-the-badge
[issues-url]: https://github.com/Yukino2002/Foodies/issues
[license-shield]: https://img.shields.io/github/license/Yukino2002/Foodies.svg?style=for-the-badge
[license-url]: https://github.com/Yukino2002/Foodies/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: public/mainpage.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
