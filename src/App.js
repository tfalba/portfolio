import './App.css'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import CardContent from './components/CardContent'
import MyProfile from './components/MyProfile'
import MyResume from './components/MyResume'
import portfolioData from './portfolioData'
import Button from 'react-bootstrap/Button'
import { InlineWidget } from 'react-calendly'
import { Col, Row } from 'react-bootstrap'

function App () {
  return (

    <Router>
      <div className='App' />

      <Switch>

        <Route path='/profile'>
          <div className='animate__animated animate__fadeIn' />
          <div>
            <header className='App-header1'>
              <Link to='/'>Home</Link>
              <Link to='/profile'>About Me</Link>
              <Link to='/resume'>Resume</Link>
              <Link to='/portfolio'>Portolio</Link>
            </header>
          </div>
          <MyProfile className='App-header2 App animate__animated animate__fadeIn' props />
        </Route>

        <Route path='/resume'>
          <div className='animate__animated animate__fadeIn' />
          <div>
            <header className='app-first App-header1'>
              <Link to='/'>Home</Link>
              <Link to='/profile'>About Me</Link>
              <Link to='/resume'>Resume</Link>
              <Link to='/portfolio'>Portolio</Link>
            </header>
          </div>
          <MyResume className='App-header2 App animate__animated animate__fadeIn' props />
        </Route>

        <Route path='/portfolio'>
          <div className='animate__animated animate__fadeIn' />
          <div>
            <header className='App App-header1'>
              <Link to='/'>Home</Link>
              <Link to='/profile'>About Me</Link>
              <Link to='/resume'>Resume</Link>
              <Link to='/portfolio'>Portolio</Link>
            </header>
          </div>
          <Carousel interval={null} className='App-header2 App'>
            {portfolioData.map((project, idx) => (
              <Carousel.Item key={idx}>
                <CardContent
                  project={project}
                />
                <div style={{ paddingTop: '30px' }} key={idx}>{project.title}</div>
                <div className='project-description'>{project.shortDescription}</div>
                {(project.url !== '') && (
                  <Button variant='secondary'>
                    <a href={project.url} rel='noreferrer' target='_blank'>Link to site</a>
                  </Button>
                )}
                {(project.gitHubUrl !== '') && (
                  <Button variant='secondary'>
                    <a href={project.gitHubUrl} rel='noreferrer' target='_blank'>Link to code</a>
                  </Button>
                )}
              </Carousel.Item>
            ))}
          </Carousel>
        </Route>

        <Route path='/scheduler'>
          <div>
            <header className='app-first App-header1'>
              <Link to='/'>Home</Link>
              <Link to='/profile'>About Me</Link>
              <Link to='/resume'>Resume</Link>
              <Link to='/portfolio'>Portolio</Link>
            </header>
          </div>
          <div className='App App-header2'>
            <InlineWidget url='https://calendly.com/tfalba' />
          </div>
        </Route>

        <Route path='/'>
          <div style={{ fontSize: '50px' }} className='App-header3 App animate__animated animate__fadeIn'><span>Tracy Falba</span>
            <div style={{ paddingTop: '50px', fontSize: '30px', width: '60%', justifyContent: 'space-between' }} className='flex'>
              <Link to='/profile'>About Me</Link>
              <Link to='/resume'>Resume</Link>
              <Link to='/portfolio'>Portfolio</Link>
            </div>
          </div>
        </Route>

      </Switch>
      <div className='footer App'>
        <Row style={{ fontSize: '30px', justifyContent: 'center' }}>Connect @</Row>
        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Col style={{ fontSize: '20px' }} sm={4}><a href='https://github.com/tfalba' rel='noreferrer' target='_blank'>GitHub Repos</a></Col>
          <Col style={{ fontSize: '20px' }} sm={4}><a href='https://www.linkedin.com/in/tracy-falba/' rel='noreferrer' target='_blank'>LinkedIn</a></Col>
          <Col style={{ fontSize: '20px' }} sm={4}><Link to='/scheduler'>Calendly</Link></Col>
        </Row>
        {/* </Row> */}
      </div>

    </Router>

  )
}

export default App
