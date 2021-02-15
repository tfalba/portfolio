// import Card from 'react-bootstrap/Card'
// import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Media from 'react-bootstrap/Media'
// import ListGroup from 'react-bootstrap/ListGroup'
// import ListGroupItem from 'react-bootstrap/ListGroupItem'
import headshot6 from '../images/headshot6.jpg'

const MyProfile = (props) => {
  return (
    <div className='profile-page App animate__animated animate__fadeIn'>
      <Media className='flex' style={{ padding: '20px', backgroundColor: '#5a5e6140' }}>
        <img
          style={{ borderRadius: '150px', border: '12px ridge #00000012' }}
          width={280}
          height={300}
          className='mr-3'
          src={headshot6}
          alt='Tracy Falba headshot'
        />
        <Media.Body style={{ justifyContent: 'flex-start', minHeight: '305px', maxWidth: '680px', minWidth: '300px' }} className='flex-col'>
          <div style={{ textAlign: 'left', fontSize: '30px', fontWeight: '500' }}>About Me</div>
          <div style={{ textAlign: 'left', fontSize: '20px', fontWeight: '300' }}>
            I’ve always been a student of life and now a whole PhD and career later I am a student again to become a software developer! I AM HOOKED! I love this stuff and am ready to get rolling in real life bringing my talent, enthusiasm, and new skill set into the professional realm. I’m learning all the fundamentals to be a full-stack developer. I am a creative and tenacious problem solver who enjoys thinking big and working problems through to the end.
            I am excited to see how my research and statistical analysis backgrounds can integrate with my new training to create some magic!
          </div>
          <Row style={{ paddingTop: '30px', width: '100%' }}>
            <Col sm={3}>LinkedIn</Col>
            <Col sm={3}>GitHub Repos</Col>
            <Col sm={3}><Link to='/resume'>Resume</Link></Col>
            <Col sm={3}><Link to='/portfolio'>Portfolio</Link></Col>
          </Row>
        </Media.Body>
      </Media>
    </div>

  )
}

export default MyProfile
