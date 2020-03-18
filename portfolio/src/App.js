import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Samples from './components/Navigation';
 
class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
              <Route path="/" compoenet={Home} exact />
              <Route path="/about" component={About}/>
              <Route path="/samples" component={Samples}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
            <main>
      <center><h1>Sulai Sivadel</h1></center>
      <center><h2> Web Developer</h2></center>
      <h3>Ambitious, user-focused Full Stack Web Developer recently graduated from Columbia University Coding  Boot Camp with experience working in teams. Possesses project management experience and experience delegating  responsibilities to a team from time at Maximus where he spearheaded a project to create the audio/ADA compliant portion of  a new healthcare plan for the disabled distributed in the state of New York. Sulai is flexible and a quick learner. Sulai is   adaptable, communicative, knowledgeable and steadfast with excellent computer engineering skills learned in the Columbia  University Coding Bootcamp where he created projects in HTML5, CSS, JavaScript, and React.

      </h3>
      <div class="row">
          <div class="column">RuneSkype is our final project for the Columbia Coding Bootcamp. It is the newest and best way for you and your friends to interact while playing your favorite Role Playing Game (RPG).
              Getting Started
              Playing RuneSkype is easy, just download a copy from our homepage or our repo:
              <br />
              <a href="https://github.com/Sulai3030/RuneSkype">Read More</a></div>
          <div class="column">The G.O.A.T. Voter Beer Near Here
          Beer Near Here is a project to successfully connect discerning beer drinkers in Manhattan  with bars in the city that serve the beers that they like. We start with a brief survey that takes in their preferences and matches those answers with the Untappd database. Using this API    we can populate a map using the Google Maps API that then lists the locations of bars and taverns       that carry the user's beer preference.
          <br />
              <a href="https://github.com/Sulai3030/GOAT-voter">Read More</a>
          </div>
      </div>
      <div class="row">
          <div class="column">Beer Near Here
        Beer Near Here is a project to successfully         connect discerning beer drinkers in Manhattan         with bars in the city that serve the beers that         they like. We start with a brief survey that        takes in their preferences and matches those        answers with the Untappd database. Using this API       we can populate a map using the Google Maps API       that then lists the locations of bars and taverns      t      hat carry the user's beer preference.
              <br />
              <a href="https://github.com/Sulai3030/RuneSkype">Read More</a></div>
          <div class="column">ReactJS Search Project
          The React Search was a project that required us to use ReactJs while creating an app that           would scrape data from the New York Times using their API so that an end-user would be able           to search for articles from any time period that the New york Times published, say a recipe           from the food section and then be able to save that date to their own clipboard.
          <br />
              <a href="https://github.com/Sulai3030/react-nytimes">Read More</a>
          </div>
      </div>
      <div class="row">
          <div class="column">Mongo Scraper Project
              <br />
              Mongo Web Scraper Project
              The MongoScraper Assignment was an excercise that required us to employ Handlebars, MongoDB, NodeJs and a Heroku backend.
              <br />
              <a href="https://github.com/Sulai3030/mongoScraper">Read More</a></div>
          <div class="column">
          Firebase as a Backend Project
          The Firebase Assignment is a culmination of the first half of our learning utilizing HTML,          CSS, JavaScript and Firebase. Also know as the Train Scheduuler assignment we were tasked         with using Google's Firebase platform. Firebase allows you to store and sync data across all          clients in realtime, and remains available when your app goes offline. The Firebase Realtime        Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to       every connected client.

          <br />
              <a href="https://github.com/Sulai3030/firebaseAssignment">Read More</a>
          </div>
      </div>
      <div class="row">
          <div class="column">LIRI Bot Node Excercise
              <br />
          The LIRI Bot excercise is an assignment where we employed LIRI or Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in paramares and returns data. In this case it takes in parameters from both the Twitter and Spotify apps and interpolates that data and returns data to the user.
          <br />
              <a href="https://github.com/Sulai3030/mongoScraper">Read More</a></div>
          <div class="column">
          Giphy API Project
          <br />
          The Giphy API goal assignment was to create a webpage and dynamically populate a grid with gifs when the user input a search parameter. Using an array as well as jQuery and event handlers I was able to allow a user via an Ajax call to populate the page with appropriate gifs by stipulatinig the rating in the if statement.

          <br />
              <a href="https://github.com/Sulai3030/firebaseAssignment">Read More</a>
          </div>
      </div>
      <div class="row">
          <div class="column">Old Recipes and Blog
              <br />
              My old blog, Dante Calabria's Sox was dedicated to film review and dissection. It was named after Dante Calabria, a player on the University of North Carolina Tar Heels basketball team who was noted for not wearing socks while he played. I was a professional writer of sustainable food recipes, TV and Film Reviews, as well as educational and Technical Writing. Samples of which can be found HERE
              <br />
              <a href="/Blog.js">Read More</a>
          </div>
          
      </div>
      <br />
      <h6>The date according to Go is:</h6>
    </main>
  );
}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;