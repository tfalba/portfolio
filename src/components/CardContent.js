
import Card from 'react-bootstrap/Card'

const CardContent = ({ backgroundColor, border, font, backgroundImage, title, message, fontColor, borderType, justify, username }) => {
  return (
    <div className='create-card-section flex-col'>
      <div className='flex-center'>
        <Card>
          <Card.Body>
            <iframe allowFullScreen className='card-detail-holder' type='text/html' src={backgroundImage} width='90%' />
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default CardContent
