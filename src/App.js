import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import CardContent from './components/CardContent'
import MyProfile from './components/MyProfile'
import MyResume from './components/MyResume'

function App () {
  return (
    <Router>
      <div className='App'>
        <div>
          {/* <div className='App'> */}
          <div className='animate__animated animate__fadeIn'>
            {/* <header className='app-second App-header2' /> */}
          </div>
          <div>
            <header className='app-first App-header1'>
              <Link to='/'>Home</Link>
              <Link to='/myprofile'>My Profile</Link>
              <Link to='/myresume'>My Resume</Link>
              <Link to='/myprojects'>My Projects</Link>
            </header>
          </div>

          {/* <div className='animate__animated animate__fadeIn'>
            <header className='App-header3 app-second' />
          </div> */}
        </div>
        <Switch>
          <Route path='/myprofile'>
            <MyProfile className='App-header3 app-second animate__animated animate__fadeIn' props />
          </Route>
          <Route path='/myresume'>
            <MyResume className='App-header2 app-second animate__animated animate__fadeIn' props />
          </Route>
          <Route path='/myprojects'>
            <Carousel interval={null} className='App-header2 app-second app-first'>
              <Carousel.Item interval={null}>
                <CardContent
                  backgroundColor='#fdd835' font='Lucinda' border='brown' title='Happy Thanksgiving' message='Hoping you had a lovely holiday!' fontColor='black' borderType='10px double' justify='flex-end'
                  backgroundImage='https://sharp-wright-161e04.netlify.app/'
                />
              </Carousel.Item>
              <Carousel.Item interval={null}>
                <CardContent
                  backgroundColor='pink' font='Lucinda' border='white' title='Happy Birthday' message="You don't look a day older!" fontColor='black' borderType='15px solid' justify='flex-start'
                  backgroundImage='https://blissful-lewin-7eeb51.netlify.app/'
                />
              </Carousel.Item>
              <Carousel.Item interval={null}>
                <CardContent
                  backgroundColor='darkgray' font='monospace' border='teal' title='Happy Anniversary' message='Ready for another 50?' fontColor='white' borderType='10px ridge' justify='center'
                  backgroundImage='https://tfalba.github.io/js-memory-game-tfalba/'
                />
              </Carousel.Item>
              <Carousel.Item interval={null}>
                <CardContent
                  backgroundColor='black' font='Lucinda' border='white' title='Flowers from My Garden' message='Wishing you a lovely day' fontColor='white' borderType='10px dotted' justify='flex-start'
                  backgroundImage='https://silly-aryabhata-afc22c.netlify.app/'
                />
              </Carousel.Item>
              <Carousel.Item interval={null}>
                <CardContent
                  backgroundColor='#fdd835' font='Lucinda' border='brown' title='Happy Thanksgiving' message='Hoping you had a lovely holiday!' fontColor='black' borderType='10px double' justify='flex-end'
                  backgroundImage='https://suspicious-tesla-230564.netlify.app/'
                />
              </Carousel.Item>
              <Carousel.Item interval={null}>
                <CardContent
                  backgroundColor='#fdd835' font='Lucinda' border='brown' title='Happy Thanksgiving' message='Hoping you had a lovely holiday!' fontColor='black' borderType='10px double' justify='flex-end'
                  backgroundImage='https://blooming-escarpment-83670.herokuapp.com/core/'
                />
              </Carousel.Item>

            </Carousel>
          </Route>
          <Route path='/'>
            <div className='App-header3 app-first animate__animated animate__fadeIn'>Hello Home
              <Link to='/myprofile'>My Profile</Link>
              <Link to='/myresume'>My Resume</Link>
              <Link to='/myprojects'>My Projects</Link>

            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
