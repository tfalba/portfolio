import movieDatabaseImage from './images/movie-database-screenshot.jpg'
import mysteryWordImage from './images/mystery-word-screenshot.jpg'
import iTunesMusicSearch from './images/iTunes-Music-Search.jpg'
import triviaTime from './images/Trivia-Time.jpg'
import freeShelf from './images/Free-Shelf.jpg'
import choreWars from './images/chore-wars.jpg'
import mysterWordReact from './images/mystery-word-react.jpg'
import memoryMatch from './images/memory-match.jpg'
import cardsWithFriends from './images/Cards-with-Friends.jpg'

const portfolioData = [
  {
    title: 'Trivia Game',
    iFrame: true,
    url: 'https://blissful-lewin-7eeb51.netlify.app/',
    shortDescription: 'Built in react, this trivia game searches a trivia api for questions by category and gives users the option of playing different levels. Scores are reported at the end with visualization tools from victory.',
    coverImageUrl: triviaTime,
    gitHubUrl: 'https://github.com/tfalba/react-trivia'
  },
  {
    title: 'Itunes Music Search',
    iFrame: true,
    url: 'https://suspicious-tesla-230564.netlify.app/',
    shortDescription: 'A search tool built with vanilla JavaScript to find music tracks by song, album, or artist. Features audio samples.',
    coverImageUrl: iTunesMusicSearch,
    gitHubUrl: 'https://github.com/tfalba/itunes-search-app'
  },
  {
    title: 'Movie Nomination Tracker',
    iFrame: false,
    url: 'https://demo-movie-challenge.herokuapp.com/',
    shortDescription: 'Built with python in django and using vanilla JavaScript, this app searches a movie database and allows users to mark records for consideration or award nomination. Selected movie detail options allows user to preview trailers.',
    coverImageUrl: movieDatabaseImage,
    gitHubUrl: 'https://github.com/tfalba/movie-challenge'
  },
  {
    title: 'Library Shelf',
    iFrame: true,
    url: 'https://silly-aryabhata-afc22c.netlify.app/',
    shortDescription: 'A simple app built in react to toggle various levels of information about books in a library.',
    coverImageUrl: freeShelf,
    gitHubUrl: 'https://github.com/tfalba/react-freeshelf'
  },
  {
    title: 'Social Greeting Card App',
    iFrame: true,
    url: 'https://sharp-wright-161e04.netlify.app/',
    shortDescription: 'A team project with a frontend built in react and a backend built in django that creates a REST API on heroku. Users can create custom greeting cards using photos from the Unsplash API, save and edit them. Users can follow other friends and favorite cards.',
    coverImageUrl: cardsWithFriends,
    gitHubUrl: 'https://github.com/LMT-Phase3/group-social-ecards-tracy-logan-matt'
  },
  {
    title: 'Mystery Word',
    iFrame: false,
    url: 'https://blooming-escarpment-83670.herokuapp.com/core/',
    shortDescription: 'A hangman type game built with object-oriented programming using python and django. Adds a lookup feature that searches the Oxford Dictioary api.',
    coverImageUrl: mysteryWordImage,
    gitHubUrl: 'https://github.com/tfalba/mystery-word'
  },
  {
    title: 'Mystery Word in React',
    iFrame: true,
    url: 'https://loving-euclid-9331c1.netlify.app/',
    shortDescription: 'A hangman type game built with React linking to a Webster dictionary api to lookup word definition.',
    coverImageUrl: mysterWordReact,
    gitHubUrl: 'https://github.com/tfalba/mystery-word-react'

  },
  {
    title: 'Chore Wars',
    iFrame: true,
    url: 'https://chorewars.netlify.app/',
    shortDescription: 'A chore tracking app for families and friends. Built as a final team project at Momentum Learn. Frontend in React using a backend API built on a Django REST framework.',
    coverImageUrl: choreWars,
    gitHubUrl: 'https://github.com/JLT-Phase4'
  },

  {
    title: 'Memory Matching Game',
    iFrame: true,
    url: 'https://laughing-bardeen-b58c2b.netlify.app/',
    shortDescription: 'A memory tile match game built with vanilla JavaScript. Includes multiple levels and category types.',
    coverImageUrl: memoryMatch,
    gitHubUrl: 'https://github.com/tfalba/js-memory-game-tfalba'
  }
  // {
  //   title: 'Resume Site',
  //   iFrame: true,
  //   // url: 'http://localhost:3000/#/resume',
  //   url: 'https://www.tracy-falba.com/#/resume',
  //   shortDescription: 'Built with JavaScript to search movies and mark as to-watch or watched. Features trailer preview.',
  //   coverImageUrl: movieWatcherImage,
  //   gitHubUrl: ''
  // }

]

export default portfolioData

//
// coverImageUrl: 'https://prodimage.images-bn.com/pimages/9781593275914_p0_v4_s550x406.jpg',
