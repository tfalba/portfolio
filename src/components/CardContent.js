
import Card from 'react-bootstrap/Card'

const CardContent = ({ backgroundColor, border, font, backgroundImage, title, message, fontColor, borderType, justify, username }) => {
  let justification = 'center'
  if (justify === 'left') {
    justification = 'flex-start'
  } else if (justify === 'right') {
    justification = 'flex-end'
  }

  return (
    <div className='create-card-section flex-col'>
      <div className='flex-center'>
        <Card>
          {/* <Card.Body>
            <div className='card-detail-holder myimage myfont-big' style={{ color: 'white', backgroundImage: `url(${backgroundImage}` }}><span style={{ fontFamily: `${font}` }} className='my-card-title'>{title}</span></div>
          </Card.Body> */}
          <Card.Body>
            <iframe allowfullscreen='true' className='card-detail-holder' type='text/html' src={backgroundImage} width='90%' />
          </Card.Body>
        </Card>
        {/* <Card className='flex animate__animated animate__fadeIn'>
          <Card.Body>
            <div className='inside-body' style={{ border: `${borderType} ${border}`, justifyContent: `${justification}`, alignItems: 'center', color: `${fontColor}`, backgroundColor: `${backgroundColor}` }}><span style={{ textAlign: `${justify}`, fontFamily: `${font}` }}>{message}</span></div>
          </Card.Body>
        </Card> */}
      </div>
    </div>
  )
}

export default CardContent
