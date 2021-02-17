import movieDatabaseImage from './images/movie-database-screenshot.jpg'
import mysteryWordImage from './images/mystery-word-screenshot.jpg'
import movieWatcherImage from './images/movie-watcher-screenshot.jpg'

const portfolioData = [
  {
    title: 'Social Greeting Card App',
    iFrame: true,
    url: 'https://sharp-wright-161e04.netlify.app/',
    shortDescription: 'A team project with a frontend built in react and a backend built in django that creates a REST API on heroku. Users can create custom greeting cards using photos from the Unsplash API, save and edit them. Users can follow other friends and favorite cards.',
    coverImageUrl: '',
    gitHubUrl: ''
  },
  {
    title: 'Trivia Game',
    iFrame: true,
    url: 'https://blissful-lewin-7eeb51.netlify.app/',
    shortDescription: 'Built in react, this trivia game searches a trivia api for questions by category and gives users the option of playing different levels. Scores are reported at the end with visualization tools from victory.',
    coverImageUrl: '',
    gitHubUrl: 'https://github.com/momentum-projects/react-trivia-tfalba'
  },
  {
    title: 'Itunes Music Search',
    iFrame: true,
    url: 'https://suspicious-tesla-230564.netlify.app/',
    shortDescription: 'A search tool built with vanilla JavaScript to find music tracks by song, album, or artist. Features audio samples.',
    coverImageUrl: '',
    gitHubUrl: 'https://github.com/momentum-team-6/itunes-search-app-tfalba'
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
    coverImageUrl: '',
    gitHubUrl: 'https://github.com/tfalba/react-freeshelf'
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
    title: 'Memory Matching Game',
    iFrame: true,
    url: 'https://laughing-bardeen-b58c2b.netlify.app/',
    shortDescription: 'A memory tile match game built with vanilla JavaScript. Includes multiple levels and category types.',
    coverImageUrl: '',
    gitHubUrl: 'https://github.com/tfalba/js-memory-game-tfalba'
  },
  {
    title: 'Movie Watching Tracker',
    iFrame: false,
    url: '',
    shortDescription: 'Built with JavaScript to search movies and mark as to-watch or watched. Features trailer preview.',
    coverImageUrl: movieWatcherImage,
    gitHubUrl: ''
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
