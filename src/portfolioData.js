import movieDatabaseImage from './images/movie-database-screenshot.jpg'
import mysteryWordImage from './images/mystery-word-screenshot.jpg'
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
    gitHubUrl: ''
  },
  {
    title: 'Itunes Music Search',
    iFrame: true,
    url: 'https://suspicious-tesla-230564.netlify.app/',
    shortDescription: "If you're just getting into programming and/or JavaScript, this book will briefly explore what you need to get up and going.",
    coverImageUrl: '',
    gitHubUrl: ''
  },
  {
    title: 'Movie Nomination Tracker',
    iFrame: false,
    url: 'https://demo-movie-challenge.herokuapp.com/',
    shortDescription: 'Built with python in django and using vanilla JavaScript, this app searches a movie database and allows users to mark records for consideration or award nomination. Selected movie detail options allows user to preview trailers.',
    coverImageUrl: movieDatabaseImage,
    gitHubUrl: ''
  },
  {
    title: 'Library Shelf',
    iFrame: true,
    url: 'https://silly-aryabhata-afc22c.netlify.app/',
    shortDescription: 'A simple app built in react to toggle various levels of information about books in a library.',
    coverImageUrl: '',
    gitHubUrl: 'https://silly-aryabhata-afc22c.netlify.app/'
  },
  {
    title: 'Mystery Word',
    iFrame: false,
    url: 'https://blooming-escarpment-83670.herokuapp.com/core/',
    shortDescription: 'A hangman type game built with object-oriented programming using python and django. Adds a lookup feature that searches the Oxford Dictioary api.',
    coverImageUrl: mysteryWordImage,
    gitHubUrl: ''
  }
  // {
  //   title: 'Mystery Word',
  //   iFrame: true,
  //   url: 'https://inspiring-carson-dcc02a.netlify.app/',
  //   shortDescription: "If you're just getting into programming and/or JavaScript, this book will briefly explore what you need to get up and going.",
  //   coverImageUrl: ''
  // }

]

export default portfolioData

//
// coverImageUrl: 'https://prodimage.images-bn.com/pimages/9781593275914_p0_v4_s550x406.jpg',
