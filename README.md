<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/GRight-Hackathon/frontend/">
    <img src="./public/gright.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">GRight</h3>

  <p align="center">
    An app to help reduce fuel consumption
    <br />
    <a href="https://github.com/GRight-Hackathon/frontend/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.youtube.com/watch?v=Xgsot9SubOM">View Video Demo</a>
    ·
    <a href="https://gright-7442b.web.app//">Try Demo deployed on Firebase</a>
    ·
    <a href="mailto: donateitlifehack@gmail.com">Report Bug</a>
    ·
    <a href="mailto: donateitlifehack@gmail.com">Request Feature</a>
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

<h3>Landing Page</h3>

[![Landing Page Screen Shot][landing-screenshot]](https://gright-7442b.web.app/)

<h3>Background</h3>
In left-hand driving countries, left-hand turns are especially dangerous and unsafe because they usually involve the vehicle turning against a flow of oncoming vehicles. 

In the following article by [CNN](https://edition.cnn.com/2017/02/16/world/ups-trucks-no-left-turns/index.html), it is mentioned that a study on crash factors actually has "left turning" as one of the leading critical pre-crash events.

UPS has already built a way to avoid left turns, using a method called "loop dispatch". Unfortunately, this is not readily available for a large range of consumers. Hence we have decided to come up with a way to use Google Map's API to allow day-to-day consumers to experience this optimisation.

<p align="right">(<a href="#top">back to top</a>)</p>

<br />

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [![React][react.js]][react-url]
- [![Firebase][firebase]][firebase-url]
- [![Tailwind][tailwind]][tailwind-url]
- [![NextJS][nextjs]][nextjs-url]
- [![GoogleMaps][googlemaps]][googlemaps-url]

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

- Google Maps Platform: follow the tutorial [here](https://developers.google.com/maps/get-started)

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/GRight-Hackathon/frontend.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Get your Google Maps API key and store it in an `.env` file in the root directory of the project under the name NEXT_PUBLIC_GOOGLE_MAPS_API_KEY. For example this should be how your `.env` file looks like:
    ```sh
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="INSERT_YOUR_API_KEY_HERE"
    ```
4. If you want to try our a dev deployment just run `npm run dev` to start this NextJS application.
5. If you need to build for production, just run `npm run build` to build a production ready application.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

<h3>Home Page</h3>

[![Landing Page Screen Shot][landing-screenshot]](https://gright-7442b.web.app/)

1. Run `npm run dev` to get it running locally.

2. Scroll to the bottom and click on `Get Started`

[![Maps Page Screen Shot][maps-screenshot]](https://gright-7442b.web.app/map)

3. Here, you are able to view the map in its entirety. 

4. Simply input your origin and destination and GRight will assit you and calculate an optimised route.

<h3>Proposed implementation</h3>

![Algorithm Screen Shot][algorithm-screenshot]

1. In an ideal scenario, we hope to implement GRight with the following algorithm.

2. After querying the API to get the route from Google Maps, we need to modify its route. 

3. Google Maps returns the steps of the of the route as latitude and longitude coordinates.

4. We will instead use the roads right before each turn (or junction) as our nodes for the graph we are going to construct.

5. Each node is going to have 4 nodes based on direction (North, Sourth, East, West).

6. To construct the graph, we form an edge between nodes only if N of a node can reach the S of the next node OR <br/>
   E of a node can reach the W of the next node (**Assuming** the person is moving from N to S initially).

7. Lastly, we make use of Djikstra's algorithm to calculate the most optimised path.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->

## Contact

Jonathan - [Linkedin](https://www.linkedin.com/in/jonjon98)

Jason - [Linkedin](https://www.linkedin.com/in/ja-sony/)

Eugene - [LinkedIn](https://www.linkedin.com/in/eugenetayyj/)

Shaune - [LinkedIn](https://www.linkedin.com/in/shauneang/)

Yuan Jing - [LinkedIn](https://www.linkedin.com/in/chow-yuan-jing/)

Project Link: [GitHub](https://github.com/GRight-Hackathon/frontend)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[landing-screenshot]: ./public/Landing.png
[maps-screenshot]: ./public/Maps.png
[algorithm-screenshot]: ./public/Algorithm.png
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[firebase]: https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase
[firebase-url]: https://firebase.google.com/
[tailwind]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwind-url]: https://tailwindcss.com/
[nextjs]: https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white
[nextjs-url]: https://nextjs.org/
[googlemaps]: https://img.shields.io/badge/Google%20Maps-%234285F4.svg?style=for-the-badge&logo=google-maps&logoColor=white
[googlemaps-url]: https://mapsplatform.google.com/why-google/
