import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Media from 'react-bootstrap/Media'
// import ListGroup from 'react-bootstrap/ListGroup'
// import ListGroupItem from 'react-bootstrap/ListGroupItem'
import headshot6 from '../images/headshot6.jpg'

const MyProfile = (props) => {
  return (
    // <div className='App-header2 app-second app-first animate__animated animate__fadeIn'>
    //   <Card style={{ width: '30rem' }}>
    //     <Card.Body style={{ flexBasis: '500px', backgroundImage: `url(${headshot6})` }} />
    //     {/* <Card.Img variant='top' src={headshot6} /> */}
    //     {/* /Users/tracyfalba/momentum/react/my-portfolio/src/images/headshot6.jpg */}
    //     {/* src/images/headshot6.jpg */}
    //     <Card.Body style={{ flexBasis: '500px' }}>
    //       <Card.Title>Card Title</Card.Title>
    //       <Card.Text style={{ fontSize: '20px' }}>
    //         I’ve always been a student of life and now a whole PhD and career later I am a student again to become a software developer!
    //         I AM HOOKED! I love this stuff and am ready to get rolling in real life bringing my talent, enthusiasm, and new skill set into the professional realm.
    //         I’m learning all the fundamentals to be a full-stack developer. I am a creative and tenacious problem solver who enjoys thinking big and working problems through to the end.
    //         I am excited to see how my research and statistical analysis backgrounds can integrate with my new training to create some magic!
    //       </Card.Text>
    //     </Card.Body>
    //     {/* <ListGroup className='list-group-flush'>
    //     <ListGroupItem>Cras justo odio</ListGroupItem>
    //     <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    //     <ListGroupItem>Vestibulum at eros</ListGroupItem>
    //   </ListGroup> */}
    //     <Card.Body>
    //       <Card.Link href='#'>Card Link</Card.Link>
    //       <Card.Link href='#'>Another Link</Card.Link>
    //     </Card.Body>
    //   </Card>
    //   </div>
    <div className='profile-page app-second animate__animated animate__fadeIn'>

      {/* <Container>
        <Row style={{ height: '320px' }}>
          <Col style={{ backgroundImage: `url(${headshot6})`, backgroundSize: 'cover', width: '300px' }} />
          <Col sm>I’ve always been a student of life and now a whole PhD and career later I am a student again to become a software developer! I AM HOOKED! I love this stuff and am ready to get rolling in real life bringing my talent, enthusiasm, and new skill set into the professional realm. I’m learning all the fundamentals to be a full-stack developer. I am a creative and tenacious problem solver who enjoys thinking big and working problems through to the end.
            I am excited to see how my research and statistical analysis backgrounds can integrate with my new training to create some magic!
          </Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container> */}

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
            <Col sm={3}>Resume</Col>
            <Col sm={3}>Portfolio</Col>
          </Row>
        </Media.Body>
      </Media>
      {/* <Row style={{ width: '90%' }}>
        <Col sm={3}>LinkedIn</Col>
        <Col sm={3}>GitHub Repos</Col>
        <Col sm={3}>Resume</Col>
        <Col sm={3}>Portfolio</Col>
      </Row> */}

    </div>

  )
}

export default MyProfile
