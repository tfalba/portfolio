
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import { Carousel } from 'react-bootstrap'

// const CardContent = ({ backgroundColor, border, font, backgroundImage, title, message, fontColor, borderType, justify, username }) => {
//   return (
//     <div className='create-card-section flex-col'>
//       <div className='flex-center'>
//         <Card>
//           <Card.Body>
//             <iframe allowFullScreen className='card-detail-holder' type='text/html' src={backgroundImage} width='90%' />
//           </Card.Body>
//         </Card>
//       </div>
//     </div>
//   )
// }

const CardContent = ({ project }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className='create-card-section flex-col'>
      {/* <Button onClick={handleShow}>Click for detail</Button> */}

      <div className='flex-center'>

        <Card>
          <Card.Body>
            {project.iFrame
              ? <iframe allowFullScreen className='card-detail-holder' type='text/html' src={project.url} width='90%' />
              : <div style={{ backgroundImage: `url(${project.coverImageUrl})` }} className='card-detail-holder' />}

            <Modal style={{ top: '80vh' }} show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{project.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{project.shortDescription}</Modal.Body>
              <Modal.Footer>
                <Button variant='primary' onClick={handleClose}>
                  Close
                </Button>
                <Button variant='secondary' onClick={handleClose}>
                  <a href={project.url} rel='noreferrer' target='_blank'>Link to site</a>
                </Button>
                <Button variant='secondary' onClick={handleClose}>
                  Link to code
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
          {/* <Card.Footer>
            {project.title}
          </Card.Footer> */}

        </Card>

      </div>
      {/* <Button style={{ width: '130px', display: 'block' }} onClick={handleShow}>Click for detail</Button> */}
      {/* <Carousel.Caption>{project.shortDescription}</Carousel.Caption> */}

    </div>
  )
}
export default CardContent
